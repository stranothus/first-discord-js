const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data : new SlashCommandBuilder()
	.setName('echo')
	.setDescription('Replies with your input!')
	.addStringOption(option =>
		option.setName('input')
			.setDescription('The input to echo back')
			.setRequired(true)),
    slash(interaction) {
        interaction.reply(interaction.options.getString("input"));
    },
	execute(client, interaction) {
		let guild = client.guilds.cache.get(interaction.guildId);
		let channel = guild.channels.cache.get(interaction.channelId);
		channel.send(interaction.content.replace(/^echo\s*/i, ""));
	}
};