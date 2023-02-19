const Discord = require("discord.js")

exports.run = async(client, message) => {
	
	let prefix = 's!'
  
	const zekibot = new Discord.RichEmbed() 
  .setColor('ff56ff')
.setDescription(`
**Kayıt Sistemi**

» \`s!kayıt-rol <@rol>\`
<:online:735557803607064587> | Kayıt Olunca Verilecek Rolü Ayarlar

» \`s!kayıt-kanal <#kanal>\`
<:online:735557803607064587> | Kayıt Kanalını Ayarlar

» \`s!kayıt-sistemi <aç-kapat>\`
<:online:735557803607064587> | Kayıt Sistemini Açar,Kapatır

» \`s!kayıt\`
<:online:735557803607064587> | Sunucuda Kayıt Olursunuz`)
message.channel.send(zekibot)
};



exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
  kategori: `Geliştirici`
};

exports.help = {
  name: 'kayıtsistemi',
  description: '[Admin Komutu]',
  usage: 'kayıtsistemi'
};