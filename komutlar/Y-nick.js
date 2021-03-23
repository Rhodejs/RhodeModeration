  
const Discord = require('discord.js');
const db = require('quick.db');
exports.run = async (client, message, args) => {
  
 if(!message.member.roles.cache.has('YetkiliROlİd')) return message.channel.send('**Bu komutu kullanabilmek için \`Yetkili\` yetkisine sahip olmasınız.**')

  let member = message.mentions.members.first();
  let isim = args[1]
  let yaş = args[2]
 
  if (!member) return message.channel.send("Bir Kullanıcı Etiketle");
  if (!isim) return message.channel.send("Bir İsim Girmelisin!");
  if(!yaş) return message.channel.send("Yaş Girmelısın.")

  
  db.add(`nick_${message.author.id}`,1)
  member.setNickname(`${isim} • ${yaş}`);
  
    
  
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}
exports.help = {
  name: 'nick',
}