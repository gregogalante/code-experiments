/**
 * Boilerplate.
 * The main file of a directory should called index.js an contain a comment about
 * what it does.
 */

/**
 * All dependencies should be imported as const at the beginning of the file.
 * The order of imports should be:
 * - Node code modules.
 * - Node external modules.
 * - Class.
 * - Modules.
 * - Settings.
 * - Assets (images, text files, ecc).
 */
const Class = require('./Class')
const Module = require('./Module')
const settings = require('./settings')

// Define a new object and call it.
let object = new Class(settings.foo)
object.method()

// Use a method function.
Module.method(settings.bar)
