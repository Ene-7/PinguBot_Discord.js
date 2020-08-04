module.exports = {
	name: 'gif',
	description: 'Gifs Randomly Selected!',
	execute(message, args) {
		var choice = Math.floor((Math.random() * 6) + 1); // Value [1,6]
        switch(choice){
            case 1: message.channel.send("Ooga booga ", {files: ["./images/pingutroll.gif"]});
                break;
            case 2: message.channel.send("I can't read lol ", {files: ["./images/pinguread.gif"]});
                break;
            case 3: message.channel.send("NOOT NOOT! ", {files: ["./images/pingunoot.gif"]});
                break;
            case 4: message.channel.send("Spotify premium be like: ", {files: ["./images/pingumusic.gif"]});
                break;
            case 5: message.channel.send("Meow. ", {files: ["./images/miau.gif"]});
                break;
            case 6: message.channel.send("Pet **froge** ", {files: ["./images/tinyfroge.gif"]});
                break;
	    default: console.log("Huh this wasn't supposed to happen GIF Command gone wrong?"); //Should never trigger. Random function shouldn't be returning anything outside its domain
		}
	},
};
