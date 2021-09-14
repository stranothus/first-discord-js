module.exports = {
	name: 'interactionCreate',
	execute(client, interaction) {
		client.commands.get(interaction.commandName).execute(interaction);
		console.log(`${interaction.user.tag} in #${interaction.channel.name} triggered an interaction.`);
	},
};