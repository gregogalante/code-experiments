package main

import (
	"fmt"
	"os"
	"strings"
)

func main() {
	// First version of code
	var s, sep string
	for i := 1; i < len(os.Args); i++ {
		s += sep + os.Args[i]
		sep = " "
	}
	fmt.Println(s)
	// Second version of code
	fmt.Println(strings.Join(os.Args[1:], " "))

	/*
	The first argument of the os.Args is a path where the OS execute the
	script.
	*/
}
