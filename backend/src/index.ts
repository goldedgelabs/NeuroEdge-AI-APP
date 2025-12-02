import express from 'express'
import cors from 'cors'
import multer from 'multer'
const app = express()
app.use(cors())
app.use(express.json())
const upload = multer({ storage: multer.memoryStorage() })

app.post('/api/chat/send', (req, res) => {
  const { conversationId, text } = req.body
  // echo stub response
  res.json({ ok: true, reply: `Echo: ${text}` })
})

app.post('/api/uploads', upload.single('file'), (req, res) => {
  res.json({ ok:true, filename: req.file?.originalname || null })
})

app.post('/api/audio/transcribe', upload.single('file'), (req, res) => {
  res.json({ ok:true, text: 'transcribed audio (stub)' })
})

app.listen(4000, ()=> console.log('Stub backend listening on :4000'))
