import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userActions from '../../actions/userActions'

import { View } from 'react-native'
import { Container, Content, Footer, FooterTab, Button, Icon, InputGroup, Input } from 'native-base'
import theme from '../../template/baseTheme'
import styles from './styles'

import { UnknownInputException } from '../../exceptions/inputExpections'
import { alertCustom, alertNoInputCompleted, alertConnectionError, alertSignupResult } from '../../helpers/applicationAlerts'
import { getSignupRequest } from '../../communications/authApi'
import { findJsonInsideString } from '../../helpers/stringsHelpers'

class Signup extends Component {

  constructor (props) {
    super(props)

    // set initial state
    this.state = {
      name: null,
      email: null,
      username: null,
      password: null,
      passwordConfirmation: null
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
      case 'name':
        this.setState({name: value})
        break
      case 'email':
        this.setState({email: value})
        break
      case 'username':
        this.setState({username: value})
        break
      case 'password':
        this.setState({password: value})
        break
      case 'passwordConfirmation':
        this.setState({passwordConfirmation: value})
        break
      default:
        throw new UnknownInputException('Signup.updateInput(type, value) : the input is unknown on the updateInput() function')
    }
  }

  /** @function public sendSignupRequest().

  This function send the signup request to user and save user datas if sigup
  is good.
  */

  sendSignupRequest () {
    let { name, email, username, password, passwordConfirmation } = this.state
    // check inputs
    if (!name || !email || !username || !password || !passwordConfirmation) {
      alertNoInputCompleted()
      return
    }
    // check password
    if (password !== passwordConfirmation) {
      alertCustom('Password non corrette', "Il campo 'password' e 'conferma password' non hanno lo stesso valore. Ricontrolla.")
    }
    // send request for signup
    getSignupRequest(name, email, username, password)
    .then((response) => {
      console.log('getSignupRequest', response)
      let responseObject
      if (response.data instanceof Object) {
        responseObject = response.data
      } else {
        responseObject = findJsonInsideString(response.data)
      }
      if (responseObject.id) {
        // save user datas on store
        this.props.userActions.setName(responseObject.name)
        this.props.userActions.setUsername(responseObject.slug)
        this.props.userActions.setPassword(this.state.password)
        this.props.userActions.setWordpressId(responseObject.id)
        this.props.userActions.setThumbnail(responseObject.avatar_urls[48])
        // reset inputs
        this.setState({
          name: null,
          email: null,
          username: null,
          password: null,
          passwordConfirmation: null
        })
        // return result and go back
        alertSignupResult(true)
        this.props.navigator.pop()
      } else {
        alertSignupResult(false)
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
                <Icon name='md-person' style={styles.formIcon} />
                <Input value={this.state.name} placeholder='Nome' autoCorrect={false}
                  onChange={(event) => this.updateInput('name', event.nativeEvent.text)} />
            </InputGroup>
            <InputGroup style={styles.formInputGroup}>
                <Icon name='md-mail' style={styles.formIcon} />
                <Input value={this.state.email} keyboardType='email-address' placeholder='Email' autoCapitalize='none' autoCorrect={false}
                  onChange={(event) => this.updateInput('email', event.nativeEvent.text)} />
            </InputGroup>
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
            <InputGroup style={styles.formInputGroup}>
                <Icon name='md-lock' style={styles.formIcon} />
                <Input value={this.state.passwordConfirmation} placeholder='Conferma password' autoCapitalize='none' secureTextEntry autoCorrect={false}
                  onChange={(event) => this.updateInput('passwordConfirmation', event.nativeEvent.text)} />
            </InputGroup>
            <View style={styles.profileActions}>
              <Button block style={styles.profileAction} onPress={() => this.sendSignupRequest()}>Registrati</Button>
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

Signup.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(Signup)
