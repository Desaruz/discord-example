const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    bot.user.setStatus('dnd')
    bot.user.setPresence({
        game: {
            name: 'www.gumines.com',
            type: 0
        }
    });
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('Pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);//where BOT_TOKEN is the token of our bot 
