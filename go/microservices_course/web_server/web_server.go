/*
######################################## THEORY ########################################
########################################################################################

func HandleFunc(pattern string, handler func(ResponseWriter, *Request))

HandleFunc registers the handler function for the given pattern in the DefaultServeMux.
The documentation for ServeMux explains how patterns are matched.


func ListenAndServe(addr string, handler Handler) error

ListenAndServe listens on the TCP network address addr and then calls Serve with handler
to handle requests on incoming connections.
Accepted connections are configured to enable TCP keep-alives.
Handler is typically nil, in which case the DefaultServeMux is used.


func Sprintf(format string, a ...interface{}) string

Sprintf formats according to a format specifier and returns the resulting string.
*/

package main

import (
	"fmt" // Package fmt implements formatted I/O with functions analogous to C's printf and scanf.
	"log" // Package log implements a simple logging package.
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
