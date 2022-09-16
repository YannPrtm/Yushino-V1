let moment = require('moment-timezone')
let fs = require('fs')
let handler = async (m, { conn, usedPrefix, __dirname, text, command }) => {
let name = conn.getName(m.sender)
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    let wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let waktuwib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
let bcbg = `${pickRandom(['https://telegra.ph/file/31388d17cf61df668c467.jpg', 'https://telegra.ph/file/31388d17cf61df668c467.jpg','https://telegra.ph/file/a988d082a72dbbab3e0d4.jpg','https://telegra.ph/file/0b76ad5fe3455f78af163.jpg','https://telegra.ph/file/dc4c5eb9316d097507f19.jpg','https://telegra.ph/file/dc4c5eb9316d097507f19.jpg','https://telegra.ph/file/d2420d53ba1ca2b6ba658.jpg','https://telegra.ph/file/d2420d53ba1ca2b6ba658.jpg','https://telegra.ph/file/d2420d53ba1ca2b6ba658.jpg'])}`
       await conn.delay(1500)
       
const anu = `┌─❖
│「 Hi 👋 」
└┬❖ 「 ${name} 」
┌┤✑ Menerima Jasa Sewa Bot
│└────────────┈ ⳹
└─「 *Donasi/Sewa Pay Via Berikut* 」  
│
│ ➪ Gopay : ${global.gopay}
│ ➪ Dana : ${global.dana}
│ ➪ Pulsa : ${global.pulsa}
│ ➪ Saweria : ${global.saweria}
╰───────────────❏
│
└─「 *Fitur* 」       
─────────────┈
Antilink Gc
Group Time
Dll
─┬────────────┈ ⳹
   └─────────────┈ ⳹`
const footer = `
❦❧ ━━──┈┈ ❲ ${global.namebot} ❳
┃𝚁𝚞𝚗𝚝𝚒𝚖𝚎 : ${uptime}
┃𝚍𝚊𝚝𝚎 : ${date}
┃𝚝𝚒𝚖𝚎 : ${waktuwib}
⎅ ┈┈ ❲ ${global.ownername} ❳`
const buttons1 = 'Menu'
const buttons2 = 'Owner'
const idbuttons1 = '.menu'
const idbuttons2 = '.owner'

conn.send2ButtonImg(m.chat, bcbg, anu, footer, buttons1, idbuttons1, buttons2, idbuttons2, m)
}
handler.help = ['donasi','sewabot']
handler.tags = ['main']
handler.command = /^(donasi|sewa|donate|sewabot)$/i

module.exports = handler

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
function pickRandom(list) {
     return list[Math.floor(Math.random() * list.length)]
  }
function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  res = "Selamat DiniHari"
  if (time >= 4) {
    res = "Selamat Pagi"
  }
  if (time > 10) {
    res = "Selamat Siang"
  }
  if (time >= 15) {
    res = "Selamat Sore"
  }
  if (time >= 18) {
    res = "Selamat Malam"
  }
  return res
}
