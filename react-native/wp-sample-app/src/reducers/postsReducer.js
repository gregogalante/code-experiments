import * as types from '../actions/postsActions'

const defaultState = {
  categories: {},
  currentPage: 1,
  currentCategory: {
    slug: null,
    id: null
  }
}

/** @function public postsReducer(state, action).

This is the reducer that manages the posts datas of the application.

@param {object} state the initial state object.
@param {object} action the parameters received from actions.
*/

function postsReducer (state = defaultState, action) {
  switch (action.type) {
    case types.SET_POSTS_CATEGORIES_LIST:
      return Object.assign({}, state, {
        categories: action.categories
      })
    case types.SET_POSTS_CURRENT_PAGE:
      return Object.assign({}, state, {
        currentPage: action.page
      })
    case types.SET_POSTS_CURRENT_CATEGORY:
      return Object.assign({}, state, {
        currentCategory: {
          slug: (action.category ? action.category.slug : null),
          id: (action.category ? action.category.id : null)
        }
      })
    default:
      return state
  }
}

export default postsReducer
