module.exports = {
	name: 'roll',
	description: 'Rolls a number from 1 - max',
	execute(message,max, args) {
        var choice = Math.floor((Math.random() * max) + 1);
		message.channel.send("You rolled a: " + choice + " " + args);
	},
};