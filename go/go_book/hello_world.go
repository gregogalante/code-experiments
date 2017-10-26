/*
This is known as a “package declaration”. Every Go program must start with a
package declaration. Packages are Go's way of organizing and reusing code.
There are two types of Go programs: executables and libraries.
Executable applications are the kinds of programs that we can run directly
from the terminal. (in Windows they end with .exe) Libraries are collections
of code that we package together so that we can use them in other programs.
*/
package main

/*
The import keyword is how we include code from other packages to
use with our program. The fmt package (shorthand for format)
implements formatting for input and output. 
*/
import "fmt"

func main() {
	// Run hello world
	fmt.Println("Hello World")
}