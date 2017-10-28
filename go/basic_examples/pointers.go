/*
Go has pointers. A pointer holds the memory address of a value.

The type *T is a pointer to a T value. Its zero value is nil.

var p *int

The & operator generates a pointer to its operand.

i := 42
p = &i

The * operator denotes the pointer's underlying value.

fmt.Println(*p) // read i through the pointer p
*p = 21         // set i through the pointer p

This is known as "dereferencing" or "indirecting".
Unlike C, Go has no pointer arithmetic.
*/

package main

import "fmt"

func main() {
	// Use & to print the memory address of a variable value
	var a = 10
	fmt.Println(&a)

	/*
		A pointer is a variable whose value is the address of another variable.
	*/
	// declare a pointer
	var b *int
	// store address of a variable to a pointer
	b = &a
	// access to value using the pointer
	fmt.Println(*b)
}
