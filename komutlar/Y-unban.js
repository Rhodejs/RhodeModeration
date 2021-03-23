const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')
const db = require('quick.db')
exports.run = async(client, message, args) => {

  let Rhode = args[0]

if (!Rhode) {
  const Rhode = new Discord.MessageEmbed()
  .setDescription('Banını Açacağım Kişinin IDsini Vermelisin!')
  return message.channel.send(s)
}
  
message.guild.members.unban(Rhode);
 const Rhode = new Discord.MessageEmbed()
  .setDescription(`${Rhode} idli kişi ${message.author.tag} tarafından yasağı kaldırıldı`)
  .setAuthor(`${message.guild.name} - Developed by Rhode`, message.guild.iconURL({ dynamic: true }))
  .setFooter(`${message.member.displayName} tarafından istendi!`, message.author.avatarURL({ dynamic: true }))

  return message.channel.send(Rhode)
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 2
}
exports.help = {
  name: "unban"
}