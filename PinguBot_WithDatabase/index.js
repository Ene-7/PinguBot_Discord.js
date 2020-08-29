//BOT USING DATABASE

const {DefaultPrefix, token, BotAuthorID} = require('./config.json');
const fs = require('fs');
const Discord = require('discord.js');
const client = new Discord.Client();
client.commands = new Discord.Collection();
const fetch = require('node-fetch');
let dbConnection;
const guildCommandPrefixes = new Map();

// Extract Commands From Files
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

// Bot Initialization
client.on('ready', () => {
    console.log('Pingu Bot is now online!');
    client.user.setPresence({
        status: "online",
        activity: {
            name: `your calls for help. Say "noot noot" for bot usage.`,
            type: "LISTENING"
        } // This will translate to Listening to <name>, when the bot is online on Discord.
    });

    client.guilds.cache.forEach(guild =>{
        dbConnection.query(
            `SELECT * FROM GUILDCONFIG WHERE guildID = '${guild.id}'`
        ).then(
            result => {
                if(result[0][0] !== undefined){
                    guildCommandPrefixes.set(guild.id, [result[0][0].commandPrefix, result[0][0].triggerWordCommands]);
                }
            }
        ).catch(err => console.log(err));
    });
});


client.on('guildCreate', async (guild) =>{
    try{
        await dbConnection.query(
            `INSERT INTO GUILDS VALUES ('${guild.id}', '${guild.ownerID}')`
        );
        await dbConnection.query(
            `INSERT INTO GUILDCONFIG (guildID) VALUES ('${guild.id}')`
        );
    }
    catch(error){
        console.log("Issue with adding Server to Database: " + error);
    }
});

(async () => {
    dbConnection = await require('./database/db.js');
    await client.login(token);
})().catch(err =>{ console.log(err +" Could not get onto Database!"); client.login(token)}); // If database is offline continue but use default prefix.


// Bot Message Interpreter and Response
client.on('message', async message => {
    
    IndexMethods.ChatLog(message.content, message.author.username, message.guild, message.channel.name);

    if(message.author.bot) return; // Prevent other bots and this bot form being able to run commands. This prevents command looping!

    var prefix;

    if(message.guild === null){ // If the Inbound message is coming from a DM
        prefix = DefaultPrefix;
    }
    else{// Else the Inbound message is coming from a guild
        prefix = guildCommandPrefixes.get(message.guild.id)[0]; // Retreive the Correct Prefix based on the GuildID of the incoming message.
        if(prefix === undefined){ // if prefix is not found or is undefined use a default prefix
            prefix = DefaultPrefix;
        }
    }
    // Non-Prefix Commands (Greetings & Responses!)
   
        if(message.content.toLocaleLowerCase().includes("hello pingu") ||message.content.toLocaleLowerCase().includes("noot noot")){
            message.channel.send(IndexMethods.Emoji('667923977603121185') + " Noot Noot! Hello " + message.author.username + ", please use " + prefix + 
            "help for usage information.");
        }
        else if(message.content.toLocaleLowerCase().includes("noot")){
            message.reply(IndexMethods.Emoji('667923977603121185') + " noot!");
        }

    if(guildCommandPrefixes.get(message.guild.id)[1] === 1){ // Check if server has Trigger Words ON
        if(message.content.toLocaleLowerCase().includes("sad")){
            message.reply("https://www.youtube.com/watch?v=kGOQfLFzJj8");
        }

        if(message.content.includes('🐡')){
            message.reply("https://www.youtube.com/watch?v=ByILtrrEmwY");
        }
        
        if(message.content === '🐡🐡'){
            message.reply("https://www.youtube.com/watch?v=ckyvBBeMw5w");
        }
        
        if(message.content.includes('🐢')){
            message.reply("https://www.youtube.com/watch?v=Wl9oUBgFk6Y");
        }

        if(message.content.toLocaleLowerCase().includes("milk") || message.content.toLocaleLowerCase().includes("cat")){
            return message.channel.send("**mmm myes mmilk** ", {files: ["./images/miau.gif"]});
        }

        if(message.content.toLocaleLowerCase().includes("frog") || message.content.toLocaleLowerCase().includes("myes")){
            return message.channel.send("**mmm myes pet froge** ", {files: ["./images/tinyfroge.gif"]});
        }
    }

    
    // Prefix Commands 
    if (!message.content.startsWith(prefix)) return;

	const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    
    if(command === 'help'){
        client.commands.get('help').execute(message, args, prefix);
        IndexMethods.CommandLog('Help', message.author.username, message.guild);
    }

    if(command === "about"){
        client.commands.get('about').execute(message, args);
        IndexMethods.CommandLog('About', message.author.username, message.guild);
    }

    if(command == 'urban'){
        client.commands.get('urban').execute(message, args);
        IndexMethods.CommandLog('Urban', message.author.username, message.guild);
    }

    if (command === 'cat' || command == "kitty") {
        client.commands.get('cat').execute(message, args);
        IndexMethods.CommandLog('Cat', message.author.username);        
    }

    if (command === 'dog' || command === 'doggo' || command === 'doge') {
        client.commands.get('dog').execute(message, args);
        IndexMethods.CommandLog('Dog', message.author.username, message.guild);
    }

    if (command === 'bird' || command == 'birb') {
        client.commands.get('bird').execute(message, args);
        IndexMethods.CommandLog('Bird', message.author.username, message.guild);
    }

    if (command === 'meme') {
        client.commands.get('meme').execute(message, args);
        IndexMethods.CommandLog('Meme', message.author.username, message.guild);
    }

    if(command === 'ping'){
        IndexMethods.CommandLog('Ping', message.author.username, message.guild);
        const m = await message.channel.send("Ping?");
    m.edit(`Pingu! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms ${IndexMethods.Emoji('667923977603121185')}`);
    }

    if(command === "say") {
        IndexMethods.CommandLog('Say', message.author.username, message.guild);
        client.commands.get('say').execute(message, args);
    }

    if(command === "say_name") { //Say + chat where to say it.
        IndexMethods.CommandLog('Say_Name', message.author.username. message.guild);
        const sayMessage = args.slice(1,args.length).join(" ");
        const chatID = args[0];
        message.delete().catch(O_o=>{}); // Delete the Input Text to trigger the command. 
        try{ 
            const placeToSend = message.guild.channels.find(ch => ch.name == chatID);
            placeToSend.send(sayMessage);
        }
        catch(error){
            message.reply(`Couldn't find the desired chat name within this guild.`);
        }
    }

    if(command === "gif"){
        client.commands.get('gif').execute(message, args);
        IndexMethods.CommandLog('Gif', message.author.username, message.guild);
       
    }

    if(command === "square"){
        client.commands.get('square').execute(message, args);
        IndexMethods.CommandLog('Square', message.author.username, message.guild);
    }

    if(command === "triangle"){
        client.commands.get('triangle').execute(message, args);
        IndexMethods.CommandLog('Triangle', message.author.username, message.guild);
    }

    if(command === "pinch"){
        client.commands.get('pinch').execute(message, args);
        IndexMethods.CommandLog('Pinch', message.author.username, message.guild);
    }
    
    if(command === "roll"){
        if(args.length > 0){ // if user specifies a parameter, then it's most likely a number to roll from.
            client.commands.get('roll').execute(message,args[0], IndexMethods.Emoji('668353357127352320'));
            IndexMethods.CommandLog('Roll', message.author.username, message.guild);
        }
        else{
            client.commands.get('roll6').execute(message, IndexMethods.Emoji('668353357127352320'));
            IndexMethods.CommandLog('Roll6', message.author.username, message.guild);
        }
    }
    
    if(command === 'fibonacci' || command === 'fib'){
        client.commands.get('fibonacci').execute(message, args);
        IndexMethods.CommandLog('Fibonacci', message.author.username, message.guild);
    }

    //ADMIN AND OR BOT OWNER COMMANDS:

    if(command === 'addtodb'){
        if(message.member.id != BotAuthorID){
            return IndexMethods.BotOwner(message);
        }
        try{
            await dbConnection.query(
                `INSERT INTO GUILDS VALUES ('${message.guild.id}', '${message.guild.ownerID}')`
            );
            await dbConnection.query(
                `INSERT INTO GUILDCONFIG (guildID) VALUES ('${message.guild.id}')`
            );
            await message.reply(`This server has been successfully added to the Database!\n ADDED VALUES: GuildID: ${message.guild.id}, GuildOwnerID: ${message.guild.ownerID}`);
        }
        catch(error){
            message.reply("Issue with adding Server to Database: " + error);
        }
    }

    if(command === 'dmid'){
        if(message.member.id != BotAuthorID){
            return IndexMethods.BotOwner(message);
         }
        //First Argument Should hold the ID of the User, all proceeeding arguments are joined and are sent to the user whose ID was specified in args[0]
        client.users.resolve(args[0]).send(args.slice(1,args.length).join(" "))
        .catch(() => message.reply("Can't send DM to your user! Perhaps they don't exist?"));
        IndexMethods.CommandLog('DM by ID', message.author.username, message.guild);
    }
    

    if(command === 'dmlocal'){
        if(message.member.id != BotAuthorID){
            return IndexMethods.BotOwner(message);
         }
        // get Collection of members in channel
        let members = message.channel.members;

        // find specific member in collection - enter user's id in place of '<id number>'
        let guildMember = members.find(memID => memID.id);
        
        guildMember.send(args.slice(1,args.length).join(" "))
        .catch(() => message.reply("Couldn't send message to user!"));
        IndexMethods.CommandLog('DM Local User', message.author.username, message.guild);
    }

    if(command === "purge" && (message.member.hasPermission("ADMINISTRATOR") || message.member.id == BotAuthorID)) {
        IndexMethods.CommandLog('Purge', message.author.username, message.guild);
        const deleteCount = parseInt(args[0], 10) + 1;
        if(!deleteCount || deleteCount < 1 || deleteCount > 100)
        return message.reply("Please provide a number between 1 and 100 for the number of messages to delete");
        const fetched = await message.channel.messages.fetch({limit: deleteCount});
        message.channel.bulkDelete(fetched)
        .catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
    }

    if(command === "setprefix"){
        if((!message.member.hasPermission("ADMINISTRATOR") && message.member.id != BotAuthorID)){
            return message.reply("This Command is Reserved for Administrators or Bot Owners Only!");
        }
        if(args.length == 0){
            return message.reply("Improper usage! Please specify a valid single character to replace the current prefix: " + prefix);
        }
        if(args[0].length > 1){
           return message.reply("Invalid Prefix! Prefix must be a single valid character.");
        }
        try{
            await dbConnection.query(
                `UPDATE GUILDCONFIG SET commandPrefix = '${args[0]}' WHERE guildID = '${message.guild.id}'`
            );
            guildCommandPrefixes.set(message.guild.id, args[0]);
            await message.channel.send("Success! The Prefix for this Guild has been set to: " + args[0]);
        }
        catch(err){
            console.log(err);
            message.channel.send("Failed to set new prefix!");
        }
    }

    if(command === "triggerwords"){
        if((!message.member.hasPermission("ADMINISTRATOR") && message.member.id != BotAuthorID)){
            return message.reply("This Command is Reserved for Administrators and Bot Owner Only!");
        }
        if(args.length == 0){
            return message.reply(`Improper usage! Please specify a true or false parameter. Usage: ${prefix}triggerwords <true || false>`);
        }
        if(args[0] != "true" && args[0] != "false"){
            return message.reply("Invalid Usage. Please provide either true or false");
        }
        if(args[0] === "true") args[0] = 1;
        if(args[0] === "false") args[0] = 0;
        try{
            await dbConnection.query(
                `UPDATE GUILDCONFIG SET triggerWordCommands = ${args[0]} WHERE guildID = '${message.guild.id}'`
            );
            var guildInfo = guildCommandPrefixes.get(message.guild.id);
            guildInfo[1] = args[0];
            guildCommandPrefixes.set(message.guild.id,guildInfo);
            await message.channel.send("Success! The Trigger words for this Guild has been set to: " + args[0]);
        }
        catch(err){
            console.log(err);
            message.channel.send("Failed to set trigger words!");
        }         
    }

    if(command === "shutdown") {
        IndexMethods.CommandLog('Shutdown', message.author.username, message.guild);
        if(message.member.id != BotAuthorID){
            return IndexMethods.BotOwner(message);
        }
        await message.reply("Shutting down...");
        try{
            client.destroy();
        }
        catch(err){
            return console.log("Problem shutting down because of: " + err);
        }
    }

    if(command === 'status'){
        if(message.member.id != BotAuthorID){
            return IndexMethods.BotOwner(message);
        }
        if(args[0] === 'dnd'){
            client.user.setPresence({
                status: "dnd"
            });
            message.channel.send("noot noot busy " + IndexMethods.Emoji('667923977603121185')); 
        }
        else if(args[0] === 'idle'){
            client.user.setPresence({
                status: "idle"
            });
            message.channel.send("me do nothing " + IndexMethods.Emoji('667923977603121185')); 
        }
        else if(args[0] === 'online'){
            client.user.setPresence({
                status: "online"
            });
            message.channel.send("me online now " + IndexMethods.Emoji('667923977603121185')); 
        }
        else if(args[0] === 'invisible'){
            client.user.setPresence({
                status: "invisible"
            });
            message.channel.send("I noot in the shadows! " + IndexMethods.Emoji('667923977603121185')); 
        }
        else if(args[0] === 'activity'){
            client.user.setActivity({
                status: "invisible"
            });
            message.channel.send("I noot in the shadows! " + IndexMethods.Emoji('667923977603121185')); 
        }
        IndexMethods.CommandLog('Status: ' + args[0], message.author.username, message.guild);
    }

});

// Functions That May Be Used In Other Files:
var IndexMethods = {

    // Response for Bot Owner Only Commands.
    BotOwner: function(message){
        return message.channel.send("You're not the boss of me!", {files: ["./images/angryResponse.png"]});
    },

    Emoji: function(id){ // Used to print custom emoticons accross messages by providing the emoticon ID.
        return client.emojis.resolve(id).toString();
    },

    // Command Log helps show the bot owner what command is being used and where, this is helpful to backtrack any faulty commands that may cause errors that don't appear in the console.
    // content = command content, who = who used the command, where = the guild in which it's used in. Direct Messaging the Bot results in a null Guild.
    // No Information is saved after bot closes. 
    CommandLog: function(content, who, where){ 
        console.log(`[${IndexMethods.GetTime()}] {GUILD: ${where}} ${who} used: ${content}`);
        
    },

    ChatLog: function(content, who, where, channel){ // Displays all messages 
        console.log(`[${IndexMethods.GetTime()}] {GUILD: ${where}, CHANNEL: ${channel}} ${who} said: ${content}`);
    },

    GetTime: function(){ //get time function used in logs
        return `${new Date().toLocaleTimeString()}`;
    }
};

exports.data = IndexMethods;

client.login(token);