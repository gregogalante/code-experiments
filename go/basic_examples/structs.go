/*
A struct is a collection of fields.
*/

package main

import "fmt"

type Vertex struct {
	X int
	Y int
}

func main() {
	var v = Vertex{1, 2}
	v.X = 4
	fmt.Println(v.X)
}
