const Discord = require("discord.js")
const ayarlar = require("../ayarlar.json");

module.exports.run = async (client, message, args) => {
  const voiceChannels = message.guild.channels.cache.filter(c => c.type === 'voice');
    var tagli = message.guild.members.cache.filter(member => member.user.username.includes((ayarlar.tag))).size
    let rhodesesli = 0;
    for (const [id, voiceChannel] of voiceChannels) rhodesesli += voiceChannel.members.size;
      const yineyangınlaryineben = client.emojis.cache.find(emoji => emoji.id === "emoji id")
  const rhode = new Discord.MessageEmbed()
  .setColor("RANDOM")
        .setDescription(`\`•\`Seste toplam **${rhodesesli}** kullanıcı var. \n \`•\`Toplam **${tagli}** kişi tagımıza sahip. \n \`•\`Sunucumuzda toplam **${message.guild.memberCount}** üye var. \n \`•\`Sunucumuza **${message.guild.premiumSubscriptionCount}** takviye yapılmış. \n \`•\`Sunucumuzda toplam **${message.guild.members.cache.filter(m => m.presence.status !== "offline").size}** çevrimiçi üye var.`)
 
  message.channel.send(rhode)
  message.react(yineyangınlaryineben)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["info"],
  permLevel: 0
};
exports.help = {
  name: 'say',
  description: '',
  usage: 'say'
}; 