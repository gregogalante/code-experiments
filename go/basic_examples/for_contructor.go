/*
Go has only one looping construct, the for loop.
The basic for loop has three components separated by semicolons:

- the init statement: executed before the first iteration
- the condition expression: evaluated before every iteration
- the post statement: executed at the end of every iteration

The init statement will often be a short variable declaration, and
the variables declared there are visible only in the scope of the for statement.
The loop will stop iterating once the boolean condition evaluates to false.
Note: Unlike other languages like C, Java, or JavaScript there are no parentheses
surrounding the three components of the for statement and the braces { } are always required.
*/

package main

import "fmt"

func main() {
	// Normal for
	var sum = 0
	for i := 0; i < 10; i++ {
		sum += i
	}
	fmt.Println(sum)

	// For with init and post statement are optional
	var sum2 = 1
	for sum2 < 1000 {
		sum2 += sum2
	}
	fmt.Println(sum2)

	// While with for
	var sum3 = 1
	for sum3 < 1000 {
		sum3 += sum3
	}
	fmt.Println(sum3)

	// Infinite loop
	// for {}
}
