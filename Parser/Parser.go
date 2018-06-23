package main

import (
	"fmt"
	"github.com/hashicorp/terraform/terraform"
	"os"
	"strings"
	"encoding/json"
	"io/ioutil"
	"net/http"
)

type Plans []struct {
    EphemeralDisks  string `json:"ephemeral_disks"`
    MemoryInGb      int64 `json:"memory_in_gb"`
    Name            string `json:"name"`
    ParsedTimestamp int64  `json:"parsed_timestamp"`
    PricePerHour    float64 `json:"price_per_hour"`
    Provider        string `json:"provider"`
    Region          string `json:"region"`
    Vcpus           int64 `json:"vcpus"`
}

func main() {
	
	if(len(os.Args[1:]) == 0) {
		fmt.Println("Usage: domino [path-to-terraform-plan-file]\nThe above command will take in your terraform plan and display the total cost according to current CSP pricing.")
		os.Exit(0)
	}
	
	terraformPlanFile := os.Args[1]

	res, _ := http.Get("http://localhost:8000/azure_vm_prices.json")
	temp, _ := ioutil.ReadAll(res.Body)

	// x := string(temp)
	var plans Plans
	err := json.Unmarshal(temp, &plans)
	if err != nil {
		fmt.Println("There was an error:", err)
	}
	
	processTerraformPlan(terraformPlanFile)
}

func processTerraformPlan(planFile string){
	file, err := os.Open(planFile)
	if err != nil {
		fmt.Println(err)
	}

	plan, err := terraform.ReadPlan(file)
	if err != nil {
		panic(err)
	}

	for moduleIdx := range plan.Diff.Modules {
		var size string
		var count int
		var instanceCountMap map[string]int
		
		for resource, instanceDiff := range plan.Diff.Modules[moduleIdx].Resources {
			resourceType := strings.Split(resource, ".")[0]
			switch resourceType {
				case "aws_instance":
					size = instanceDiff.Attributes["aws_instance_type"].New

				case "azurerm_virtual_machine":
					size = instanceDiff.Attributes["vm_size"].New

				case "digitalocean_droplet":
					size = instanceDiff.Attributes["size"].New
				
				case "google_compute_instance":
					size = instanceDiff.Attributes["machine_type"].New	

				default:
					fmt.Println("resource type not recognized: ", resourceType)
			}
			count = instanceCountMap[size]
			instanceCountMap[size] = count+1
		}
		fmt.Println("map:", instanceCountMap)
	}
}

func calculateCost(instanceCountMap string) {

	
}