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

	res_aws, _ := http.Get("http://localhost:8000/aws_ec2_prices.json")
	res_azure, _ := http.Get("http://localhost:8000/azure_vm_prices.json")
	res_do, _ := http.Get("http://localhost:8000/do_droplets_prices.json")
	res_gce, _ := http.Get("http://localhost:8000/gce_prices.json")

	temp_aws, _ := ioutil.ReadAll(res_aws.Body)
	temp_azure, _ := ioutil.ReadAll(res_azure.Body)
	temp_do, _ := ioutil.ReadAll(res_do.Body)
	temp_gce, _ := ioutil.ReadAll(res_gce.Body)

	var plans_aws Plans
	var plans_azure Plans
	var plans_do Plans
	var plans_gce Plans

	err1 := json.Unmarshal(temp_aws, &plans_aws)
	if err1 != nil {
		fmt.Println("There was an error:", err1)
	}

	err2 := json.Unmarshal(temp_azure, &plans_azure)
	if err2 != nil {
		fmt.Println("There was an error:", err2)
	}
	err3 := json.Unmarshal(temp_do, &plans_do)
	if err3 != nil {
		fmt.Println("There was an error:", err3)
	}

	err4 := json.Unmarshal(temp_gce, &plans_gce)
	if err4 != nil {
		fmt.Println("There was an error:", err4)
	}

	allPlans := []Plans{}
	allPlans = append(allPlans, plans_aws)
	allPlans = append(allPlans, plans_azure)
	allPlans = append(allPlans, plans_do)
	allPlans = append(allPlans, plans_gce)

	priceMap = planToPriceMap(allPlans)

	// fmt.Println(priceMap)

	processTerraformPlan(terraformPlanFile)

	// suggestInstances(terraformPlanFile)

}

func planToPriceMap(allPlans []Plans) map[string]float64 {
	priceMap := make(map[string]float64)
	for _, plans := range allPlans {
		for _, plan := range plans {
			priceMap[strings.ToLower(plan.Name)] = plan.PricePerHour
		}
	}
	return priceMap
}

func planToMemoryMap(allPlans []Plans) map[string]float64 {
	memoryMap := make(map[string]float64)
	for _, plans := range allPlans {
		for _, plan := range plans {
			memoryMap[strings.ToLower(plan.Name)] = plan.MemoryInGb
		}
	}
	return memoryMap
}

func planToCPUMap(allPlans []Plans) map[string]int64 {
	cpuMap := make(map[string]int64)
	for _, plans := range allPlans {
		for _, plan := range plans {
			cpuMap[strings.ToLower(plan.Name)] = plan.Vcpus
		}
	}
	return cpuMap
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

func suggestInstances(planFile string) {
	file, err := os.Open(planFile)
	if err != nil {
		fmt.Println(err)
	}

	plan, err := terraform.ReadPlan(file)
	if err != nil {
		panic(err)
	}

	for moduleIdx := range plan.Diff.Modules {

		for _, instanceDiff := range plan.Diff.Modules[moduleIdx].Resources {
			// resourceType := strings.Split(resource, ".")[0]
			fmt.Println(instanceDiff.Attributes)
		}
	}
}
