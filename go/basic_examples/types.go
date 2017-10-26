package main

import "fmt"

func main() {
	// Play with numbers
	fmt.Println("1 + 1 =", 1 + 1) // => 1 + 1 = 2
	fmt.Println("1 + 1 =", 1.0 + 1.0) // => 1 + 1 = 2

	// Play with strings
	fmt.Println(len("Hello World")) // => 11
  fmt.Println("Hello World"[1]) // => 101 # This output is a number because it is the binary for the "e" character
	fmt.Println("Hello " + "World") // => Hello World
	
	// Play with boolean
	fmt.Println(true && true)
  fmt.Println(true && false)
  fmt.Println(true || true)
  fmt.Println(true || false)
  fmt.Println(!true)
}