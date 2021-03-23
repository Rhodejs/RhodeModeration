const Discord = require("discord.js");
const db = require ('quick.db')

exports.run = (client, message, args) => {
if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("Yeterli yetkin yok!")
  let user = message.mentions.users.first();

  if(!user) return message.channel.send("Kimi banlayacağını belirtmedin")
  
  message.guild.ban(user);
  
  
  message.channel.send(`${user} adlı üye sunucudan banlandı`)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0  
};

exports.help = {
  name: 'ban',
  description: 'Kişiyi banlar',
  usage: '-ban @üye'
}

