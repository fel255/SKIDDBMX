const settings = require('../settings');
const fs = require('fs');
const path = require('path');

async function helpCommand(sock, chatId, message) {
    const helpMessage = `
╔═══════════════════╗
   *🤖 ${settings.botName || 'SKIDDBMX'}*  
   Version: *${settings.version || '1.0.0'}*
   by ${settings.botOwner || 'SKIDDBMX👑'}
   YT : ${global.ytch}*
╚═══════════════════╝

*Available Commands:*

╔═══════════════════╗
💎 *General Commands*:
║ 💾 .help or .menu
║ ⚒️.ping
║ 🛸.alive
║ 📝 .tts 
║ 🤴 .owner
║ 😜 .joke
║ 🔏 .quote
║ 🗣️ .fact
║ ⚙️.weather 
║ 🗽.news
║ 🗿.attp 
║ 🎆.lyrics 
║ 🧶.8ball 
║ 💾.groupinfo
║ 🚨.staff or .admins 
║ ✉️.vv
║ 🤔.trt 
║ 🔗.ss <link>
║ ✌️.jid
╚═══════════════════╝ 

╔═══════════════════╗
👮‍♂️ *Group Commands*:
║ 🚫 .ban @user
║ 🕸️ .promote 
║ 💾.demote
║ 😔 .mute 
║ 😜 .unmute
║ ❌.delete or .del
║ 🗿 .kick @user
║ 🚫 .warnings @user
║ 🚫 .warn @user
║ 🔗 .antilink
║ 🗣️ .antibadword
║ ❌ .clear
║ ➤🗽.tag 
║ 📝 .tagall
║ 🛸 .chatbot
║ 🔗 .resetlink
║ 🗝️ .welcome 
║ 😂 .goodbye 
╚═══════════════════╝

╔═══════════════════╗
🔒 *Owner Commands*:
║ 🚨 .mode
║ 🚨 .autostatus
║ 🚨 .clearsession
║ 🚨.antidelete
║ 🚨 .cleartmp
║ 🚨   .setpp 
║ 🚨 .autoreact
╚═══════════════════╝

╔═══════════════════╗
🎨 *Image/Sticker Commands*:
║ ➤ .blur <image>
║ ➤ .simage <reply to sticker>
║ ➤ .sticker <reply to image>
║ ➤ .tgsticker <Link>
║ ➤ .meme
║ ➤ .take <packname> 
║ ➤ .emojimix <emj1>+<emj2>
╚═══════════════════╝  

╔═══════════════════╗
🎮 *Game Commands*:
║ 🤴 .tictactoe
║ 🛸 .hangman
🚨😜 .guess 
║ ⚒️ .trivia
║ 😂 .answer 
║ 😔.truth
║ ❌ .dare
╚═══════════════════╝

╔═══════════════════╗
🤖 *AI Commands*:
║ 💾 .gpt 
║ 🗿 .gemini 
║ 📝 .imagine 
║ 💫 .flux
╚═══════════════════╝

╔═══════════════════╗
🎯 *Fun Commands*:
║ 🤴.compliment @user
║🗣️.insult @user
║ 💨 .flirt 
║ ⚒️.shayari
║ 🎆 .goodnight
║ 😔.roseday
║ 😔.character @user
║ 🗝️.wasted @user
║ 🔗.ship @user
║ 🔏.simp @user
║ 🗿.stupid @user [text]
╚═══════════════════╝

╔═══════════════════╗
🔤 *Textmaker*:
║ 🛸 .metallic
║ ⚒️.ice 
║ ⚙️.snow 
║ 🗣️.impressive 
║ ⌨️ .matrix
║ 💨.light 
║⌨️ .neon 
║ 💸.devil 
║ 🧶 .purple 
║ 💨 .thunder 
║ 🎆.leaves 
║ 💫.1917 
║ 🗿 .arena 
║ ⌨️ .hacker 
║🔏 .sand 
║ 🗽 .blackpink 
║ ✉️.glitch 
║ 🧶 .fire 
╚═══════════════════╝

╔═══════════════════╗
|*Downloader*:
║ 🎵 .play
║ 🎶 .song 
║ 🔗.instagram 
║ 😏.facebook 
║ 🔗 .tiktok 
║ 📷.video 
║ 🔗.ytmp4 
╚═══════════════════╝

╔═══════════════════╗
|*Github Commands:*
║ ✉️ .git
║ 💾.github
║ 💫 .sc
║ ➤💨.script
║ 🌟.repo
╚═══════════════════╝

Join our channel for updates:`;

    try {
        const imagePath = path.join(__dirname, '../assets/bot_image.jpg');
        
        if (fs.existsSync(imagePath)) {
            const imageBuffer = fs.readFileSync(imagePath);
            
            await sock.sendMessage(chatId, {
                image: imageBuffer,
                caption: helpMessage,
                contextInfo: {
                    forwardingScore: 1,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363419079746471@newsletter',
                        newsletterName: 'SKIDDBMX',
                        serverMessageId: -1
                    }
                }
            },{ quoted: message });
        } else {
            console.error('Bot image not found at:', imagePath);
            await sock.sendMessage(chatId, { 
                text: helpMessage,
                contextInfo: {
                    forwardingScore: 1,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363419079746471@newsletter',
                        newsletterName: 'SKIDDBMX bY FELICIAN',
                        serverMessageId: -1

                        //Reply to the original message with the bot info
                         await sock.sendMessage(chatId, { text: botInfo }, { quoted: message });

                        // Send audio from Catbox
        await sock.sendMessage(chatId, { 
            audio: { url: 'https://files.catbox.moe/s7hcy1.m4a' }, 
            mimetype: 'audio/mp3', 
            ptt: false
        }):
                        
                    } 
                }
            });
        }
    } catch (error) {
        console.error('Error in help command:', error);
        await sock.sendMessage(chatId, { text: helpMessage });
    }
}

module.exports = helpCommand;
