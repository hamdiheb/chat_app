import { createServer } from 'http'
import { WebSocketServer } from 'ws'

const server = createServer()
const wss = new WebSocketServer({ server })

wss.on('connection', (socket) => {
  console.log('Client connected')
  socket.on('message', (data) => {
    const message = data.toString()
    console.log('Received', message)

    for (const client of wss.client) {
      if (client.readyState == 1) {
        client.send(message)
      }
    }
  })
  socket.on('close', () => {
    console.log('Client disconnected')
  })
})

server.listen(3000, () => {
  console.log('Server running')
})
