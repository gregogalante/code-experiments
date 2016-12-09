/** @function public UnknownInputException(message).

This function generate an exception because a input value is not known.

@param {string} message the message of the error.
*/

export function UnknownInputException (message) {
  this.message = message
  this.name = 'UnknownInputException'
}
