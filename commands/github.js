const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');
const { execute } = require('../events/interactionCreate');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('github')
		.setDescription('Stranothus GitHub link'),
	async slash(interaction) {
		const row = new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setCustomId('github')
					.setLabel('Stranothus GitHub')
					.setStyle('LINK'),
            );

		const embed = new MessageEmbed()
			.setColor('#0099ff')
			.setTitle('Stranothus GitHub')
			.setURL('https://github.com/stranothus')
			.setDescription('Stranothus Studios GitHub profile!');

		await interaction.reply({ ephemeral: false, embeds: [ embed ], components: [ row ] });
	},
	async execute(client, interaction) {
		const row = new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setCustomId('github')
					.setLabel('Stranothus GitHub')
					.setStyle('LINK'),
            );

		const embed = new MessageEmbed()
			.setColor('#0099ff')
			.setTitle('Stranothus GitHub')
			.setURL('https://github.com/stranothus')
			.setDescription('Stranothus Studios GitHub profile!');

		await interaction.reply({ ephemeral: false, embeds: [ embed ], components: [ row ] });
	}
};