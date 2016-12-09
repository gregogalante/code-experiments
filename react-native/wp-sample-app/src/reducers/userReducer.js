import { uploadUserDatas } from '../helpers/syncUserDatas'
import * as types from '../actions/userActions'

const defaultState = {
  name: null,
  username: null,
  email: null,
  wordpressId: null,
  thumbnail: null,
  password: null
}

/** @function public userReducer(state, action).

This is the reducer that manages the user datas of the application.

@param {object} state the initial state object.
@param {object} action the parameters received from actions.
*/

function userReducer (state = defaultState, action) {
  let newState

  switch (action.type) {
    case types.RESET_USER:
      uploadUserDatas(defaultState)
      return defaultState
    case types.SET_USER_NAME:
      newState = Object.assign({}, state, {
        name: action.name
      })
      uploadUserDatas(newState)
      return newState
    case types.SET_USER_USERNAME:
      newState = Object.assign({}, state, {
        username: action.username
      })
      uploadUserDatas(newState)
      return newState
    case types.SET_USER_EMAIL:
      newState = Object.assign({}, state, {
        email: action.email
      })
      uploadUserDatas(newState)
      return newState
    case types.SET_USER_WORDPRESS_ID:
      newState = Object.assign({}, state, {
        wordpressId: action.wordpressId
      })
      uploadUserDatas(newState)
      return newState
    case types.SET_USER_THUMBNAIL:
      newState = Object.assign({}, state, {
        thumbnail: action.thumbnail
      })
      uploadUserDatas(newState)
      return newState
    case types.SET_USER_PASSWORD:
      newState = Object.assign({}, state, {
        password: action.password
      })
      uploadUserDatas(newState)
      return newState
    default:
      return state
  }
}

export default userReducer
