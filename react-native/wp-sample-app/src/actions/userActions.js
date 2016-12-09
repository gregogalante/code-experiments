export const SET_USER_NAME = 'SET_USER_NAME'
export const SET_USER_USERNAME = 'SET_USER_USERNAME'
export const SET_USER_EMAIL = 'SET_USER_EMAIL'
export const SET_USER_WORDPRESS_ID = 'SET_USER_WORDPRESS_ID'
export const SET_USER_THUMBNAIL = 'SET_USER_THUMBNAIL'
export const SET_USER_PASSWORD = 'SET_USER_PASSWORD'
export const RESET_USER = 'RESET_USER'

/** @function public reset().

This function reset all datas of user.
*/

export function reset () {
  return {
    type: RESET_USER
  }
}

/** @function public setName(name).

This function set the current user name on the store.

@param {string} name the name of the user.
*/

export function setName (name) {
  return {
    type: SET_USER_NAME,
    name
  }
}

/** @function public setUsername(username).

This function set the current user username on the store.

@param {string} username the username of the user.
*/

export function setUsername (username) {
  return {
    type: SET_USER_USERNAME,
    username
  }
}

/** @function public setEmail(email).

This function set the current user email on the store.

@param {string} email the email of the user.
*/

export function setEmail (email) {
  return {
    type: SET_USER_EMAIL,
    email
  }
}

/** @function public setWordpressId(id).

This function set the current user id on the store.

@param {string} wordpressId the id of the user.
*/

export function setWordpressId (wordpressId) {
  return {
    type: SET_USER_WORDPRESS_ID,
    wordpressId
  }
}

/** @function public setThumbnail(thumbnail).

This function set the user thumbnail on the store.

@param {string} thumbnail the thumbnail of the user.
*/

export function setThumbnail (thumbnail) {
  return {
    type: SET_USER_THUMBNAIL,
    thumbnail
  }
}

/** @function public setPassword(password).

This function set the user password on the store.

@param {string} password the password of the user.
*/

export function setPassword (password) {
  return {
    type: SET_USER_PASSWORD,
    password
  }
}
