
import moment from 'moment-timezone';
import fs from 'fs';
import os from 'os';
import pkg, { prepareWAMessageMedia } from '@whiskeysockets/baileys';
const { generateWAMessageFromContent, proto } = pkg;
import config from '../../config.cjs';

const alive = async (m, sock) => {
  const prefix = config.PREFIX;
  const mode = config.MODE;
  const pushName = m.pushName || 'User';

  const cmd = m.body.startsWith(prefix)
    ? m.body.slice(prefix.length).split(' ')[0].toLowerCase()
    : '';

  if (cmd === "menu") {
    await m.React('🕵️'); // React with a loading icon
    // Calculate uptime

    const uptimeSeconds = process.uptime();
    const days = Math.floor(uptimeSeconds / (24 * 3600));
    const hours = Math.floor((uptimeSeconds % (24 * 3600)) / 3600);
    const minutes = Math.floor((uptimeSeconds % 3600) / 60);
    const seconds = Math.floor(uptimeSeconds % 60);

    
    // Get real time
    const realTime = moment().tz("Asia/Karachi").format("HH:mm:ss");
    const xtime = moment.tz("Asia/Karachi").format("HH:mm:ss");
    const xdate = moment.tz("Asia/Karachi").format("DD/MM/YYYY");
    const time2 = moment().tz("Asia/Karachi").format("HH:mm:ss");
let pushwish = "";

if (time2 < "05:00:00") {
  pushwish = `Good Morning 🌄`;
} else if (time2 < "11:00:00") {
  pushwish = `Good Morning 🌄`;
} else if (time2 < "15:00:00") {
  pushwish = `Good Afternoon 🌅`;
} else if (time2 < "18:00:00") {
  pushwish = `Good Evening 🌃`;
} else if (time2 < "19:00:00") {
  pushwish = `Good Evening 🌃`;
} else {
  pushwish = `Good Night 🌌`;
}

    const aliveMessage = `╭┈───────────────•*
*Hello Dev* *${pushName}*
             _${pushwish}_
*╰┈───────────────•*
*╭┈───────────────•* 
*│  ◦* 𝙿𝚁𝙴𝙵𝙸𝚇: *${prefix}*
*│  ◦* 𝙼𝙾𝙳𝙴: *${mode}*
*│  ◦* 𝚄𝙿𝚃𝙸𝙼𝙴: *${days}d ${hours}h ${minutes}m ${seconds}s*
*│  ◦* 𝙲𝚄𝚁𝚁𝙴𝙽𝚃 𝚃𝙸𝙼𝙴: *${realTime}*
*╰┈───────────────•*

  𝕭𝖔𝖘𝖘
*╭┈───────────────•*
*┋* 𝙱𝙻𝙾𝙲𝙺
*┋* 𝚄𝙽𝙱𝙻𝙾𝙲𝙺
*┋* 𝙹𝙾𝙸𝙽
*┋* 𝙻𝙴𝙰𝚅𝙴
*┋* 𝚂𝙴𝚃𝚅𝙰𝚁
*┋* 𝚁𝙴𝚂𝚃𝙰𝚁𝚃
*┋* 𝙿𝙿
*┋* 𝚁𝚎𝚜𝚝𝚊𝚛𝚝
*┋* 𝙾𝚠𝚗𝚎𝚛𝚁𝚎𝚊𝚌𝚝
*┋* 𝙷𝚎𝚊𝚛𝚝𝚁𝚎𝚊𝚌𝚝
*┋* 𝙹𝚘𝚒𝚗
*┋* 𝙻𝚎𝚏𝚝 
*┋* 𝙱𝚛𝚘𝚊𝚍𝚌𝚊𝚜𝚝 
*┋* 𝚅𝚟  
*┋* 𝚅𝚟2
*┋* 𝙳𝚎𝗅
*┋* 𝚂𝚊𝚟𝚎
*┋* ʀᴇᴘᴏʀᴛ
*┋* ᴊɪᴅ 
*┋* 𝙳𝚎𝗅
*┋* 𝚂𝚊𝚟𝚎
*╰┈───────────────•*
  𝕾𝖊𝖆𝖗𝖈𝖍 𝖈𝖒𝖉
*╭┈───────────────•*
*┋* 𝚈𝚃𝚂
*┋* 𝙶𝙾𝙾𝙶𝙻𝙴
*┋* 𝙸𝙼𝙳
*┋* 𝙸𝙼𝙶
*┋* 𝚆𝙴𝙰𝚃𝙷𝙴𝚁
*┋* 𝙿𝙻𝙰𝚈𝚂𝚃𝙾𝚁𝙴
*┋* 𝙽𝙴𝚆𝚂
*╰┈───────────────•*
  𝕬𝕴 𝖈𝖒𝖉
*╭┈───────────────•*
*┋* ʙʟᴀᴄᴋʙᴏxᴀɪ
*┋* ɢᴘᴛ
*┋* ᴠɪsɪᴛ
*┋* ᴅᴇғɪɴᴇ
*╰┈───────────────•*
*╭───❍「 *𝕮𝖍𝖗𝖎𝖘𝖙𝖎𝖆𝖓* 」*
*│* ʙɪʙʟᴇ
*│* ʙɪʙʟᴇʟʟɪsᴛ
*╰───────────❍* 
*╭───❍「 *𝕴𝖘𝖑𝖆𝖒𝖎𝖈* 」*
*│* 𝚂𝚞𝚛𝚊𝚑𝚊𝚞𝚍𝚒𝚘
*│* 𝚂𝚞𝚛𝚊𝚑𝚞𝚛𝚍𝚞
*│* 𝙰𝚜𝚖𝚊𝚞𝚕𝚑𝚞𝚜𝚗𝚊
*│* 𝙿𝚛𝚘𝚙𝚑𝚎𝚝𝚗𝚊𝚖𝚎
*╰───────────❍* 
*╭━❮𝕮𝖔𝖓𝖛𝖊𝖗𝖘𝖎𝖔𝖓❯━╮*
*┃* 𝙰𝚃𝚃𝙿
*┃* ᴜʀʟ
*┃* 𝙰𝚃𝚃𝙿3
*┃* 𝙴𝙱𝙸𝙽𝙰𝚁𝚈
*┃* 𝙳𝙱𝙸𝙽𝙰𝚁𝚈
*┃* 𝙴𝙼𝙾𝙹𝙸𝙼𝙸𝚇
*┃* 𝙼𝙿3
*╰━━━━━━━━━━━━━━━⪼*
  𝕯𝖔𝖜𝖓𝖑𝖔𝖆𝖉𝖊𝖗𝖘
*╭┈───────────────•*
*┋* ғʙ
*┋* ɪɴꜱᴛᴀ
*┋* ᴠɪᴅᴇᴏ
*┋* ɢᴅʀɪᴠᴇ
*┋* ᴛᴡɪᴛᴛᴇʀ
*┋* 𝚝𝚒𝚔𝚝𝚘𝚔
*┋* ᴍᴇᴅɪᴀғɪʀᴇ
*┋* ꜱᴏɴɢ
*┋* ᴠɪᴅᴇᴏ
*┋* ᴀᴘᴋ
*┋* 𝚃𝚃𝙰𝚄𝙳𝙸𝙾*
*╰┈───────────────•*
 *╭───❍𝕷𝖔𝖌𝖔𝖘* 
*┋* 𝗅𝗈𝗀𝗈
*┋* hacker
*┋* 𝖻𝗅𝖺𝖼𝗄𝗉𝗂𝗇𝗄
*┋* 𝗀𝗈𝗌𝗌𝗒𝗌𝗂𝗅𝗏𝖾𝗋
*┋* 𝗇𝖺𝗋𝗎𝗋𝗈
*┋* 𝖽𝗂𝗀𝗂𝗍𝖺𝗅𝗀𝗅𝗂𝗍𝖼𝗁
*┋* 𝗉𝗂𝗑𝖾𝗅𝗀𝗅𝗂𝗍𝖼𝗁
*┋* 𝗌𝗍𝖺𝗋
*┋* 𝗌𝗆𝗈𝗄𝖾
*┋* 𝖻𝖾𝖺𝗋
*┋* 𝗇𝖾𝗈𝗇𝖽𝖾𝗏𝗂𝗅
*┋* 𝗌𝖼𝗋𝖾𝖾𝗇
*┋* 𝗇𝖺𝗍𝗎𝗋𝖾
*┋* 𝖽𝗋𝖺𝗀𝗈𝗇𝖻𝖺𝗅𝗅
*┋* 𝖿𝗈𝗀𝗀𝗒𝗀𝗅𝖺𝗌𝗌
*┋* 𝗇𝖾𝗈𝗇𝗅𝗂𝗀𝗁𝗍
*┋* 𝖼𝖺𝗌𝗍𝗅𝖾𝗉𝗈𝗉
*┋* 𝖿𝗋𝗈𝗓𝖾𝗇𝖼𝗁𝗋𝗂𝗌𝗍𝗆𝖺𝗌
*┋* 𝖿𝗈𝗂𝗅𝖻𝖺𝗅𝗅𝗈𝗈𝗇
*┋* 𝖼𝗈𝗅𝗈𝗋𝖿𝗎𝗅𝗉𝖺𝗂𝗇𝗍
*┋* 𝖺𝗆𝖾𝗋𝗂𝖼𝖺𝗇𝖿𝗅𝖺𝗀
*┋* water
*┋* 𝗇𝖾𝗈𝗇𝖽𝖾𝗏𝗂𝗅
*┋* underwater
*┋* dragonfire
*┋* bokeh
*┋* snow
*┋* sand3d
*┋* pubg
*┋* horror
*┋* blood
*┋* bulb
*┋* graffiti
*┋* thunder
*┋* thunder1
*┋* womensday
*┋* Valentine
*┋* graffiti2
*┋* queencard
*┋* galaxy
*┋* pentakill 
*┋* birthdayflower
*┋* zodiac 
*┋* water3D 
*┋* textlight 
*┋* wall
*┋* gold
*┋* glow
*┋* team
*┋* rotation
*┋* paint
*┋* avatar
*┋* typography
*┋* tattoo
*┋* luxury
*┋* logo
*╰━━━━━━━━━━━━━━━⪼*
   𝕲𝖗𝖔𝖚𝖕 𝖈𝖒𝖉
*╭┈──────────────•*
*┋* ᴅᴇʟ 
*┋* ᴀᴅᴅ
*┋* ᴋɪᴄᴋ
*┋* ᴡᴇʟᴄᴏᴍᴇ 𝚘𝚗
*┋* ᴡᴇʟᴄᴏᴍᴇ 𝚘𝚏𝚏
*┋* ᴘʀᴏᴍᴏᴛᴇ
*┋* ᴅᴇᴍᴏᴛᴇ
*┋* ᴛᴀɢᴀʟʟ
*┋* 𝚑𝚒𝚍𝚎𝚝𝚊𝚐
*┋* ɪɴᴠɪᴛᴇ
*┋* ᴍᴜᴛᴇ
*┋* ᴜɴᴍᴜᴛᴇ
*┋* ɢʀᴏᴜᴘᴏᴘᴇɴ
*┋* ɢʀᴏᴜᴘᴄʟᴏsᴇ
*┋* ɢʀᴏᴜᴘɪɴғᴏ
*┋* ᴅᴇʟ
*┋* ᴍᴜᴛᴇ
*┋* ᴜɴᴍᴜᴛᴇ
*┋* ᴘᴏʟʟ
*┋* ᴅᴇ
*╰┈───────────────•*
  𝕬𝖚𝖉𝖎𝖔 𝕮𝕸𝕯
*╭┈───────────────•*
*┋* 𝙳𝙴𝙴𝙿
*┋* 𝙱𝙰𝚂𝚂
*┋* 𝚁𝙾𝙱𝙾𝚃
*┋* 𝚁𝙴𝚅𝙴𝚁𝚂𝙴
*┋* 𝚂𝙻𝙾𝚆
*┋* 𝚂𝙼𝙾𝙾𝚃𝙷
*┋* 𝙽𝙸𝙶𝙷𝚃𝙲𝙾𝚁𝙴
*╰┈───────────────•*
  𝕾𝖙𝖎𝖈𝖐𝖊𝖗 𝕮𝕸𝕯
*╭┈───────────────•*
*┋* 𝙳𝙰𝙽𝙲𝙴
*┋* 𝙿𝙾𝙺𝙴
*┋* 𝚆𝙸𝙽𝙺
*┋* 𝙷𝙰𝙿𝙿
*┋* 𝙺𝙸𝙲𝙺
*┋ 𝙺𝙸𝙻𝙻
*┋* 𝚂𝙻𝙰𝙿
*┋* 𝙱𝙸𝚃𝙴
*┋* 𝙽𝙾𝙼
*┋* 𝙷𝙸𝙶𝙷𝙵𝙸𝚅𝙴
*┋* 𝚆𝙰𝚅𝙴
*┋* 𝚂𝙼𝙸𝙻𝙴
*┋* 𝙱𝙻𝚄𝚂𝙷
*┋* 𝚈𝙴𝙴𝚃
*┋* 𝙱𝙾𝙽𝙺
*┋* 𝚂𝙼𝚄𝙶
*┋* 𝙿𝙰𝚃
*┋* 𝙻𝙸𝙲𝙺
*┋* 𝙺𝙸𝚂𝚂
*┋* 𝙰𝚆𝙾𝙾
*┋* 𝙷𝚄𝙶
*┋* 𝙲𝚁𝚈
*┋* 𝙲𝚄𝙳𝙳𝙻𝙴
*┋* 𝙱𝚄𝙻𝙻𝚈
*╰┈───────────────•*
  𝕺𝖙𝖍𝖊𝖗 𝕮𝕸𝕯
*╭┈───────────────•*
*┋* 𝙵𝙰𝙽𝙲𝚈
*┋* 𝙴𝙱𝙸𝙽𝙰𝚁𝚈
*┋* 𝙳𝙱𝙸𝙽𝙰𝚁𝚈
*┋* 𝙶𝙴𝚃
*┋* 𝙵𝙴𝚃𝙲𝙷
*┋* 𝚄𝙿𝙳𝙰𝚃𝙴𝙽𝙾𝚆
*┋* 𝙼𝙿3
*┋* TTS
*┋* SHORTEN
*┋* TEMPMAIL
*┋* CHECKMAIL
*┋* ᴀʙᴏᴜᴛ
*┋* ᴍᴜᴛᴇ
*┋* ᴘʀᴏғɪʟᴇ
*┋* ᴇʟᴇᴍᴇɴᴛs
*┋* ᴘᴘ
*╰┈───────────────•*
  𝕾𝖙𝖆𝖑𝖐𝖊𝖗 𝕮𝕸𝕯
*╭┈───────────────•*
*┋* 𝙶𝙸𝚃𝚂𝚃𝙰𝙻𝙺
*┋* 𝚃𝙸𝙺𝚂𝚃𝙰𝙻𝙺
*┋* 𝙽𝙿𝙼𝚂𝚃𝙰𝙻𝙺
*┋* 𝙿𝙾𝙿𝙸𝙽𝙵𝙾
*┋* 𝙻𝙾𝙾𝙺𝚄𝙿
*┋* WACHANNEL
*╰┈───────────────•*
*╭───❍𝕺𝖙𝖍𝖊𝖗 𝕸𝖊𝖓𝖚*
*│* 𝙿𝚒𝚗𝚐
*│* 𝙰𝚋𝚘𝚞𝚝
*│* 𝚛𝚎𝚙𝚘
*│* 𝙰𝚕𝚒𝚟𝚎
*│* 𝚄𝚛𝚕
*│* 𝚂𝚎𝚗𝚍𝚖𝚎
*╰───────────❍* 
  𝕳𝖊𝖗𝖔𝖐𝖚 𝕮𝖑𝖎𝖊𝖓𝖙
*╭┈───────────────•*
*┋* 𝙼𝙾𝙳𝙴 <𝙿𝚄𝙱𝙻𝙸𝙲/𝙿𝚁𝙸𝚅𝙰𝚃𝙴>
*┋* 𝙿𝚁𝙴𝙵𝙸𝚇 <𝚂𝚈𝙼𝙱𝙾𝙻>
*┋* 𝙰𝚄𝚃𝙾𝚂𝚅𝙸𝙴𝚆 <𝙾𝙽/𝙾𝙵𝙵>
*┋* 𝙰𝚄𝚃𝙾𝚁𝙴𝙰𝙲𝚃 <𝙾𝙽/𝙾𝙵𝙵>
*┋* 𝙰𝙻𝚆𝙰𝚈𝚂𝙾𝙽𝙻𝙸𝙽𝙴 <𝙾𝙽/𝙾𝙵𝙵>
*┋* 𝙰𝚄𝚃𝙾𝚁𝙴𝙰𝙳 <𝙾𝙽/𝙾𝙵𝙵>
*┋* 𝙰𝚄𝚃𝙾𝙱𝙻𝙾𝙲𝙺 <𝙾𝙽/𝙾𝙵𝙵>
*┋* 𝙰𝙽𝚃𝙸𝙲𝙰𝙻𝙻 <𝙾𝙽/𝙾𝙵𝙵>
*┋* 𝙰𝚄𝚃𝙾𝚁𝙴𝙲𝙾𝚁𝙳𝙸𝙽𝙶 <𝙾𝙽/𝙾𝙵𝙵>
*┋* 𝙰𝚄𝚃𝙾𝚃𝚈𝙿𝙸𝙽𝙶 <𝙾𝙽/𝙾𝙵𝙵>
*╰┈───────────────•*
Suggest for new features`;

    await m.React('🔮'); // React with a success icon

    sock.sendMessage(
      m.from,
      {
        text: aliveMessage,
        contextInfo: {
          isForwarded: false,
          forwardedNewsletterMessageInfo: {
            newsletterJid: '120363315115438245@newsletter',
            newsletterName: "𝕭𝖔𝖙 𝖇𝖞 𝕮𝖆𝖗𝖑",
            serverMessageId: -1,
          },
          forwardingScore: 999, // Score to indicate it has been forwarded
          externalAdReply: {
            title: "𝕭𝖚𝖉𝖉𝖞 𝖃𝕿𝕽",
            body: "𝕸𝖊𝖓𝖚",
            thumbnailUrl: 'https://files.catbox.moe/ptr27z.jpg', // Add thumbnail URL if required
            sourceUrl: 'https://files.catbox.moe/8k2q7p.mp3', // Add source URL if necessary
            mediaType: 1,
            renderLargerThumbnail: true,
          },
        },
      },
      { quoted: m }
    );
  }
};

export default alive;
