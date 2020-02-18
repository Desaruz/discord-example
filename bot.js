const Discord = require('discord.js');
const client = new Discord.Client();

const prefix = '!' //prefix

client.on('ready', () => {
    client.user.setStatus('dnd')
    client.user.setPresence({
        game: {
            name: 'www.gumines.com',
            type: 0
        }
    });
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('You can add @Gumine Industries#0250  to your discord server.');
  	}
});


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);//where BOT_TOKEN is the token of our bot 
