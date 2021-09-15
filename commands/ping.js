const { SlashCommandBuilder } = require('@discordjs/builders');
const { execute } = require('../events/interactionCreate');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with Pong!'),
	slash(interaction) {
		interaction.reply('Pong!');
	},
	execute(client, interaction) {
		let guild = client.guilds.cache.get(interaction.guildId);
		let channel = guild.channels.cache.get(interaction.channelId);
		channel.send("Pong!")
	}
};