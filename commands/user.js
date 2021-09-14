const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('user')
		.setDescription('Replies with user info!')
		.addUserOption(option =>
			option.setName('user')
				.setDescription('User tag')
				.setRequired(false)),
		async execute(interaction) {
			let user = interaction.options.getUser("user") || interaction.user;
			await interaction.reply(user.username + "#" + user.discriminator);
	},
};