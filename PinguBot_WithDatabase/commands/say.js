module.exports = {
	name: 'say',
	description: 'Makes Pingu Say Stuff!',
	execute(message, args) {
	// Makes the bot say something and delete the message. As an example, it's open to anyone to use. 
        const sayMessage = args.join(" ");
        message.delete().catch(O_o=>{}); 
        message.channel.send(sayMessage).catch(err => message.reply("What do you want me to say? I can't just say nothing you know... :("));
	},
};