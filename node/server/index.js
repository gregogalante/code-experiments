const Server = require('./lib/Server')
const Router = require('./lib/Router')
const configsServer = require('./configs/server')

const router = new Router()
const server = new Server(configsServer.port, router)
