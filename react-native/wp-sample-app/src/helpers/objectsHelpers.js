/** @function public merge(obj1, obj2).

This function generate and return the merge of two objects.

@param {object} obj1 the first object to merge.
@param {object} obj2 the second object to merge.
*/

export function merge (obj1, obj2) {
  var obj3 = {}
  for (let attrname in obj1) { obj3[attrname] = obj1[attrname] }
  for (let attrname in obj2) { obj3[attrname] = obj2[attrname] }
  return obj3
}

/** @function public findByKey(obj, key).

This function search the value of an object with the string
of the key.

@param {object} obj the object where find value.
@param {string} key the key used to find value.
*/

export function findByKey (obj, key) {
  return obj[key]
}
