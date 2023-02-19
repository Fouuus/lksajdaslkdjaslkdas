const Discord = require("discord.js")

exports.run = async(client, message) => {
	
	let prefix = 's!!'

	const zekibot = new Discord.RichEmbed()
        .setThumbnail(message.author.avatarURL)
        .setColor("RED")
       .setTitle(`Savaşçı TEAM - Bot`)
       .setDescription(`
» **z!davet** - Botu ekleyerek, destek çıkabilirsin.`)
       .addField("» Linkler", ` \n[Davet Et](https://discord.com/api/oauth2/authorize?client_id=1072407351660920923&permissions=8&scope=bot)` + "**  **" + `\n[Destek Sunucusu](https://discord.gg/26VvdZj)`, false)
       .setFooter(`Zeki Bot - Bot`)
  return message.channel.send(zekibot)
}



exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
  kategori: `Geliştirici`
};

exports.help = {
  name: 'bot',
  description: '[Admin Komutu]',
  usage: 'bot'
};