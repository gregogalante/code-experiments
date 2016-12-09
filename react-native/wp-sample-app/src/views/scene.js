import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as stateActions from '../actions/stateActions'
import * as postsActions from '../actions/postsActions'
import * as userActions from '../actions/userActions'

import { Navigator, View, StatusBar } from 'react-native'
import Drawer from 'react-native-drawer'
import NavigationBar from '../components/navigationBar'
import Menu from '../components/menu'
import Posts from './posts'

import { getCategoriesRequest } from '../communications/postsApi'
import { serializeWpCategories } from '../serializers/postsSerializers'
import { alertConnectionError } from '../helpers/applicationAlerts'
import { downloadUserDatas } from '../helpers/syncUserDatas'

class Scene extends Component {

  constructor (props) {
    super(props)

    // bind function
    this.renderScene = this.renderScene.bind(this)
    this.navigateToFromMenu = this.navigateToFromMenu.bind(this)
    this.updateDrawerStatus = this.updateDrawerStatus.bind(this)
    this.closeDrawerStatus = this.closeDrawerStatus.bind(this)
  }

  componentDidMount () {
    // download user datas from async storage
    this.loadUserDatas()
    // download and save on store all categories for the blog
    this.loadCategories()
  }

  /** @function public loadUserDatas().

  This function load user datas from the asyncstorage and save them to the store.
  */

  loadUserDatas () {
    downloadUserDatas((error, result) => {
      if (error) {
        console.log(error)
      } else if (result) {
        let datas = JSON.parse(result)
        if (datas) {
          this.props.userActions.setName(datas.name)
          this.props.userActions.setEmail(datas.email)
          this.props.userActions.setUsername(datas.username)
          this.props.userActions.setWordpressId(datas.wordpressId)
          this.props.userActions.setPassword(datas.password)
          this.props.userActions.setThumbnail(datas.thumbnail)
        }
      }
    })
  }

  /** @function public loadCategories().

  This function load categories from the endpoint and save them to the store.
  */

  loadCategories () {
    getCategoriesRequest()
    .then((response) => {
      console.log('getCategoriesRequest', response)
      this.props.postsActions.setCategories(
        serializeWpCategories(response.data)
      )
    })
    .catch((error) => {
      console.log(error)
      alertConnectionError()
    })
  }

  /** @function public closeDrawerStatus().

  This function update the status of the drawer with a new false value.
  */

  closeDrawerStatus () {
    this.props.stateActions.setDrawerStatus(false)
  }

  /** @function public updateDrawerStatus().

  This function update the status of the drawer with a new value.
  */

  updateDrawerStatus () {
    this.props.stateActions.setDrawerStatus(
      !this.props.drawerStatus
    )
  }

  /** @function public navigateToFromMenu(route).

  This function use the navigator props to change the current route with
  the route received as param.

  @param {object} route the route object.
  */

  navigateToFromMenu (route) {
    this.refs.navigator.resetTo(route)
    this.closeDrawerStatus()
  }

  /** @function public renderScene(route, navigator).

  This function render a single scene of the navigator.

  @param {object} route the route object from navigator.
  @param {object} navigator the navigator object from navigator.
  */

  renderScene (route, navigator) {
    const Component = route.component

    return (
      <View>
        <StatusBar barStyle='light-content' />
        <NavigationBar title={this.props.viewTitle}
          updateDrawerStatus={this.updateDrawerStatus} />
        <Component
          navigator={navigator}
          route={route}
          {...route.passProps}
        />
      </View>
    )
  }

  render () {
    return (
      <Drawer
        type='overlay'
        content={<Menu navigateTo={this.navigateToFromMenu} />}
        open={this.props.drawerStatus}
        openDrawerOffset={100}
        tweenHandler={(ratio) => ({
          main: { opacity: (2 - ratio) / 2 }
        })}
        onClose={this.closeDrawerStatus}
        tapToClose
        >
        <Navigator
          ref='navigator'
          style={{flex: 1}}
          renderScene={this.renderScene}
          initialRoute={{
            component: Posts
          }}
        />
      </Drawer>
    )
  }

}

Scene.propTypes = {
  stateActions: PropTypes.object,
  postsActions: PropTypes.object,
  userActions: PropTypes.object,
  viewTitle: PropTypes.string,
  drawerStatus: PropTypes.boolean
}

const mapStateToProps = (state, ownProps) => {
  return {
    drawerStatus: state.stateReducer.drawerStatus,
    viewTitle: state.stateReducer.viewTitle
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    stateActions: bindActionCreators(stateActions, dispatch),
    postsActions: bindActionCreators(postsActions, dispatch),
    userActions: bindActionCreators(userActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Scene)
