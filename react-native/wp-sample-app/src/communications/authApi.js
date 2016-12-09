import axios from 'axios'
import base64 from 'base-64'
import { apiUrl, apiAppUsername, apiAppPassword } from '../config'

/** @function public getSignupRequest(name, email, username, password).

This function return the request for the creation of a new user.

@param {string} name the name of the user.
@param {string} email the email of the user.
@param {string} username the username of the user.
@param {string} password the password of the user.
*/

export function getSignupRequest (name, email, username, password) {
  // define custom header for every request
  let config = {
    headers: {
      'Authorization': `Basic ${base64.encode(apiAppUsername + ':' + apiAppPassword)}`
    }
  }
  // define params
  let params = {
    name,
    email,
    username,
    password
  }
  // send request
  return axios.post(`${apiUrl}/users`, params, config)
}

/** @function public getLoginRequest(username, password).

This function return the request for user login.

@param {string} username the username of the user.
@param {string} password the password of the user.
*/

export function getLoginRequest (username, password) {
  let config = {
    headers: {
      'Authorization': `Basic ${base64.encode(username + ':' + password)}`
    }
  }
  return axios.get(`${apiUrl}/users/me`, config)
}
