package main

import (
	"fmt"
	"github.com/hashicorp/terraform/terraform"
	"os"
	"strings"
)

func main() {

	var terraformPlanFile string = "/home/indix/Downloads/ts2.out"

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

				case "azure":
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