module.exports = {
	name: 'pinch',
	description: 'Prints a Triangular Shape of Pinch Emojies',
	execute(message, args) {
        var size = parseInt(args[0],10); //Base 10 
        //console.log(size);
        if(Number.isNaN(size)) message.channel.send("Please Specify a Valid Amount!");
        var ans ='';
        for(var i = 0; i < size; i++){
            for(var k = 0; k < i + 1; k++){
                ans += '🤏';
            }
            message.channel.send(ans);
            ans = '';
        }
        for(var i = size; i >= 0; i--){
            for(var k = 0; k < i + 1; k++){
                ans += '🤏';
            }
            message.channel.send(ans);
            ans = '';
        }
	},
};