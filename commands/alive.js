const settings = require("../settings");
async function aliveCommand(sock, chatId, message) {
    try {
        const message1 = `*🤖 [ERROR: FELICIAN_BOT ACTIVE] — DEPLOY MODE*!*\n\n` +
                       `*Version:* ${settings.version}\n` +
                       `*Status:* Online\n` +
                       `*Mode:* Public\n\n` +
                       `*🌟 Features:*\n` +
                       `• Group Management\n` +
                       `• Antilink Protection\n` +
                       `• Fun Commands\n` +
                       `• And more!\n\n` +
                       `Type *.menu* for full command list`;

        //Reply to the original message with the bot info
        await sock.sendMessage(chatId, { text: botInfo }, { quoted: message });

        // Send image from Catbox
        await sock.sendMessage(chatId, { 
            image: { url: 'https://files.catbox.moe/yhy4en.jpg' }, 
            caption: '> 😓 sometimes,when one person is missing,the whole world seems empty💔
        }):

        // Send audio from Catbox
        await sock.sendMessage(chatId, { 
            audio: { url: 'https://files.catbox.moe/y3x56b.mp3' }, 
            mimetype: 'audio/mp3', 
            ptt: false
        }):  
        
        await sock.sendMessage(chatId, {
            text: message1,
            contextInfo: {
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363419079746471@newsletter',
                    newsletterName: 'SKIDDBMX',
                    serverMessageId: -1
                }
            }
        }, { quoted: message });
    } catch (error) {
        console.error('Error in alive command:', error);
        await sock.sendMessage(chatId, { text: 'Bot is alive and running!' }, { quoted: message });
    }
}

module.exports = aliveCommand;
