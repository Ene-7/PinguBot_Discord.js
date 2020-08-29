const Main = require('../index.js'); // require functions from index
module.exports = {
    name: 'triangle',
	description: 'Prints a Triangle Shape One by One. Usage: triangle <Emoticon or string> (Size 1 - 10)',
	execute(message, args) {
        if(args[0] == null){
            message.channel.send("Please Specify a Valid Input!");
            return;
        }
        var ans ='';
        try{
            var type = args[0]; // Input Emoticon Character or String.
            var size = parseInt(args[1],10) - 1; //Base 10
        }
        catch(error){
            return message.reply("Incorrect Usage");
        }
        if(Number.isNaN(size) || size > 10){ 
            message.channel.send("Please Specify a Valid Amount! Size must be: 1 - 10");
            return;
        }
        
        for(var i = 0; i < size; i++){
            for(var k = 0; k < i + 1; k++){
                ans += type;
            }
            message.channel.send(ans);
            ans = '';
        }
        for(var i = size; i >= 0; i--){
            for(var k = 0; k < i + 1; k++){
                ans += type;
            }
            message.channel.send(ans);
            ans = '';
        }
	},
};