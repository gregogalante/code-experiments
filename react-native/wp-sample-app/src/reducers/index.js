import { combineReducers } from 'redux'
import stateReducer from './stateReducer'
import userReducer from './userReducer'
import postsReducer from './postsReducer'

const rootReducer = combineReducers({
  stateReducer,
  userReducer,
  postsReducer
})

export default rootReducer
