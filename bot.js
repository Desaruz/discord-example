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
    	message.reply('Pong.');
  	}
});

client.on('message', message => {
    if (message.content === '1') {
    	message.reply('You can now put @Gumine Industries#0250 in your own server.');
  	}
});

client.on('message', message => {
    if (message.content === '2') {
    	message.reply('https://discordapp.com/api/oauth2/authorize?client_id=669056189530898443&permissions=8&scope=bot');
  	}
});

client.on('message', message => {
    if (message.content === '3') {
    	message.reply('_ _');
  	}
});

client.on('message', message => {
    if (message.content === '4') {
    	message.reply('@Gumine Industries#6341 can be on special occasions.');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);//where BOT_TOKEN is the token of our bot 
