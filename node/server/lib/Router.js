/**
 * Router.
 */
const Router = function () {
  this.routes = {
    OPTIONS: {},
    GET: {},
    HEAD: {},
    POST: {},
    PUT: {},
    DELETE: {},
    TRACE: {},
    CONNECT: {}
  }
}

/**
 * add().
 * @param {string} method.
 * @param {string} path.
 * @param {function} callback.
 */
Router.prototype.add = function (method, path, callback) {
  // define method
  if (typeof method !== 'string') {
    throw new TypeError('Method must be a string')
  }
  // define path
  if (typeof path !== 'string') {
    throw new TypeError('Path must be a string')
  }
  // define callback
  if (typeof callback !== 'function') {
    throw new TypeError('Callback must be a function')
  }
  // save new routes
  this.routes[method][path] = callback
}

/**
 * manage(req, res)
 * @param {object} req.
 * @param {object} res.
 */
Router.prototype.manage = function (req, res) {
  const callback = this.routes[req.method][req.url]
  if (callback) {
    callback(req, res)
  } else {
    res.end()
  }
}

module.exports = Router
