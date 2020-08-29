const Main = require('../index.js'); // require functions from index
const Discord = require('discord.js');
const fetch = require('node-fetch');
const querystring = require('querystring');
const trim = (str, max) => ((str.length > max) ? `${str.slice(0, max - 3)}...` : str); // Utility function by Discord.js
module.exports = {
	name: 'urban',
	description: 'Searches Urban Dictionary for the definition of a word, phrase or sentence',
	async execute(message, args) {
        if (!args.length) {
            return message.channel.send('I need a term to look for something.' + Main.data.Emoji('686067450898284544'));
        }

        const query = querystring.stringify({ term: args.join(' ') });
        const { list } = await fetch(`https://api.urbandictionary.com/v0/define?${query}`).then(response => response.json());

        if (!list.length) {
            return message.channel.send(`No results found for **${args.join(' ')}**.`);
        }
        
        const [answer] = list;
        // Send Embed.
        const embed = new Discord.MessageEmbed();
        embed
        .setColor('#EFFF00')
        .setTitle(answer.word)
        .setURL(answer.permalink)
        .addField('Definition', trim(answer.definition, 1024))
        .addField('Example', trim(answer.example, 1024), false )
        .addField('Rating', `${answer.thumbs_up} thumbs up. ${answer.thumbs_down} thumbs down.`, false);
        //console.log(answer);
        message.channel.send(embed);
	},
};