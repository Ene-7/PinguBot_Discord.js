module.exports = {
	name: 'roll6',
	description: 'Rolls a number from 1 - 6',
	execute(message, emote) {
        var choice = Math.floor((Math.random() * 6) + 1);
		if(choice === 6)  message.channel.send("You're extra lucky today! Here have some gold coins: ", {files: ["./images/coin_pouch.gif"]});
		message.channel.send("You rolled a: " + choice + " " + emote);
	},
};