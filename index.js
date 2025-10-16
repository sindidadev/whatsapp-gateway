// Code was written by Muhammad Sindida Hilmy

import makeWASocket, { useMultiFileAuthState, fetchLatestBaileysVersion } from '@whiskeysockets/baileys'
import express from 'express'
import qrcode from 'qrcode'

const app = express()
const port = 3000

app.set('view engine', 'ejs')
app.use(express.static('public'))

let qrCodeData = null
let isConnected = false

async function startSock() {
  const { state, saveCreds } = await useMultiFileAuthState('./auth_info')
  const { version } = await fetchLatestBaileysVersion()

  const sock = makeWASocket({
    version,
    auth: state,
  })

  sock.ev.on('creds.update', saveCreds)

  sock.ev.on('connection.update', async (update) => {
    const { connection, qr } = update
    if (qr) {
      qrCodeData = await qrcode.toDataURL(qr)
      isConnected = false
    }
    if (connection === 'open') {
      isConnected = true
      qrCodeData = null
      console.log('WhatsApp Connected')
    }
  })
}

startSock()

app.get('/', (req, res) => {
  res.render('login', { qrCodeData, isConnected })
})

app.listen(port, () => console.log(`Server running on http://localhost:${port}`))
