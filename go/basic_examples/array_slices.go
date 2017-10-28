/*
An array has a fixed size. A slice, on the other hand, is a dynamically-sized,
flexible view into the elements of an array. In practice, slices are much more common than arrays.

A slice is formed by specifying two indices, a low and high bound, separated by a colon:

a[low : high]

This selects a half-open range which includes the first element, but excludes the last one.

A slice does not store any data, it just describes a section of an underlying array.
Changing the elements of a slice modifies the corresponding elements of its underlying array.

The length of a slice is the number of elements it contains.
The capacity of a slice is the number of elements in the underlying array, counting from
the first element in the slice.

A slice has both a length and a capacity.
The length of a slice is the number of elements it contains.
The capacity of a slice is the number of elements in the underlying array, counting from the
first element in the slice.

Slices can be created with the built-in make function; this is how you create dynamically-sized arrays.

Slices can contain any type, including other slices.
*/

package main

import "fmt"

func main() {
	// Small slice example
	var primes = [6]int{2, 3, 5, 7, 11, 13}
	var s = primes[1:4]
	fmt.Println(s)

	// Slice default value
	var a [4]int
	fmt.Println(a[0:4])
	fmt.Println(a[:4])
	fmt.Println(a[0:])
	fmt.Println(a[:])

	// Create slice with make
	var c = make([]int, 5)    // len(a)=5
	var d = make([]int, 0, 5) // len(b)=0, cap(b)=5
}
