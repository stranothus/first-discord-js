module.exports = {
	name: 'guildMemberAdd',
	execute(client, member) {
        let channel = member.guild.channels.cache.find(channel => /welcome/i.test(channel.name));
        let user = member.user;
        channel.send(`Welcome, <@${user.id}>! Make sure to read any rules and look through any self assigned roles.`);
	},
};