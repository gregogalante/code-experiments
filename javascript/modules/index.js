const Class = require('./Class')
const Module = require('./Module')
const settings = require('./settings')

// Define a new object and call it.
let object = new Class(settings.foo)
object.method()

// Use a method function.
Module.method(settings.bar)
