package main

import (
	"fmt"
	"github.com/hashicorp/terraform/terraform"
	"os"
	"strings"
)

func main() {
	argsWithProg := os.Args

	if(len(argsWithProg[1:]) == 0) {
		fmt.Println("Usage: domino [path-to-terraform-plan-file]\nThe above command will take in your terraform plan and display the total cost according to current CSP pricing.")
	}
	
	var terraformPlanFile string = argsWithProg[0]

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
		for resource, instanceDiff := range plan.Diff.Modules[moduleIdx].Resources {
			resourceType := strings.Split(resource, ".")[0]
			var size string
			switch resourceType {
				case "aws_instance":
					size = instanceDiff.Attributes["aws_instance_type"].New

				case "azurerm_virtual_machine":
					size = instanceDiff.Attributes["vm_size"].New

				case "digitalocean_droplet":
					fmt.Println(resourceType)
					size = instanceDiff.Attributes["size"].New
				
				case "google_compute_instance":
					size = instanceDiff.Attributes["machine_type"].New	

				default:
					fmt.Println("resource type not recognized: ", resourceType)
			}
			fmt.Println(size)
		}
	}
}