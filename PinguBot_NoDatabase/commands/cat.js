const Discord = require('discord.js');
const fetch = require('node-fetch');
module.exports = {
	name: 'cat',
	description: 'Will post an image of a Cat (API Currently not working)',
	async execute(message, args) {
        const { file } = await fetch('https://aws.random.cat/meow').then(response => response.json())
        .catch(error => message.reply(`Couldn't send cat because of: ${error}`));
        const CatEmbed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('Meow 🐱')
        .setImage(file);
        message.channel.send(CatEmbed);
	},
};