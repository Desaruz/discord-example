const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    client.user.setStatus('dnd');
    client.user.setActivity('www.gumines.com', { type: 'PLAYING' });
    console.log('Development Bot Ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('Pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);//where BOT_TOKEN is the token of our bot 
