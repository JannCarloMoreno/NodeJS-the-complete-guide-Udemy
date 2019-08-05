const http = require('http')
const reqHandler = require('./rutas')

const server = http.createServer(reqHandler)

server.listen(3001)