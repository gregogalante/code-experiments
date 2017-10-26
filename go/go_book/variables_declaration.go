package main

import "fmt"

func main() {
	// Basic declaration
	var x string = "Hello World"
	fmt.Println(x)
	
	// Splitting declaration
	var y string
  y = "Hello World"
	fmt.Println(y)
	
	// Re-assign value
	var z string
  z = "first"
  fmt.Println(z)
  z = "second"
	fmt.Println(z)
	
	// String comparison
	var k string = "hello"
	var n string = "world"
	fmt.Println(k == n)
	k = "hello"
	n = "hello"
	fmt.Println(k == n)

	// Declaration without type
	/*
	Notice the : before the = and that no type was specified. The type is not
	necessary because the Go compiler is able to infer the type based on the
	literal value you assign the variable. (Since you are assigning a string
	literal, x is given the type string) The compiler can also do
	inference with the var statement
	*/
	m := "Hello World"
	fmt.Println(m)
	var l = "Hello World"
	fmt.Println(l)
	// l = 3 # This return an error because l is considered a string type variable
}