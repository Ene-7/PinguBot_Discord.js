![version](https://img.shields.io/badge/PinguBot-v1.2.0-orange)
![node-fetch](https://img.shields.io/badge/node--fetch-%5E2.6.0-informational)
![discord.js](https://img.shields.io/badge/discord.js-%5E12.2.0-informational)
# PinguBot_Discord.js
A Discord bot made using Discord.js and Node.js. Noot noot! 🐧

# Why I made this?
Well for a long time I had been wanting to make a bot on Discord. The idea seemed fun. Bots are really cool to interact with, and for anyone stumbling on this page, I invite you to pick up any snippet from my code if it helps you build your own Discord bot! My main takeaway for this was to get to learn Node.js better and this side project proved to be a perfect intro into node. 

# What Can Pingu Bot do?
While you won't find anything extraordinary as part of this bot’s functionality, it still might feature some neat commands for those interested in making a bot of their own. Pingu bot features **20 commands** with some additional secret ones triggered by certain messages. The default prefix for the bot is `">"` and that may be altered to anything else in the config.json file. 
### Config.json file configurations:
 ```
"prefix": ">",
"token": "Enter your Bot Token here",
"BotAuthorID": "Enter Your Discord ID (Obtainable by enabling Developer Mode)",
"BotOwnerName": "Name of Bot Owner [The following tags will be used to populate the Help and About commands]",
"BotOwnerImageURL": "URL to Author's image",
"BotImageURL": "URL to Bot's image",
"FooterText": "Text on the footer of the Embeds",
"FooterURL": "A URL that can take users to the Bot's site or something related of your choice"
 ```
Replace all name/value pairs to appropriate values for the bot to function correctly! Prefix, Token, and BotAuthorID being the most crucial.
 
### Commands:
``` 
About: Information about the bot and author.
Bird: Will post an image of a bird from an API.
Cat: Will post an image of a cat from an API. (Tends to have issues, have to find a better replacement...)
DMID: Direct Message someone as the bot who shares a guild with Pingu Bot. BOT OWNER ONLY
DMLOCAL: Direct Message someone as the bot in the guild by doing @name. BOT OWNER ONLY
Dog: Will post an image of a dog from an API.
Fibonacci: Calculates the n-th Fibonacci number. This method is memoized so it want take ages to calculate. Max value is about n = 1000 JavaScript won't bother even approximating after this point. It's just infinity here on out :^)
Gif: Features some funny gifs alongside with some comments to them.
Help: Essentially what this list is, but better lol... The help command lists all commands in a MessageEmbed() in a neat organized fashion and can be navigated for certain sections including: Owner, Moderation, Fun, and API.
Meme: Will post an image of a meme from an API.
Pinch: Prints a shape out of Pinch emojis
Purge: The purge command is an almost ubiquitous command for bots. It helps delete messages in a Guild/Server in bulk. Administrators and Bot Owner ONLY.
Roll: Roll a random number. This command can take a number parameter and will use that number as it's max number to roll from. A roll with no parameter defaults to 6 as a normal six-sided die.
Say: Pingu Bot will say something for you on your behalf and also delete your request in the channel the command is executed.
Say_Name: Say something in another channel referencing it by name. 
Shutdown: Shuts down the bot. BOT OWNER ONLY
Square: Prints a Square shape based on the provided side. The one by one printing sequence is intentional, and the bot will pause for a while when doing larger sizes. This is an anti-spam measure by Discord.
Status: Change the status of the bot. (Online, Do not Disturb, Idle, Invisible) All except for invisible feature a different activity message!
Triangle: Another shape printing command behaves just like the other ones, but this one takes a string parameter (char, emoji, or word).
Urban: Searches Urban Dictionary for the definition of a word, phrase or sentence.
```
