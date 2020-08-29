const Discord = require('discord.js');
const Main = require('../index.js');
module.exports = {
	name: 'help',
	description: 'Information about Pingu Bot\'s commands',
	execute(message, args, prefix) {
        if(args.length > 0){
            var choice = args[0].toLocaleLowerCase();
        }
        const exampleEmbed = new Discord.MessageEmbed();
        switch(choice){
            case 'moderation':
                exampleEmbed
                .setColor('#0099ff')
                .setTitle(`Moderation Commands 🛂`)
                .setURL('https://discord.js.org/')
                .setDescription('This page explains the Moderation commands offered by Pingu Bot.')
                .setThumbnail('https://cdn.discordapp.com/avatars/666001397816361000/b218be4411495abcc4dcee262b83f789.png')
                .addField('About', `Information about this bot. \nUsage: ${prefix}about.`, false)
                .addField('Ping', `Displays the bot's Latency and API's Latency. \nUsage: ${prefix}ping.`, false)
                .addField('Purge', `Removes a given number of messages. Bot must have Administative Privilages. Usage: ${prefix}purge <amount of messages>`, false)
                .setImage('https://cdn.discordapp.com/avatars/666001397816361000/b218be4411495abcc4dcee262b83f789.png')
                .setTimestamp()
                .setFooter('Pet froge™','https://cdn.discordapp.com/attachments/473672749785546764/730978630724878406/tinyfroge.gif');
                message.channel.send(exampleEmbed);
                break;
                
            case 'api':
                exampleEmbed
                .setColor('#0099ff')
                .setTitle(`Pingu Bot API Commands 🌐`)
                .setURL('https://discord.js.org/')
                .setDescription('This page explains the API commands offered by Pingu Bot.')
                .setThumbnail('https://cdn.discordapp.com/avatars/666001397816361000/b218be4411495abcc4dcee262b83f789.png')
                .addField('Bird', `Will post an image of a Bird. \nUsage: ${prefix}bird OR ${prefix}birb`, false)
                .addField('Cat', `Will post an image of a Cat (API Currently not working). \nUsage: ${prefix}cat`, false)
                .addField('Dog', `Will post an image of a Dog. \nUsage: ${prefix}dog`, false)
                .addField('Meme', `Typically displays a very bad unfunny meme. \nUsage: ${prefix}meme`, false)
                .addField('Urban', `Searches Urban Dictionary for the definition of a word, phrase or sentence. \nUsage: ${prefix}urban <search term>`, false)
                .setImage('https://cdn.discordapp.com/avatars/666001397816361000/b218be4411495abcc4dcee262b83f789.png')
                .setTimestamp()
                .setFooter('Pet froge™','https://cdn.discordapp.com/attachments/473672749785546764/730978630724878406/tinyfroge.gif');
                message.channel.send(exampleEmbed);
                break;
                
            case 'fun':
                exampleEmbed
                .setColor('#0099ff')
                .setTitle(`Fun Commands 🙃`)
                .setURL('https://discord.js.org/')
                .setDescription('This page explains the Fun commands offered by Pingu Bot.')
                .setThumbnail('https://cdn.discordapp.com/avatars/666001397816361000/b218be4411495abcc4dcee262b83f789.png')
                .addField('Fibonacci', `Calculates the n-th Fibonacci Number. \nUsage: ${prefix}fib <number> OR ${prefix}fibonacci <number>`, false)
                .addField('Gif', `Displays a Pingu related Gif. \nUsage: ${prefix}gif`, false)
                .addField('Pyramid', `Prints a Triangular Shape of two variants Pinch or Penguin. \nUsage: ${prefix}pyramid <size 1 - 25> <Pinch || Penguin>`, false) 
                .addField('Roll', `Rolls a random number from 1 to 6`, false)
                .addField('Roll <number>', `Rolls a random number from 1 to <number>. \nUsage: ${prefix}roll <number>`, false)
                .addField('Say', `Make Pingu Bot say something for you. \nUsage: ${prefix}say <text>`, false)
                .addField('Square', `Prints a Square shape line by line. \nUsage: ${prefix}square <size>`, false)
                .setImage('https://cdn.discordapp.com/avatars/666001397816361000/b218be4411495abcc4dcee262b83f789.png')
                .setTimestamp()
                .setFooter('Pet froge™','https://cdn.discordapp.com/attachments/473672749785546764/730978630724878406/tinyfroge.gif');
                message.channel.send(exampleEmbed);
                break;

            case 'owner':
                exampleEmbed
                .setColor('#ff0000')
                .setTitle(`Bot Owner Commands ⛔`)
                .setURL('https://discord.js.org/')
                .setDescription('This page explains the Bot Owner commands offered by Pingu Bot.')
                .setThumbnail('https://cdn.discordapp.com/avatars/666001397816361000/b218be4411495abcc4dcee262b83f789.png')
                .addField('Dm by ID', `Sends a Direct Message to a User by providing their ID as an argument. \nUsage: ${prefix}dmid <USER_ID>`, false)
                .addField('Dm User in Guild', `Sends a Direct Message to a User that is in the guild by doing @UserName. \nUsage: ${prefix}dmlocal <@USER_NAME>`, false)
                .addField('Set Bot Status', `Sets the bots status. Parameters: Online, Invisivble, Dnd (do not disturb), and Idle. \nUsage: ${prefix}status <status>`, false)
                .addField('Shutdown', `The bot shutsdown, what more is there to say? \nUsage: ${prefix}shutdown`, false)
                .setImage('https://cdn.discordapp.com/avatars/666001397816361000/b218be4411495abcc4dcee262b83f789.png')
                .setTimestamp()
                .setFooter('Pet froge™','https://cdn.discordapp.com/attachments/473672749785546764/730978630724878406/tinyfroge.gif');
                message.channel.send(exampleEmbed);
                break;

            default:
                exampleEmbed
                .setColor('#0099ff')
                .setTitle(`Pingu Bot Help Commands ${Main.data.Emoji('667924218687651840')}`)
                .setURL('https://discord.js.org/')
                .setAuthor('Ene7', 'https://cdn.discordapp.com/avatars/194452454052593666/9d0b33b1d31417dff0445a6eb46ff3b3.png', 'https://discord.js.org')
                .setDescription('This is the main page of the help commands, broken down into sections. Please use the following for additional information regarding our commands.')
                .setThumbnail('https://cdn.discordapp.com/avatars/666001397816361000/b218be4411495abcc4dcee262b83f789.png')
                .addField('Moderation Commands 🛂', `Commands that help run your server. \nFor Further Information: ${prefix}help moderation.`, false)
                //.addBlankField() don't need this
                .addField('API Commands 🌐', `Image retreval commands for memes and such. \nFor Further Information: ${prefix}help API`, false)
                .addField('Fun Commands 🙃', `Miscellanious fun commands the bot can do. \nFor Further Information: ${prefix}help fun`, false)
                .addField('Prefix-less Commands 🔕', `Secret Commands that will trigger without any prefix. \nCan be standalone or contained in a word or sentence.`, false)
                .addField('Bot Owner Commands ⛔', `Commands reserved for **Bot Owner Only**. \nFor Further Information: ${prefix}help Owner`, false)
                .addField('NOTICE!', `This Help Menu Is Currently Ongoing Development.`, false)
                .setImage('https://cdn.discordapp.com/avatars/666001397816361000/b218be4411495abcc4dcee262b83f789.png')
                .setTimestamp()
                .setFooter('Pet froge™','https://cdn.discordapp.com/attachments/473672749785546764/730978630724878406/tinyfroge.gif');
                message.channel.send(exampleEmbed);
                break;
        }
	},
};
