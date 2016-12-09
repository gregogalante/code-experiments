import striptags from 'striptags'
import entities from 'entities'

/** @function public convertHTML(string).

This function convert HTML tag from a string to clean it.

@param {string} string the string to clean.
*/

export function convertHTML (string) {
  let result = string
  result = striptags(result)
  result = entities.decodeHTML(result)
  return result
}

/** @function public findFirstCharPosition(string, char).

This function return the first position of a char inside a string.

@param {string} string the string where to search char.
@param {string} char the char to search.
*/

export function findFirstCharPosition (string, char) {
  for (var i = 0; i < string.length; i++) {
    if (string.charAt(i) === char) {
      return i
    }
  }
}

/** @function public findLastCharPosition(string, char).

This function return the last sposition of a char inside a string.

@param {string} string the string where to search char.
@param {string} char the char to search.
*/

export function findLastCharPosition (string, char) {
  for (var i = string.length - 1; i >= 0; i--) {
    if (string.charAt(i) === char) {
      return i + 1
    }
  }
}

/** @function public findJsonInsideString(string).

This function try to find a json inside a string. It work only when string contain
only one json.

@param {string} string the string where try to find json.
*/

export function findJsonInsideString (string) {
  let firstJsonCharPosition = findFirstCharPosition(string, '{')
  let lastJsonCharPosition = findLastCharPosition(string, '}')
  let jsonString = string.slice(firstJsonCharPosition, lastJsonCharPosition)
  return JSON.parse(jsonString)
}
