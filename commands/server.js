const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('server')
		.setDescription('Replies with server info!'),
	slash(interaction) {
		interaction.reply(`Server name: ${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount}`);
	},
	execute(client, interaction) {
		let guild = client.guilds.cache.get(interaction.guildId);
		let channel = guild.channels.cache.get(interaction.channelId);
		channel.send(`Server name: ${guild.name}\nTotal members: ${guild.memberCount}`);
	}
};