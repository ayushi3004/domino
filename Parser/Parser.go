package main

import (
	"fmt"
	"github.com/hashicorp/terraform/terraform"
	"os"
	// "strings"
)

type resourceMap struct {
	Resources map[string]map[string]int
}

type output map[string]interface{}

func main() {

	var terraformPlanFile string = "/home/indix/Downloads/terraform.tfplan"

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

	fmt.Println(plan.BackEndState)
	// diff := output{} for _, v := range plan.State.Modules {
	// convertModuleDiff(diff, v) }

}

func convertModuleDiff(out output, m map[string]interface{}) {
	// insert(out, diff.Path, "destroy", diff.Destroy)

	// for k, v := range m.Resources {
	// 	// convertInstanceDiff(out, append(diff.Path, k), v)
	// 	fmt.Println(k)
	// 	fmt.Printf("%+v\n", v)
	// }
	// for resource, v := range state.Resources {
	// 	// convertInstanceDiff(out, append(diff.Path, k), v)
	// 	fmt.Println(k)
	// 	fmt.Println(v)
	// }
}

// func insert(out output, path []string, key string, value interface{}) {
// 	if len(path) > 0 && path[0] == "root" {
// 		path = path[1:]
// 	}
// 	for _, elem := range path {
// 		switch nested := out[elem].(type) {
// 		case output:
// 			out = nested
// 		default:
// 			new := output{}
// 			out[elem] = new
// 			out = new
// 		}
// 	}
// 	out[key] = value
// }

func convertInstanceDiff(out output, path []string, diff *terraform.InstanceDiff) {
	for k, v := range diff.Attributes {
		// insert(out, path, k, v.New)
		fmt.Println(k)
		fmt.Println(v)
	}
}
