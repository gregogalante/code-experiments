import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as stateActions from '../../actions/stateActions'
import * as userActions from '../../actions/userActions'

import { View, Text } from 'react-native'
import { Container, Content, Footer, FooterTab, Button, Icon, Card, CardItem, H3 } from 'native-base'
import Signup from './signup'
import Login from './login'
import theme from '../../template/baseTheme'
import styles from './styles'

class Profile extends Component {

  constructor (props) {
    super(props)
  }

  componentDidMount () {

  }

  /** @function public goToBackView().

  This function return to the back view and set the initial app view title.
  */

  goToBackView () {
    this.props.stateActions.setViewTitle('Wordpress sample app')
    this.props.navigator.pop()
  }

  /** @function public logout().

  This function exec che logout for user.
  */

  logout () {
    this.props.userActions.reset()
  }

  renderProfileData () {
    if (this.props.userDatas.wordpressId) {
      return (
        <View style={styles.profileData}>
          <Card>
            <CardItem header>
              <H3 style={styles.profileDataTitle}>Il mio profilo</H3>
            </CardItem>
            <CardItem>
              <Icon name='md-contact' />
              <Text>Username: {this.props.userDatas.username}</Text>
            </CardItem>
            <CardItem>
              <Icon name='md-person' />
              <Text>Nome: {this.props.userDatas.name}</Text>
            </CardItem>
          </Card>
        </View>
      )
    } else {
      return null
    }
  }

  /** @function public renderActions().

  This function render the actions that use can do from its profile.
  */

  renderActions () {
    if (this.props.userDatas.wordpressId) {
      return (
        <View style={styles.profileActions}>
          <Button block style={styles.profileAction} onPress={() => this.logout()}>Logout</Button>
        </View>
      )
    } else {
      return (
        <View style={styles.profileActions}>
          <Button block style={styles.profileAction} onPress={() => { this.props.navigator.push({component: Signup}) }}>Registrati</Button>
          <Button block style={styles.profileAction} onPress={() => { this.props.navigator.push({component: Login}) }}>Esegui il login</Button>
        </View>
      )
    }
  }

  render () {
    return (
      <Container theme={theme}>
        <View style={styles.content}>
          <Content style={styles.profileContainer}>
            {this.renderProfileData()}
            {this.renderActions()}
          </Content>
          <Footer >
            <FooterTab>
              <Button onPress={() => this.goToBackView()}>Indietro<Icon name='md-arrow-back' /></Button>
            </FooterTab>
          </Footer>
        </View>
      </Container>
    )
  }

}

Profile.propTypes = {
  route: PropTypes.object,
  navigator: PropTypes.object,
  stateActions: PropTypes.object,
  userActions: PropTypes.object,
  userDatas: PropTypes.object
}

const mapStateToProps = (state, ownProps) => {
  return {
    userDatas: state.userReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    stateActions: bindActionCreators(stateActions, dispatch),
    userActions: bindActionCreators(userActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
