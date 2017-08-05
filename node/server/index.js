const Server = require('./lib/Server')

const server = new Server({
  port: 9000
})

server.get('/', (req, res) => {
  res.send({
    type: 'get'
  })
})

server.post('/', (req, res) => {
  req.on('data', (data) => {
    console.log(data)
  })
  req.on('end', () => {
    res.send({
      type: 'body'
    })
  })
})
