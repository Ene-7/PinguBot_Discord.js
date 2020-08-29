var memoArray = {}; //store all computed values.
const Main = require('../index.js'); // require functions from index
module.exports = {
	name: 'fibonacci',
	description: 'Returns the n-th fibonacci number specified.',
	execute(message, args) {
        var size = parseInt(args[0],10);
        if(Number.isNaN(size)){
            message.channel.send("Invalid Number Input.");
            return;
        }
        if(size > 1000 ){
            return message.channel.send(Main.data.Emoji('686067450898284544') +"**ANGRY NOOT** " + Main.data.Emoji('686067450898284544') + "\n" +"That number is too big for me to compute even with approximations.")
        }
        fibonacci(size);
        return message.channel.send("Fibonacci " +size +" is: " + memoArray[size]);
    },
};

    function fibonacci(n) {
           var computed;
           if(n in memoArray){
               computed = memoArray[n];
           }
           else{
                if(n === 0 || n === 1) computed = n;
                else computed = fibonacci(n-1) + fibonacci(n-2);
                memoArray[n] = computed;
           }
           return computed;
}