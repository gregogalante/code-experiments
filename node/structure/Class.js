/**
 * Class.
 * Example of class structure.
 * @param {string} attribute
 */
const Class = function (attribute) {
  this.attribute = attribute
}

/**
 * method()
 * Example of method.
 */
Class.prototype.method = function () {
  console.log(this.attribute)
}

module.exports = Class
