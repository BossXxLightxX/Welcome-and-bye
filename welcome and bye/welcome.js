
/*
*@file owner Thomas Weland
*@type discord.js
*@npm (nothing)


*/

bot.on('guildMemberAdd', member => {
  let channel = member.guild.channels.find('name', 'channel.name');
  let memberavatar = member.user.avatarURL
      if (!channel) return;
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(memberavatar)
      .addField('Welcome', `${member}`)
      .addField(':family_mwgb: | Actually there is ', `${member.guild.memberCount} people`)
      .addField("Name", `<@` + `${member.id}` + `>`, true)
      .addField('Server', `${member.guild.name}`, true )
      .setFooter(`**${member.guild.name}**`)
      .setTimestamp()

      channel.sendEmbed(embed);
});

bot.on('guildMemberAdd', member => {

  console.log(`${member}`, "has arrived" + `${member.guild.name}`)

});

