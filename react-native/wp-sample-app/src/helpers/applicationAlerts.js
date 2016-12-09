import { Alert } from 'react-native'
import { alertsMessages } from '../config'

/** @function public alertCustom(title, message, buttons = []).

This function create a custom alert with its datas.

@param {string} title the title for the alert.
@param {string} message the message for the alert.
@param {array} buttons the buttons objects for the alert.
*/

export function alertCustom (title, message, buttons = []) {
  Alert.alert(title, message, buttons)
}

/** @function public alertConnectionError(title = 'custom', message = 'custom', buttons = []).

This function create an alert to describe a connection error.

@param {string} title the title for the alert.
@param {string} message the message for the alert.
@param {array} buttons the buttons objects for the alert.
*/

export function alertConnectionError (title = null, message = null, buttons = []) {
  let alertTitle = alertsMessages.connectionError.title
  let alertMessage = alertsMessages.connectionError.message

  if (title) { alertTitle = title }
  if (message) { alertMessage = message }

  Alert.alert(alertTitle, alertMessage, buttons)
}

/** @function public alertNoInputCompleted(title = 'custom', message = 'custom', buttons = []).

This function create an alert because input values are not correct.

@param {string} title the title for the alert.
@param {string} message the message for the alert.
@param {array} buttons the buttons objects for the alert.
*/

export function alertNoInputCompleted (title = null, message = null, buttons = []) {
  let alertTitle = alertsMessages.noInputCompleted.title
  let alertMessage = alertsMessages.noInputCompleted.message

  if (title) { alertTitle = title }
  if (message) { alertMessage = message }

  Alert.alert(alertTitle, alertMessage, buttons)
}

/** @function public alertLoginResult(title = 'custom', message = 'custom', buttons = [], result = false).

This function create an alert for the login result.

@param {boolean} result the result of the login.
@param {string} title the title for the alert.
@param {string} message the message for the alert.
@param {array} buttons the buttons objects for the alert.
*/

export function alertLoginResult (result = false, title = null, message = null, buttons = []) {
  let alertTitle = alertsMessages.loginResult.titleNegative
  let alertMessage = alertsMessages.loginResult.messageNegative

  if (result) {
    alertTitle = alertsMessages.loginResult.titlePositive
    alertMessage = alertsMessages.loginResult.messagePositive
  }

  if (title) { alertTitle = title }
  if (message) { alertMessage = message }

  Alert.alert(alertTitle, alertMessage, buttons)
}

/** @function public alertSignupResult(title = 'custom', message = 'custom', buttons = [], result = false).

This function create an alert for the signup result.

@param {boolean} result the result of the signup.
@param {string} title the title for the alert.
@param {string} message the message for the alert.
@param {array} buttons the buttons objects for the alert.
*/

export function alertSignupResult (result = false, title = null, message = null, buttons = []) {
  let alertTitle = alertsMessages.signupResult.titleNegative
  let alertMessage = alertsMessages.signupResult.messageNegative

  if (result) {
    alertTitle = alertsMessages.signupResult.titlePositive
    alertMessage = alertsMessages.signupResult.messagePositive
  }

  if (title) { alertTitle = title }
  if (message) { alertMessage = message }

  Alert.alert(alertTitle, alertMessage, buttons)
}
