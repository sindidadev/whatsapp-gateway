# WhatsApp Gateway using Baileys

Proyek ini merupakan implementasi sederhana WhatsApp Gateway menggunakan **Javascript**, dan **Baileys**.  
Aplikasi ini memungkinkan pengguna untuk **login WhatsApp Web melalui QR Code** yang ditampilkan di browser.

## Fitur
- Login WhatsApp melalui QR Code.
- Tampilan QR Code di halaman web (Express + EJS).
- Status koneksi (Connected / Disconnected).
- Penyimpanan session secara otomatis menggunakan `auth_info`.

## Teknologi yang Digunakan
- [Baileys](https://github.com/WhiskeySockets/Baileys)
- [EJS](https://ejs.co/)

## Instalasi & Menjalankan
1. Clone repository:
   git clone https://github.com/sindidadev/whatsapp-gateway.git
2. cd whatsapp-gateway
3. npm install
4. node index.js
5. http://localhost:3000
