const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
        client.user.setPresence({ game: { name: 'www.gumines.com' }, status: 'dnd' })
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('Pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);//where BOT_TOKEN is the token of our bot 
