const Discord = require('discord.js');
const {prefix} = require('../config.json'); // Config File Required
module.exports = {
	name: 'about',
	description: 'Information About Pingu Bot',
	execute(message, args) {
        const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('Pingu Bot')
        .setURL('https://discord.js.org/')
        .setAuthor("Ene7", "URL HERE", 'https://discord.js.org')
        .setDescription('A simple Discord Bot that\'s somewhat useful?')
        .setThumbnail('URL HERE')
        .addField('The Best Penguin Around', 'It\'s Pingu your friendly arctic penguin!')
        .addField('How does it work?', 'Using Discord.js', false)
        .addField('Who\'s it for?', 'People who like pingu', false)
        .addField('What does it do?', `Check ${prefix}help for that pal.`, false)
        .setImage('URL HERE')
        .setTimestamp()
        .setFooter('Footer Text','footer url here');
        message.channel.send(exampleEmbed);
	},
};