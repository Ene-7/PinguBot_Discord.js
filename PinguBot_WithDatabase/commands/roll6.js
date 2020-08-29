module.exports = {
	name: 'roll6',
	description: 'Rolls a number from 1 - 6',
	execute(message, emote) {
        var choice = Math.floor((Math.random() * 6) + 1);
		if(choice === 6)  message.channel.send("Wow you rolled a six! Here, have some money: ", {files: ["./images/coin_pouch.gif"]});
		message.channel.send("You rolled a: " + choice + " " + emote);
	},
};