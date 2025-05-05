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

  if (cmd === "commands") {
    await m.React('🕵'); // React with a loading icon

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
      pushwish = "Good Morning 🌄";
    } else if (time2 < "11:00:00") {
      pushwish = "Good Morning 🌄";
    } else if (time2 < "15:00:00") {
      pushwish = "Good Afternoon 🌅";
    } else if (time2 < "18:00:00") {
      pushwish = "Good Evening 🌃";
    } else if (time2 < "19:00:00") {
      pushwish = "Good Evening 🌃";
    } else {
      pushwish = "Good Night 🌌";
    }

    const aliveMessage = `
╭┈───────────────•
│  ◦ 𝖕𝖗𝖊𝖋𝖎𝖝: ${prefix}
│  ◦ 𝔪𝔬𝔡𝔢: ${mode}
│  ◦ 𝖚𝖕𝖙𝖎𝖒𝖊: ${days}d ${hours}h ${minutes}m ${seconds}s
│  ◦𝕳𝖊𝖑𝖑𝖔: ${pushName}
╰┈───────────────•

𝕭𝖔𝖘𝖘
╭┈───────────────•
┋ 𝕭𝖑𝖔𝖈𝖐
┋ 𝖀𝖓𝖇𝖑𝖔𝖈𝖐
┋ 𝕵𝖔𝖎𝖓
┋ 𝕷𝖊𝖆𝖛𝖊
┋ 𝕾𝖊𝖙𝖛𝖆𝖗
┋ 𝕽𝖊𝖘𝖙𝖆𝖗𝖙
┋ 𝖕𝖕
┋ 𝙾𝚠𝚗𝚎𝚛𝚁𝚎𝚊𝚌𝚝
┋ 𝙷𝚎𝚊𝚛𝚝𝚁𝚎𝚊𝚌𝚝
┋ 𝙻𝚎𝚏𝚝
┋ 𝙱𝚛𝚘𝚊𝚍𝚌𝚊𝚜𝚝
┋ 𝚅𝚟
┋ 𝚅𝚟2
┋ 𝙳𝚎𝚕
┋ 𝚂𝚊𝚟𝚎
┋ ʀᴇᴘᴏʀᴛ
┋ ᴊɪᴅ
┋ 𝙳𝚎𝚕
┋ 𝚂𝚊𝚟𝚎
╰┈───────────────•
𝕾𝖊𝖆𝖗𝖈𝖍 𝖈𝖒𝖉
╭┈───────────────•
┋ 𝚈𝚃𝚂
┋ 𝙶𝙾𝙾𝙶𝙻𝙴
┋ 𝙸𝙼𝙳
┋ 𝙸𝙼𝙶
┋ 𝚆𝙴𝙰𝚃𝙷𝙴𝚁
┋ 𝙿𝙻𝙰𝚈𝚂𝚃𝙾𝚁𝙴
┋ 𝙽𝙴𝚆𝚂
╰┈───────────────•
𝕬𝕴 𝖈𝖒𝖉
╭┈───────────────•
┋ ʙʟᴀᴄᴋʙᴏxᴀɪ
┋ ɢᴘᴛ
┋ ᴠɪsɪᴛ
┋ ᴅᴇғɪɴᴇ
╰┈───────────────•
╭───❍「 𝕮𝖍𝖗𝖎𝖘𝖙𝖎𝖆𝖓 」
│ ʙɪʙʟᴇ
│ ʙɪʙʟᴇʟʟɪsᴛ
╰───────────❍
╭───❍「 𝕴𝖘𝖑𝖆𝖒𝖎𝖈 」
│ 𝚂𝚞𝚛𝚊𝚑𝚊𝚞𝚍𝚒𝚘
│ 𝚂𝚞𝚛𝚊𝚑𝚞𝚛𝚍𝚞
│ 𝙰𝚜𝚖𝚊𝚞𝚕𝚑𝚞𝚜𝚗𝚊
│ 𝙿𝚛𝚘𝚙𝚑𝚎𝚝𝚗𝚊𝚖𝚎
╰───────────❍
╭━❮𝕮𝖔𝖓𝖛𝖊𝖗𝖘𝖎𝖔𝖓❯━╮
┃ 𝙰𝚃𝚃𝙿
┃ ᴜʀʟ
┃ 𝙰𝚃𝚃𝙿3
┃ 𝙴𝙱𝙸𝙽𝙰𝚁𝚈
┃ 𝙳𝙱𝙸𝙽𝙰𝚁𝚈
┃ 𝙴𝙼𝙾𝙹𝙸𝙼𝙸𝚇
┃ 𝙼𝙿3
╰━━━━━━━━━━━━━━━⪼
𝕯𝖔𝖜𝖓𝖑𝖔𝖆𝖉𝖊𝖗𝖘
╭┈───────────────•
┋ ғʙ
┋ ɪɴꜱᴛᴀ
┋ ᴠɪᴅᴇᴏ
┋ ɢᴅʀɪᴠᴇ
┋ ᴛᴡɪᴛᴛᴇʀ
┋ 𝚝𝚒𝚔𝚝𝚘𝚔
┋ ᴍᴇᴅɪᴀғɪʀᴇ
┋ ꜱᴏɴɢ
┋ ᴠɪᴅᴇᴏ
┋ ᴀᴘᴋ
┋ 𝚃𝚃𝙰𝚄𝙳𝙸𝙾
╰┈───────────────•
╭───❍𝕷𝖔𝖌𝖔𝖘
┋ 𝗅𝗈𝗀𝗈
┋ hacker
┋ 𝖻𝗅𝖺𝖼𝗄𝗉𝗂𝗇𝗄
┋ 𝗀𝗈𝗌𝗌𝗒𝗌𝗂𝗅𝗏𝖾𝗋
┋ 𝗇𝖺𝗋𝗎𝗋𝗈
┋ 𝖽𝗂𝗀𝗂𝗍𝖺𝗅𝗀𝗅𝗂𝗍𝖼𝗁
┋ 𝗉𝗂𝗑𝖾𝗅𝗀𝗅𝗂𝗍𝖼𝗁
┋ 𝗌𝗍𝖺𝗋
┋ 𝗌𝗆𝗈𝗄𝖾
┋ 𝖻𝖾𝖺𝗋
┋ 𝗇𝖾𝗈𝗇𝖽𝖾𝗏𝗂𝗅
┋ 𝗌𝖼𝗋𝖾𝖾𝗇
┋ 𝗇𝖺𝗍𝗎𝗋𝖾
┋ 𝖽𝗋𝖺𝗀𝗈𝗇𝖻𝖺𝗅𝗅
┋ 𝖿𝗈𝗀𝗀𝗒𝗀𝗅𝖺𝗌𝗌
┋ 𝗇𝖾𝗈𝗇𝗅𝗂𝗀𝗁𝗍
┋ 𝖼𝖺𝗌𝗍𝗅𝖾𝗉𝗈𝗉
┋ 𝖿𝗋𝗈𝗓𝖾𝗇𝖼𝗁𝗋𝗂𝗌𝗍𝗆𝖺𝗌
┋ 𝖿𝗈𝗂𝗅𝖻𝖺𝗅𝗅𝗈𝗈𝗇
┋ 𝖼𝗈𝗅𝗈𝗋𝖿𝗎𝗅𝗉𝖺𝗂𝗇𝗍
┋ 𝖺𝗆𝖾𝗋𝗂𝖼𝖺𝗇𝖿𝗅𝖺𝗀
┋ water
┋ 𝗇𝖾𝗈𝗇𝖽𝖾𝗏𝗂𝗅
┋ underwater
┋ dragonfire
┋ bokeh
┋ snow
┋ sand3d
┋ pubg
┋ horror
┋ blood
┋ bulb
┋ graffiti
┋ thunder
┋ thunder1
┋ womensday
┋ Valentine
┋ graffiti2
┋ queencard
┋ galaxy
┋ pentakill
┋ birthdayflower
┋ zodiac
┋ water3D
┋ textlight
┋ wall
┋ gold
┋ glow
┋ team
┋ rotation
┋ paint
┋ avatar
┋ typography
┋ tattoo
┋ luxury
┋ logo
╰━━━━━━━━━━━━━━━⪼
𝕲𝖗𝖔𝖚𝖕 𝖈𝖒𝖉
╭┈──────────────•
┋ ᴅᴇʟ
┋ ᴀᴅᴅ
┋ ᴋɪᴄᴋ
┋ ᴡᴇʟᴄᴏᴍᴇ 𝚘𝚗
┋ ᴡᴇʟᴄᴏᴍᴇ 𝚘𝚏𝚏
┋ ᴘʀᴏᴍᴏᴛᴇ
┋ ᴅᴇᴍᴏᴛᴇ
┋ ᴛᴀɢᴀʟʟ
┋ 𝚑𝚒𝚍𝚎𝚝𝚊𝚐
┋ ɪɴᴠɪᴛᴇ
┋ ᴍᴜᴛᴇ
┋ ᴜɴᴍᴜᴛᴇ
┋ ɢʀᴏᴜᴘᴏᴘᴇɴ
┋ ɢʀᴏᴜᴘᴄʟᴏsᴇ
┋ ɢʀᴏᴜᴘɪɴғᴏ
┋ ᴅᴇʟ
┋ ᴍᴜᴛᴇ
┋ ᴜɴᴍᴜᴛᴇ
┋ ᴘᴏʟʟ
┋ ᴅᴇ
╰┈───────────────•
𝕬𝖚𝖉𝖎𝖔 𝕮𝕸𝕯
╭┈───────────────•
┋ 𝙳𝙴𝙴𝙿
┋ 𝙱𝙰𝚂𝚂
┋ 𝚁𝙾𝙱𝙾𝚃
┋ 𝚁𝙴𝚅𝙴𝚁𝚂𝙴
┋ 𝚂𝙻𝙾𝚆
┋ 𝚂𝙼𝙾𝙾𝚃𝙷
┋ 𝙽𝙸𝙶𝙷𝚃𝙲𝙾𝚁𝙴
╰┈───────────────•
𝕾𝖙𝖎𝖈𝖐𝖊𝖗 𝕮𝕸𝕯
╭┈───────────────•
┋ 𝙳𝙰𝙽𝙲𝙴
┋ 𝙿𝙾𝙺𝙴
┋ 𝚆𝙸𝙽𝙺
┋ 𝙷𝙰𝙿𝙿
┋ 𝙺𝙸𝙲𝙺
┋ 𝙺𝙸𝙻𝙻
┋ 𝚂𝙻𝙰𝙿
┋ 𝙱𝙸𝚃𝙴
┋ 𝙽𝙾𝙼
┋ 𝙷𝙸𝙶𝙷𝙵𝙸𝚅𝙴
┋ 𝚆𝙰𝚅𝙴
┋ 𝚂𝙼𝙸𝙻𝙴
┋ 𝙱𝙻𝚄𝚂𝙷
┋ 𝚈𝙴𝙴𝚃
┋ 𝙱𝙾𝙽𝙺
┋ 𝚂𝙼𝚄𝙶
┋ 𝙿𝙰𝚃
┋ 𝙻𝙸𝙲𝙺
┋ 𝙺𝙸𝚂𝚂
┋ 𝙰𝚆𝙾𝙾
┋ 𝙷𝚄𝙶
┋ 𝙲𝚁𝚈
┋ 𝙲𝚄𝙳𝙳𝙻𝙴
┋ 𝙱𝚄𝙻𝙻𝚈
╰┈───────────────•
𝕺𝖙𝖍𝖊𝖗 𝕮𝕸𝕯
╭┈───────────────•
┋ 𝙵𝙰𝙽𝙲𝚈
┋ 𝙴𝙱𝙸𝙽𝙰𝚁𝚈
┋ 𝙳𝙱𝙸𝙽𝙰𝚁𝚈
┋ 𝙶𝙴𝚃
┋ 𝙵𝙴𝚃𝙲𝙷
┋ 𝚄𝙿𝙳𝙰𝚃𝙴𝙽𝙾𝚆
┋ 𝙼𝙿3
┋ TTS
┋ SHORTEN
┋ TEMPMAIL
┋ CHECKMAIL
┋ ᴀʙᴏᴜᴛ
┋ ᴍᴜᴛᴇ
┋ ᴘʀᴏғɪʟᴇ
┋ ᴇʟᴇᴍᴇɴᴛs
┋ ᴘᴘ
╰┈───────────────•
𝕾𝖙𝖆𝖑𝖐𝖊𝖗 𝕮𝕸𝕯
╭┈───────────────•
┋ 𝙶𝙸𝚃𝚂𝚃𝙰𝙻𝙺
┋ 𝚃𝙸𝙺𝚂𝚃𝙰𝙻𝙺
┋ 𝙽𝙿𝙼𝚂𝚃𝙰𝙻𝙺
┋ 𝙿𝙾𝙿𝙸𝙽𝙵𝙾
┋ 𝙻𝙾𝙾𝙺𝚄𝙿
┋ WACHANNEL
╰┈───────────────•
╭───❍𝕺𝖙𝖍𝖊𝖗 𝕸𝖊𝖓𝖚
│ 𝙿𝚒𝚗𝚐
│ 𝙰𝚋𝚘𝚞𝚝
│ 𝚛𝚎𝚙𝚘
│ 𝙰𝚕𝚒𝚟𝚎
│ 𝚄𝚛𝚕
│ 𝚂𝚎𝚗𝚍𝚖𝚎
╰───────────❍
𝕳𝖊𝖗𝖔𝖐𝖚 𝕮𝖑𝖎𝖊𝖓𝖙
╭┈───────────────•
┋ 𝖒𝖔𝖉𝖊 <𝖕𝖗𝖎𝖛𝖆𝖙𝖊/𝖕𝖚𝖇𝖑𝖎𝖈>
┋ 𝖘𝖊𝖙𝖕𝖗𝖊𝖋𝖎𝖝 <𝖘𝖞𝖒𝖇𝖔𝖑>
┋ 𝖆𝖚𝖙𝖔𝖘𝖛𝖎𝖊𝖜 <𝖞𝖊𝖘/𝖓𝖔>
┋ 𝖆𝖚𝖙𝖔𝖗𝖊𝖆𝖈𝖙 <𝖞𝖊𝖘/𝖓𝖔>
┋ 𝖆𝖑𝖜𝖆𝖞𝖘𝖔𝖓𝖑𝖎𝖓𝖊 <𝖞𝖊𝖘/𝖓𝖔>
┋ 𝖆𝖚𝖙𝖔𝖗𝖊𝖆𝖉 <𝖞𝖊𝖘/𝖓𝖔>
┋ 𝖆𝖚𝖙𝖔𝖇𝖑𝖔𝖈𝖐 <𝖞𝖊𝖘/𝖓𝖔>
┋ 𝖆𝖓𝖙𝖎𝖈𝖆𝖑𝖑 <𝖞𝖊𝖘/𝖓𝖔>
┋ 𝖆𝖚𝖙𝖔𝖗𝖊𝖈𝖔𝖗𝖉𝖎𝖓𝖌 <𝖞𝖊𝖘/𝖓𝖔>
┋ 𝖆𝖚𝖙𝖔𝖙𝖞𝖕𝖎𝖓𝖌 <𝖞𝖊𝖘/𝖓𝖔>
╰┈───────────────•

> Powered by carl`;

    await m.React('🔮'); // React with a success icon

    // Define the menu image (you can replace the URL with your own image)
    const menuImage = { url: 'https://files.catbox.moe/ptr27z.jpg' };

    // Send the response with image and context info
    await sock.sendMessage(
      m.from,
      {
        image: menuImage,
        caption: aliveMessage,
        contextInfo: {
          mentionedJid: [m.sender],
          forwardingScore: 999,
          isForwarded: true,
          forwardedNewsletterMessageInfo: {
            newsletterJid: 'https://whatsapp.com/channel/0029Vak0genJ93wQXq3q6X3h',
            newsletterName: "𝖈𝖆𝖗𝖑 𝖜𝖎𝖑𝖑𝖎𝖆𝖒",
            serverMessageId: 143,
          },
        },
      },
      { quoted: m }
    );
  }
};

export default alive;
