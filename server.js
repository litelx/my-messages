const http = require('http')
const debug = require('debug')('node-angular')
const app = require('./server/app')

// functions
const normalizedPort = val => {
  let port = parseInt(val, 10)

  if (isNaN(port)) {
    return val
  }
  if (port >= 0) {
    return port
  }
  return false
}

const onError = error => {
  if (error.syscall != 'listen') {
    throw error
  }
  const addr = server.address()
  const bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + port
  switch(error.code) {
    case 'EACCES':
    console.error(bind + ' require elevated privileges')
    process.exit(1)
    break
    case 'EADDRINUSE':
    console.error(bind + ' is already in use')
    process.exit(1)
    break
    default:
    throw error
  }
}

const onListening = () => {
  const addr = server.address()
  const bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + port
  debug('listen on: ' + bind)
}

// script
const port = normalizedPort(process.env.port || '3000')
app.set('port', port)

const server = http.createServer(app)
server.on('error', onError)
server.on('listening', onListening)
server.listen(port)
