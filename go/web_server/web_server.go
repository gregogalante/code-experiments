package main

import (
	"fmt"
	"log"
	"net/http"
)

func main() {
	port := 8080
	log.Printf("Server starting on port %v\n", port)

	// call the HandleFunc method which creates a Handler type
	http.HandleFunc("/helloworld", helloWorldHandler)

	// start the HTTP server
	log.Fatal(http.ListenAndServe(fmt.Sprintf(":%v", port), nil))
}

func helloWorldHandler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprint(w, "Hello World\n")
}