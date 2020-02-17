const Discord = require('discord.js');
const client = new Discord.Client();

const prefix = '!' //prefix

var ping = Date.now() - message.createdTimestamp + " ms";

client.on('ready', () => {
    client.user.setStatus('dnd')
    client.user.setPresence({
        game: {
            name: 'www.gumines.com',
            type: 0
        }
    });
});

if (message.content.startsWith(! + "ping")) {
    
    var ping = Date.now() - message.createdTimestamp + " ms";
    message.channel.sendMessage("Your ping is `" + `${Date.now() - message.createdTimestamp}` + " ms`");

  }

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);//where BOT_TOKEN is the token of our bot 
