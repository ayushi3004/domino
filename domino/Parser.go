package main

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"math"
	"net/http"
	"os"
	"strconv"
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
var instanceCPUMap map[string]int64
var instanceMemoryMap map[string]float64
var providerMap map[string]string
var memoryCPUMap map[string][]string

func main() {

	if len(os.Args[1:]) == 0 {
		fmt.Println("Usage: domino [path-to-terraform-plan-file]\nThe above command will take in your terraform plan and display the total cost according to current CSP pricing.")
		os.Exit(0)
	}

	terraformPlanFile := os.Args[1]

	res, _ := http.Get("http://localhost:8000/app/prices.json")

	temp, _ := ioutil.ReadAll(res.Body)

	var allPlans Plans

	err := json.Unmarshal(temp, &allPlans)
	if err != nil {
		fmt.Println("There was an error:", err)
	}

	priceMap = planToPriceMap(allPlans)
	instanceCPUMap = planToInstanceCPUMap(allPlans)
	instanceMemoryMap = planToInstanceMemoryMap(allPlans)
	memoryCPUMap = planToMemoryCPUMap(allPlans)
	providerMap = plantoProviderMap(allPlans)

	finalCost := processTerraformPlan(terraformPlanFile)
	fmt.Println("Total Cost: ", finalCost)

}

func planToPriceMap(allPlans Plans) map[string]float64 {
	priceMap := make(map[string]float64)
	// for _, plans := range allPlans {
		for _, plan := range allPlans {
			priceMap[strings.ToLower(plan.Name)] = plan.PricePerHour
		}
	// }
	return priceMap
}

func plantoProviderMap(allPlans Plans) map[string]string {
	providerMap := make(map[string]string)
	// for _, plans := range allPlans {
		for _, plan := range allPlans {
			providerMap[strings.ToLower(plan.Name)] = plan.Provider
		}
	// }
	return providerMap
}

func planToInstanceMemoryMap(allPlans Plans) map[string]float64 {
	memoryMap := make(map[string]float64)
	// for _, plans := range allPlans {
		for _, plan := range allPlans {
			memoryMap[strings.ToLower(plan.Name)] = plan.MemoryInGb
		}
	// }
	return memoryMap
}

func planToInstanceCPUMap(allPlans Plans) map[string]int64 {
	cpuMap := make(map[string]int64)
	// for _, plans := range allPlans {
		for _, plan := range allPlans {
			cpuMap[strings.ToLower(plan.Name)] = plan.Vcpus
		}
	// }
	return cpuMap
}

func planToMemoryCPUMap(allPlans Plans) map[string][]string {
	memoryCPUMap := make(map[string][]string)
	// for _, plans := range allPlans {
		for _, plan := range allPlans {
			mem := int(math.Floor(plan.MemoryInGb))
			key := strconv.Itoa(mem) + "+" + strconv.Itoa(int(plan.Vcpus))
			memoryCPUMap[key] = append(memoryCPUMap[key], strings.ToLower(plan.Name))
		}
	// }
	return memoryCPUMap
}

func processTerraformPlan(planFile string) float64 {
	file, err := os.Open(planFile)
	if err != nil {
		fmt.Println(err)
	}

	plan, err := terraform.ReadPlan(file)
	if err != nil {
		panic(err)
	}

	var finalCost float64
	finalCost = 0.0

	for moduleIdx := range plan.Diff.Modules {
		var instanceType string
		var sum float64
		var memory float64
		var cpu int64
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
				// fmt.Println("resource type not recognized: ", resourceType)
			}
			price := calculateCost(instanceType)
			sum = sum + price
			memory = calculateMemory(instanceType)
			cpu = calculateCPU(instanceType)

			key := strconv.Itoa(int(math.Ceil(memory))) + "+" + strconv.Itoa(int(cpu))
			instanceNames := memoryCPUMap[key]
			if len(instanceNames) > 0 {
				fmt.Println("\nWe suggest the following alternatives ====>")
			}
			for _, instance := range instanceNames {
				fmt.Print("\tname: ", instance)
				fmt.Print("\tmemory: ", instanceMemoryMap[instance])
				fmt.Print("\tcpu: ", instanceCPUMap[instance])
				fmt.Print("\tprice: ", priceMap[instance])
				fmt.Print("\tprovider: ", providerMap[instance])
				fmt.Println()
			}
		}

		if sum > 0 {
			fmt.Println("Total cost estimated for the selected instances", sum*720)
		}
		finalCost = finalCost + (sum * 720)

	}

	fmt.Println("==============")
	return finalCost
}

func calculateCost(instanceType string) float64 {
	return priceMap[strings.ToLower(instanceType)]
}

func calculateMemory(instanceType string) float64 {
	return instanceMemoryMap[strings.ToLower(instanceType)]
}

func calculateCPU(instanceType string) int64 {
	return instanceCPUMap[strings.ToLower(instanceType)]
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
