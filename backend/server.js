import express from 'express'
import cors from 'cors'

const app = express()
const port = 3000

app.use(cors())
app.use(express.json())

const dataMessages = []

app.get('/get/messages', (req, res) => {
  res.json(dataMessages)
})

app.post('/post/messages', (req, res) => {
  const newC = req.body
  dataMessages.push(newC)
})

app.listen(port, () => {
  console.log(`Chat app running on http://localhost:${port}`)
})
