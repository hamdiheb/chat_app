import { WebSocketServer } from 'ws'

const wss = new WebSocketServer({ port: 8080 })

wss.on('message', function message(data) {
  wss.send(data)
})

console.log(`Websocket server is running`)
