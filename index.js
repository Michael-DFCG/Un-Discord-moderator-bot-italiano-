const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Express app!')
});

app.listen(3000, () => {
  console.log('server started');
});




const { Client } = require("discord.js");
const Bot = new Client({
  disableEveryone: true
});
const Discord = require('discord.js');
Bot.setMaxListeners(30);
const PREFIX = 'scegli prefix!'

Bot.on('message', message => {
    if(message.content === `${PREFIX}serverinfo`) {
      const serverinfo = new Discord.MessageEmbed()
      .setColor('#010000')
      .setTitle(`Info - ${message.guild.name}`)
      .addFields(
        { name: 'Membri totali', value: `${message.guild.memberCount}`},
        { name: 'Creato il:', value: `${message.guild.createdAt}`},
        { name: 'Guild ID:', value: `${message.guild.id}`},
        { name: 'Boost:', value: `${message.guild.premiumSubscriptionCount}`},
        { name: 'Sei entrato il:', value: `${message.member.joinedAt}`},
        { name: 'Regione:', value: `${message.guild.region}`}
      )
      .setTimestamp();
      message.channel.send(serverinfo)
    }
  })
  
  Bot.on('message', message=> {
	if(message.content.startsWith(`${PREFIX}ban`)) {
		var utenteBan = message.mentions.members.first();
		const ban = new Discord.MessageEmbed()
			.setTitle(`${utenteBan} è stato bannato/a con successo!`)
      .setColor('#010000');
		if(!message.member.hasPermission('BAN_MEMBERS')) { // Controllare che l'utente abbia il permesso di bannare
			return;
		}

		if (!utenteBan) {
			message.channel.send(' :x: Errore: Devi Taggare un utente per eseguire il comando'); // Controllare che sia stato menzionato un utente
			return;
		}

		if (!message.mentions.members.first().kickable) { // Controllare che il bot abbia il permesso di bannare
			message.channel.send(':x: mi dispiace ma non ho il permesso di bannare membri ');
			return;
		}

		utenteBan.ban()
			.then(() => message.channel.send(ban));
	}
});

Bot.on('message', message=> {
	if(message.content.startsWith(`${PREFIX}kick`)) {
		var utenteKick = message.mentions.members.first();
		const kick = new Discord.MessageEmbed()
			.setTitle(`${utenteKick}✅  è stato espulso/a con successo!`)
      .setColor('#ff6600');
		if(!message.member.hasPermission('KICK_MEMBERS')) { // Controllare che l'utente abbia il permesso di espellere
    const kick = new Discord.MessageEmbed()
			.setTitle(`${utenteKick}❌ Hmm, non ha funzionato, forse è perché non hai il permesso di espellere membri.`)
      .setColor('#ff6600')
			message.channel.send(kick);
			return;
		}

		if (!utenteKick) {
      const kick = new Discord.MessageEmbed()
			.setTitle(`${utenteKick}❌ Errore: Devi Taggare un utente`)
      .setColor('#ff6600')
			message.channel.send(kick);
			return;
		}; // Controllare che sia stato menzionato un utente
			return;
		}

		if (!message.mentions.members.first().kickable) { // Controllare che il bot abbia il permesso di bannare
			message.channel.send('❌ qualcosa è andato storto,non posso espellere membri');
			return;
		}

		utenteKick.kick()
			.then(() => message.channel.send(kick));
	}
); 
Bot.login(process.env.token)  
console.log('ok')

