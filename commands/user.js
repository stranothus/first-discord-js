const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('user')
		.setDescription('Replies with user info!')
		.addUserOption(option =>
			option.setName('user')
				.setDescription('User tag')
				.setRequired(false)),
	slash(interaction) {
		let user = interaction.options.getUser("user") || interaction.user;
		interaction.reply(user.username + "#" + user.discriminator);
	},
	execute(client, interaction) {
		let guild = client.guilds.cache.get(interaction.guildId);
		let channel = guild.channels.cache.get(interaction.channelId);
		let userRE = new RegExp(interaction.content.replace(/^user\s*/i, "").replace(/^<@!/, "").replace(/>$/, ""), "i");
		let user = guild.members.cache.find(v => userRE.test(v.user.id) || userRE.test(v.user.username)).user || interaction.author;
		channel.send(user.username + "#" + user.discriminator);
	}
};