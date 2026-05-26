import { WebSocketServer } from 'ws'

const wss = new WebSocketServer({ port: 3000 })

console.log('Websocket server is running')

wss.on('connectin', (socket) => {
  socket.on('message', (message) => {
    const messageString = message.toString()
  })
})
