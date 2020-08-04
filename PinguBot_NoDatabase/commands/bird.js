const Discord = require('discord.js');
const fetch = require('node-fetch');
module.exports = {
	name: 'bird',
	description: 'Will post an image of a Bird.',
	async execute(message, args) {
        const { link } = await fetch('https://some-random-api.ml/img/birb').then(response => response.json())
        .catch(error => message.reply(`Couldn't send bird because of: ${error}`));
        const BirdEmbed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('Tweet tweet 🐦')
        .setImage(link);
        message.channel.send(BirdEmbed);
	},
};