package main

import (
	"fmt"
	"net/http"
)

func main() {

	http.Handle("/", http.FileServer(http.Dir("app")))
	fmt.Println("Running on http://localhost:8080")
	http.ListenAndServe(":8080", nil)
}
