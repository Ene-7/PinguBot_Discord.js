const Discord = require('discord.js');
const fetch = require('node-fetch');
module.exports = {
	name: 'meme',
	description: 'Typically displays a very bad unfunny meme.',
	async execute(message, args) {
        const { image } = await fetch('https://some-random-api.ml/meme').then(response => response.json())
        .catch(error => message.reply(`Couldn't send meme because of: ${error}`));
        const MemeEmbed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('Nice Meme')
        .setImage(image);
        message.channel.send(MemeEmbed);
	},
};