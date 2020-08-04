module.exports = {
	name: 'square',
	description: 'Makes Pingu Speak! Usage: square <size>. Maximum size 20',
	execute(message, args) {
        var size = parseInt(args[0],10); //Base 10 
        if(Number.isNaN(size) || size > 20 || args[0] == null){
            message.channel.send("Please Specify a Valid Amount!");
            return; 
        } 
        var ans = '';
        for(var r = 0; r < size; r++){
            for(var c = 0; c < size; c++){
                if(r === 0 || r === size-1 || c === 0 || c === size-1){
                    ans += "⬛";
                }
                else{
                    ans += "⬜";
                }
            }
            message.channel.send(ans);
            ans = '';
        }
	},
};