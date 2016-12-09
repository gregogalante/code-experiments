import axios from 'axios'
import base64 from 'base-64'
import { apiUrl, postsPagination, postCommentsPagination } from '../config'

/** @function public getCategoriesRequest().

This function return the request of the list of categories of posts.
*/

export function getCategoriesRequest () {
  return axios.get(`${apiUrl}/categories`)
}

/** @function public getPostsRequest(page).

This function return the request of the list of posts.

@param {integer} page the page of posts that the request should ask.
*/

export function getPostsRequest (page = 1, categoryId = null) {
  let params = {
    post_status: 'publish',
    per_page: postsPagination,
    page: page
  }
  // add category to params
  if (categoryId) {
    params = Object.assign({}, params, {
      categories: [categoryId]
    })
  }
  // return request
  return axios.get(`${apiUrl}/posts`, { params })
}

/** @function public getCommentsRequest(page, postId).

This function return all the comments of a post.

@param {integer} page the page of comments that the request should asks.
@param {integer} postId the id of the post which you want the comments.
*/

export function getCommentsRequest (page = 1, postId = 1) {
  let params = {
    status: 'approve',
    per_page: postCommentsPagination,
    page: page,
    post: postId
  }
  return axios.get(`${apiUrl}/comments`, { params })
}

/** @function public getNewCommentRequest(page, postId).

This function return the request for a new comment to a post.

@param {string} content the content of the comment.
@param {integer} postId the id of the post which you want to comment.
@param {string} userId the userId of the user for the comment.
@param {string} username the user username.
@param {string} password the user password.
*/

export function getNewCommentRequest (content = '', postId = 1, userId = '', username = '', password = '') {
  let config = {
    headers: {
      'Authorization': `Basic ${base64.encode(username + ':' + password)}`
    }
  }
  // define params
  let params = {
    post: postId,
    content,
    user: userId
  }
  // send request
  return axios.post(`${apiUrl}/comments`, params, config)
}
