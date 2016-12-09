import * as types from '../actions/stateActions'

const defaultState = {
  viewTitle: '',
  drawerStatus: false
}

/** @function public stateReducer(state, action).

This is the reducer that manages the state datas of the application.

@param {object} state the initial state object.
@param {object} action the parameters received from actions.
*/

function stateReducer (state = defaultState, action) {
  switch (action.type) {
    case types.SET_STATE_VIEW_TITLE:
      return Object.assign({}, state, {
        viewTitle: action.title
      })
    case types.SET_STATE_DRAWER_STATUS:
      return Object.assign({}, state, {
        drawerStatus: action.status
      })
    default:
      return state
  }
}

export default stateReducer
