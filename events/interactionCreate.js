module.exports = {
	name: 'interactionCreate',
	execute(client, interaction) {
		client.commands.get(interaction.commandName).slash(interaction);
	},
};