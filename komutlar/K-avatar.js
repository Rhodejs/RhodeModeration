const Discord = require('discord.js')

exports.run = (client, message) => {
const rhode = message.mentions.users.first() || message.author
const rhodecode = new Discord.MessageEmbed()
.setImage(rhode.avatarURL)
.setFooter(`${message.member.displayName} tarafından istendi!`, message.author.avatarURL({ dynamic: true }))
.setColor('Random')
message.channel.send(rhodecode)
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['pp'],
    permLevel: 0
  };

  exports.help = {
    name: 'avatar',
    description: 'avatar',
    usage: 'avatar'
  };