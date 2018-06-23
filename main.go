package main

import (
	"fmt"
	"net/http"
)

func main() {

	http.Handle("/", http.FileServer(http.Dir("app")))
	fmt.Println("Hello world")
	http.ListenAndServe(":8080", nil)
}
