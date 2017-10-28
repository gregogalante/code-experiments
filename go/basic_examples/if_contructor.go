/*
Go's if statements are like its for loops; the expression need not be surrounded
by parentheses ( ) but the braces { } are required.
*/

package main

import "fmt"

func main() {
	// Normal if
	var x int = 3
	if x < 5 {
		fmt.Println("Yes boy")
	} else {
		fmt.Println("No man")
	}

	// If with short statement
	if x := 3; x < 5 {
		fmt.Println("Yes boy", x)
	}
}