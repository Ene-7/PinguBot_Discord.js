module.exports = {
	name: 'purge',
	description: 'Delete a specified amount of messages. Messages must have been sent in the last 15 days in order to be deleted.',
	async execute(message, args) {
        const deleteCount = parseInt(args[0], 10) + 1;
        if(!deleteCount || deleteCount < 1 || deleteCount > 100)
        return message.reply("Please provide a number between 1 to 100 for the number of messages to delete");
        const fetched = await message.channel.messages.fetch({limit: deleteCount});
        message.channel.bulkDelete(fetched)
        .catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
    }
};