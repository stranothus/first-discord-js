const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('log')
		.setDescription('Logs interaction information'),
	async execute(interaction) {
        console.log(interaction);
		await interaction.reply("Interaction logged");
	},
};