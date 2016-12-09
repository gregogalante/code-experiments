import React, { Component } from 'react'
import { Provider } from 'react-redux'
import configureStore from './configureStore'
import Scene from './views/scene'

const store = configureStore()

class Root extends Component {
  render () {
    return (
      <Provider store={store}>
        <Scene />
      </Provider>
    )
  }
}

export default Root
