const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
let handler = async (m, {conn}) => {
const vcard = `BEGIN:VCARD
VERSION:3.0
N:;;;
FN: 𝘼𝙅𝙄 𝙊𝙁𝙁𝘾
item.ORG: 𝘼𝙅𝙄 𝙊𝙁𝙁𝘾
item1.TEL;waid=6287793236775:6287793236775@s.whatsapp.net
item1.X-ABLabel:owner selalu ada 
item2.YOUTUBE;type=INTERNET: https://youtube.com/channel/UCJNi-zXIsky4nheONnxoY1w
item2.X-ABLabel:YOUTUBE
item3.ADR:;;🎍AMERIKA SERIKAT;;;;
item3.X-ABADR:ac
item3.X-ABLabel:asal kota
item4.URL:https//github.com/SxyoBotz 
item4.X-ABLabel:Website
END:VCARD`
const sentMsg  = await conn.sendMessage(
    m.chat,
    { 
        contacts: { 
            displayName: 'OWNER BOT', 
            contacts: [{ vcard }]  
        }
    }
)
let jarot = 'https://telegra.ph/file/4453be5927503756f9de4.jpg'
await conn.send3ButtonImg(m.chat, jarot, `*Hai kak @${m.sender.split('@')[0]} 👋,  Itu nomor owner gw…*`, '📮: jngn di spam kack', '𝙎𝙚𝙬𝙖', '.sewa', '𝘽𝙖𝙘𝙠', '.menu', '𝘿𝙤𝙣𝙖𝙨𝙞', '.donasi', sentMsg)}
handler.help = ['owner2', 'creator2']
handler.tags = ['info']

handler.command = /^(owner2|creator2)$/i

module.exports = handler
