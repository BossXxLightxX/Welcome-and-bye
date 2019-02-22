
/*
*@file owner Thomas Weland
*@type discord.js
*@npm (nothing)


*/




bot.on('guildMemberRemove', member => {
let channel = member.guild.channels.find('name', 'channel.name');
let memberavatar = member.user.avatarURL
  if (!channel) return;
  let embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setThumbnail(memberavatar)
  .addField('Name:', `${member}`)
  .addField('Has left the server', ';(')
  .addField('Bye Bye :(', 'see you!')
  .addField('There is now', `${member.guild.memberCount}` + "people")
  .setFooter(`**${member.guild.name}`)
  .setTimestamp()

  channel.sendEmbed(embed);
});

bot.on('guildMemberRemove', member => {
console.log(`${member}` + "has left" + `${member.guild.name}` + "Sending leave message now")
console.log("Leave Message Sent")
});

