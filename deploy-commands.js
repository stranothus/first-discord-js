const fs = require('fs');
const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { clientId, guildId, token } = require('./config.json');
const { Client, Collection, Intents } = require('discord.js');

const commands = [];
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	commands.push(command.data.toJSON());
}

const rest = new REST({ version: '9' }).setToken(token);
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS] });

(async () => {
	try {
		await client.login(token);

		const guilds = client.guilds.cache.map(v => v.id);
		
		for(let i = 0; i < guilds.length; i++) {
			await rest.put(
				Routes.applicationGuildCommands(clientId, guilds[i]),
				{ body: commands },
			);
		}

		console.log('Successfully registered application commands.');
	} catch (error) {
		console.error(error);
	}
})();