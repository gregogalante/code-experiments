import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userActions from '../../actions/userActions'

import { View } from 'react-native'
import { Container, Content, Footer, FooterTab, Button, Icon, InputGroup, Input } from 'native-base'
import theme from '../../template/baseTheme'
import styles from './styles'

import { UnknownInputException } from '../../exceptions/inputExpections'
import { alertNoInputCompleted, alertLoginResult, alertConnectionError, alertCustom } from '../../helpers/applicationAlerts'
import { getLoginRequest } from '../../communications/authApi'

class Login extends Component {

  constructor (props) {
    super(props)

    // set initial state
    this.state = {
      username: null,
      password: null
    }
  }

  componentDidMount () {

  }

  /** @function public updateInput(type, value).

  This function update the state with the input received as params.

  @param {string} type the type of input to update.
  @param {string} value the value of the input.
  */

  updateInput (type, value) {
    switch (type) {
      case 'username':
        this.setState({username: value})
        break
      case 'password':
        this.setState({password: value})
        break
      default:
        throw new UnknownInputException('Signin.updateInput(type, value) : the input is unknown on the updateInput() function')
    }
  }

  /** @function public sendSignupRequest().

  This function send the signup request to user and save user datas if sigup
  is good.
  */

  sendLoginRequest () {
    let { username, password } = this.state
    // check inputs
    if (!username || !password) {
      alertNoInputCompleted()
      return
    }
    // send login request
    getLoginRequest(username, password)
    .then((response) => {
      console.log('getLoginRequest', response)
      if (response.data.id) {
        // save user data
        this.props.userActions.setName(response.data.name)
        this.props.userActions.setUsername(response.data.slug)
        this.props.userActions.setPassword(this.state.password)
        this.props.userActions.setWordpressId(response.data.id)
        this.props.userActions.setThumbnail(response.data.avatar_urls[48])
        // reset input
        this.setState({
          username: null,
          password: null
        })
        // return result
        alertLoginResult(true)
        this.props.navigator.pop()
      } else {
        alertLoginResult(false)
      }
    })
    .catch((error) => {
      console.log(error)
      alertConnectionError()
    })
  }

  render () {
    return (
      <Container theme={theme}>
        <View style={styles.content}>
          <Content style={styles.profileContainer}>
            <InputGroup style={styles.formInputGroup}>
                <Icon name='md-contact' style={styles.formIcon} />
                <Input value={this.state.username} placeholder='Username' autoCapitalize='none' autoCorrect={false}
                  onChange={(event) => this.updateInput('username', event.nativeEvent.text)} />
            </InputGroup>
            <InputGroup style={styles.formInputGroup}>
                <Icon name='md-lock' style={styles.formIcon} />
                <Input value={this.state.password} placeholder='Password' autoCapitalize='none' secureTextEntry autoCorrect={false}
                  onChange={(event) => this.updateInput('password', event.nativeEvent.text)} />
            </InputGroup>
            <View style={styles.profileActions}>
              <Button block style={styles.profileAction} onPress={() => this.sendLoginRequest()}>Accedi</Button>
            </View>
          </Content>
          <Footer >
            <FooterTab>
              <Button onPress={() => this.props.navigator.pop()}>Indietro<Icon name='md-arrow-back' /></Button>
            </FooterTab>
          </Footer>
        </View>
      </Container>
    )
  }

}

Login.propTypes = {
  route: PropTypes.object,
  navigator: PropTypes.object,
  userActions: PropTypes.object
}

const mapStateToProps = (state, ownProps) => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    userActions: bindActionCreators(userActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
