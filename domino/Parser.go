package main

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
	"os"
	"strings"

	"github.com/hashicorp/terraform/terraform"
)

type Plans []struct {
	EphemeralDisks  string  `json:"ephemeral_disks"`
	MemoryInGb      float64 `json:"memory_in_gb"`
	Name            string  `json:"name"`
	ParsedTimestamp int64   `json:"parsed_timestamp"`
	PricePerHour    float64 `json:"price_per_hour"`
	Provider        string  `json:"provider"`
	Region          string  `json:"region"`
	Vcpus           int64   `json:"vcpus"`
}

var priceMap map[string]float64

func main() {

	if len(os.Args[1:]) == 0 {
		fmt.Println("Usage: domino [path-to-terraform-plan-file]\nThe above command will take in your terraform plan and display the total cost according to current CSP pricing.")
		os.Exit(0)
	}

	terraformPlanFile := os.Args[1]

	res, _ := http.Get("http://localhost:8000/aws_ec2_prices.json")
	temp, _ := ioutil.ReadAll(res.Body)

	var plans Plans
	err := json.Unmarshal(temp, &plans)
	if err != nil {
		fmt.Println("There was an error:", err)
	}
	priceMap = planToPriceMap(plans)

	processTerraformPlan(terraformPlanFile)
}

func planToPriceMap(plans Plans) map[string]float64 {
	priceMap := make(map[string]float64)
	for _, plan := range plans {
		priceMap[strings.ToLower(plan.Name)] = plan.PricePerHour
	}
	return priceMap
}

func processTerraformPlan(planFile string) {
	file, err := os.Open(planFile)
	if err != nil {
		fmt.Println(err)
	}

	plan, err := terraform.ReadPlan(file)
	if err != nil {
		panic(err)
	}

	for moduleIdx := range plan.Diff.Modules {
		var instanceType string
		var sum float64

		for resource, instanceDiff := range plan.Diff.Modules[moduleIdx].Resources {
			resourceType := strings.Split(resource, ".")[0]
			switch resourceType {
			case "aws_instance":
				instanceType = instanceDiff.Attributes["instance_type"].New
				fmt.Println("resource type recognized: ", instanceType)

			case "azurerm_virtual_machine":
				instanceType = instanceDiff.Attributes["vm_size"].New
				fmt.Println("resource type recognized: ", instanceType)

			case "digitalocean_droplet":
				instanceType = instanceDiff.Attributes["size"].New
				fmt.Println("resource type recognized: ", instanceType)

			case "google_compute_instance":
				instanceType = instanceDiff.Attributes["machine_type"].New
				fmt.Println("resource type recognized: ", instanceType)

			default:
				fmt.Println("resource type not recognized: ", resourceType)
			}
			sum = sum + calculateCost(instanceType)
		}
		fmt.Println(sum * 720)
	}
}

func calculateCost(instanceType string) float64 {
	return priceMap[strings.ToLower(instanceType)]
}
