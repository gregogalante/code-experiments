/*
An array has a fixed size. A slice, on the other hand, is a dynamically-sized,
flexible view into the elements of an array. In practice, slices are much more common than arrays.

A slice is formed by specifying two indices, a low and high bound, separated by a colon:

a[low : high]

This selects a half-open range which includes the first element, but excludes the last one.

A slice does not store any data, it just describes a section of an underlying array.
Changing the elements of a slice modifies the corresponding elements of its underlying array.
*/

package main

import "fmt"

func main() {
	var primes = [6]int{2, 3, 5, 7, 11, 13}

	var s = primes[1:4]
	fmt.Println(s)
}
