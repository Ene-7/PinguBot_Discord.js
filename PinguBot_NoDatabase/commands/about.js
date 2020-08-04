const Discord = require('discord.js');
const {prefix, BotOwnerName, BotOwnerImageURL, BotImageURL, FooterText, FooterURL} = require('../config.json');
module.exports = {
	name: 'about',
	description: 'Information About Pingu Bot',
	execute(message, args) {
        const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('Pingu Bot')
        .setURL('https://discord.js.org/' /*Or BOT website or whatever you want to use*/)
        .setAuthor(BotOwnerName, BotOwnerImageURL/*Enter a URL for your picture here!*/, 'https://discord.js.org' /*Optional Url to direct to*/)
        .setDescription('A simple Discord Bot that\'s somewhat useful?')
        .setThumbnail(''/*Enter a URL of an image like the Bot's profile picture*/)
        .addField('The Best Penguin Around', 'It\'s Pingu your friendly neighborhood Noot!')
        .addField('How does it work?', 'Using Discord.js', false)
        .addField('Who\'s it for?', 'People who like Pingu', false)
        .addField('What does it do?', `Check ${prefix}help for that pal.`, false)
        .setImage(BotImageURL)
        .setTimestamp()
        .setFooter(FooterText,FooterURL);
        message.channel.send(exampleEmbed);
	},
};