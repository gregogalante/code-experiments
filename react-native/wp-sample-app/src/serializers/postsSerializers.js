import { convertHTML } from '../helpers/stringsHelpers'

/** @function public serializeWpCategories(categories).

This function transforms an array of categories from Wordpress to an object
with most important informations of categories inside.

@param {array} categories the list of categories from Wordpress.
*/

export function serializeWpCategories (categories) {
  // return empty object if there are not categories
  if (!categories.length) { return [] }
  // prepare initial response
  let serializedCategories = []
  // loop categories and add them serialized on serializedCategories
  categories.map((category) => {
    if (category.count > 0) { // do not save categories without posts
      serializedCategories.push(serializeWpCategory(category))
    }
  })
  // return the new categories object
  return serializedCategories
}

/** @function public serializeWpCategory(category).

This function transforms a category object from Wordpress to a new object with
only main informations of category.

@param {object} category the category from Wordpress.
*/

export function serializeWpCategory (category) {
  // initialize new category object
  let serializedCategory = {}
  // generate new category object
  serializedCategory.id = category.id
  serializedCategory.name = category.name
  serializedCategory.slug = category.slug
  serializedCategory.description = category.description
  serializedCategory.numberOfPosts = category.count
  // return new category object
  return serializedCategory
}

/** @function public serializeWpPosts(posts).

This function transforms an array of posts from Wordpress to an object
with most important informations of posts inside.

@param {array} posts the list of posts from Wordpress.
*/

export function serializeWpPosts (posts) {
  // return empty object if there are not posts
  if (!posts.length) { return [] }
  // prepare initial response
  let serializedPosts = []
  // loop posts and add them serialized on serializedPosts
  posts.map((post) => {
    serializedPosts.push(serializeWpPost(post))
  })
  // return the new categories array
  return serializedPosts
}

/** @function public serializeWpPost(post).

This function transforms a post object from Wordpress to a new object with
only main informations of post.

@param {object} post the post from Wordpress.
*/

export function serializeWpPost (post) {
  // initialize new post object
  let serializedPost = {}
  // generate new post object
  serializedPost.id = post.id
  serializedPost.date = post.date
  serializedPost.slug = post.slug
  serializedPost.link = post.link
  serializedPost.title = convertHTML(post.title.rendered)
  serializedPost.content = convertHTML(post.content.rendered)
  serializedPost.excerpt = convertHTML(post.excerpt.rendered)
  serializedPost.permitComments = (post.comment_status === 'open')
  serializedPost.categoryIds = post.categories
  serializedPost.thumbnailSmall = (post.better_featured_image ? (
    post.better_featured_image.media_details.sizes.thumbnail.source_url
  ) : null)
  serializedPost.thumbnailLarge = (post.better_featured_image ? (
    post.better_featured_image.source_url
  ) : null)
  // TODO: Continue
  // return new post object
  return serializedPost
}

/** @function public serializeWpPostComments(comments).

This function transforms an array of post comments from Wordpress to an object
with most important informations of comments inside.

@param {array} comments the list of comments from Wordpress.
*/

export function serializeWpPostComments (comments) {
  // return empty object if there are not comments
  if (!comments.length) { return [] }
  // prepare initial response
  let serializedComments = []
  // loop comments and add them serialized on serializedComments
  comments.map((comment) => {
    serializedComments.push(serializeWpPostComment(comment))
  })
  // return the new categories array
  return serializedComments
}

/** @function public serializeWpPostComment(comment).

This function transforms a comment object from Wordpress to a new object with
only main informations of comment.

@param {object} comment the comment from Wordpress.
*/

export function serializeWpPostComment (comment) {
  // initialize new comment object
  let serializedComment = {}
  // generate new comment object
  serializedComment.id = comment.id
  serializedComment.date = comment.date
  serializedComment.authorName = comment.author_name
  serializedComment.authorImage = comment.author_avatar_urls[48]
  serializedComment.content = convertHTML(comment.content.rendered)
  // return new comment object
  return serializedComment
}
