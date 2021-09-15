const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('log')
		.setDescription('Logs interaction information'),
		slash(interaction) {
			console.log(interaction);
			interaction.reply("Interaction logged");
		},
		execute(client, interaction) {
			console.log(interaction);
			let guild = client.guilds.cache.get(interaction.guildId);
			let channel = guild.channels.cache.get(interaction.channelId);
			channel.send("Interaction logged");
		},
	};