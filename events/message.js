const { Message } = require("discord.js");

module.exports = {
	name: 'message',
	execute(client, interaction) {
        if(interaction.content[0] === "!") {
            interaction.content = interaction.content.replace(/^!/g, "");
            let command = client.commands.get(interaction.content.split(" ")[0]);
            if(command) {
                command.execute(client, interaction);
            }
        }
	},
};