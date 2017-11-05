interface Person {
  firstName: string,
  lastName: string
}

class Student {

  fullName: string
  firstName: string
  lastName: string

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName
    this.lastName = lastName
    this.fullName = `${firstName} ${lastName}`
  }

}

function sayHello (person: Person) {
  console.log(`Hello ${person.firstName} ${person.lastName}`)
}

const foobar = new Student('Foo', 'Bar')
sayHello(foobar)