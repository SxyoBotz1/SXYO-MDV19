const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
let fs = require('fs')
let owner = 6285850539404
let wa = '0'
let handler = async (m) => {
let jarot = `
*Hai kak @${m.sender.split('@')[0]} 👋*
	`.trim()
  let message = await prepareWAMessageMedia({ image: await (await require('node-fetch')(fotonya5)).buffer()}, { upload: conn.waUploadToServer }) 
    const template = generateWAMessageFromContent(m.key.remoteJid, proto.Message.fromObject({
        templateMessage: {
            hydratedTemplate: {
                hydratedContentText: jarot,
                imageMessage: message.imageMessage, 
           hydratedFooterText: '📮Note : HALO KAK SAYA SXYOO, JIKA KAMU MENGGUNAKAN WA LAMA ATAU WA MOD, DAN BUTTON TIDAK KELIATAN, LANGSUNG AJA KETIK .allmenu',
           hydratedButtons: [{
             urlButton: {
               displayText: '🔮𝙂𝙧𝙤𝙪𝙥🔮',
               url: 'https://chat.whatsapp.com/EOv8e2Fkncg0BEDXVmhY7c'
             }

           },
                {
               urlButton: {
               displayText: '🐻𝙔𝙤𝙪𝙩𝙪𝙗𝙚 𝘾𝙧𝙚𝙖𝙩𝙤𝙧🐻',
               url: 'https://youtube.com/channel/UCJNi-zXIsky4nheONnxoY1w'
             }

           },
               {
             quickReplyButton: {
               displayText: '𝙎𝙚𝙬𝙖🚀',
               id: '.sewabot',
             }
             
           },
               {
             quickReplyButton: {
               displayText: '𝙎𝙘𝙧𝙞𝙥𝙩🎗️',
               id: '.yntks',
             }
             
             },
               {
             quickReplyButton: {
               displayText: '𝙇𝙞𝙨𝙩 𝘾𝙤𝙢𝙢𝙖𝙣𝙙📖',
               id: '.allmenu',
             }

           }]
         }
       }
     }), { userJid: m.sender, quoted: m });
    //conn.reply(m.chat, text.trim(), m)
    return await conn.relayMessage(
         m.chat,
         template.message,
         { messageId: template.key.id }
     )
}

handler.tags = ['main', 'info']
handler.customPrefix = /^(menu|help|.menu|.help)$/i
handler.help = ['.menu']
handler.command = new RegExp

module.exports = handler
