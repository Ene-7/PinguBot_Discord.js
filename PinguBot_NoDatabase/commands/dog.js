const Discord = require('discord.js');
const fetch = require('node-fetch');
module.exports = {
	name: 'dog',
	description: 'Will post an image of a Dog.',
	async execute(message, args) {
        var doggo;
        const { file } = await fetch('https://dog.ceo/api/breeds/image/random').then(response => response.json()
        .then(data => doggo = data['message'])).catch(error => message.reply(`Couldn't send dog because of: ${error}`));
        const DogEmbed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('Woof 🐶')
        .setImage(doggo);
        message.channel.send(DogEmbed);
	},
};