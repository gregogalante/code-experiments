class Student {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = `${firstName} ${lastName}`;
    }
}
function sayHello(person) {
    console.log(`Hello ${person.firstName} ${person.lastName}`);
}
const foobar = new Student('Foo', 'Bar');
sayHello(foobar);
//# sourceMappingURL=index.js.map