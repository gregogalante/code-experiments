package main

import (
	"fmt"
	"math"
)

func main() {
	var x, y int = 3, 4
	var f float64 = math.Sqrt(float64(x*x + y*y))
	var z uint = uint(f)
	fmt.Println(x, y, z)

	var i int = 42
	var k float64 = float64(i)
	var u uint = uint(k)
	fmt.Println(i, k, u)

	m := 42
	n := float64(m)
	o := uint(n)
	fmt.Println(m, n, o)
}