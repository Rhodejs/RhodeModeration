const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');

const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {
  console.log(`Komutlar Yüklendi.`);
  console.log(`(${client.user.username}) Bot Hazır`);
  client.user.setPresence({ activity: { name: "Rhode ❤️ Akano" }, status: "dnd" });
    console.log(`Aktif`);

};



