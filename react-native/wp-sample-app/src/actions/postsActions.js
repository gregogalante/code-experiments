export const SET_POSTS_CATEGORIES_LIST = 'SET_POSTS_CATEGORIES_LIST'
export const SET_POSTS_CURRENT_PAGE = 'SET_POSTS_CURRENT_PAGE'
export const SET_POSTS_CURRENT_CATEGORY = 'SET_POSTS_CURRENT_CATEGORY'

/** @function public setCategories(categories).

This function save on store an object categories that contains a list
of categories object generated from serializer with id used as key.

@param {object} categories object generated from serializer.
*/

export function setCategories (categories) {
  return {
    type: SET_POSTS_CATEGORIES_LIST,
    categories
  }
}

/** @function public setCurrentPage(page).

This function save on store the new current page that the user want to see.

@param {integer} page the new current page number to save.
*/

export function setCurrentPage (page) {
  return {
    type: SET_POSTS_CURRENT_PAGE,
    page
  }
}

/** @function public setCurrentCategory(category).

This function save on store all information used to know which category
the user is wathcing.

@param {object} category the object category generated from serializer and
saved on the store.
*/

export function setCurrentCategory (category) {
  return {
    type: SET_POSTS_CURRENT_CATEGORY,
    category
  }
}
