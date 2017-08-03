const Server = require('./lib/Server')

const server = new Server({
  port: 9000
})

server.get('/', (req, res) => {
  res.write('Hello world')
  res.end()
})
