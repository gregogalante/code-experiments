const http = require('http')

/**
 * Server.
 * @param {number} port
 * @param {Router} router
 */
const Server = function (port, router) {
  this.port = port
  this.router = router

  // initialize server
  this.server = http.createServer()
  this.server.listen(port)

  // manage request
  this.server.on('request', (req, res) => {
    router.manageRequest(req, res)
  })
}

module.exports = Server
