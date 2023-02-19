const Discord = require("discord.js")

exports.run = async(client, message) => {
	
	let prefix = 's!'

	const zekibot = new Discord.RichEmbed()
        .setThumbnail(message.author.avatarURL)
        .setColor("RED")
       .setTitle(`Savaşçı TEAM - Kullanıcı`)
       .setDescription(`
» **s!emojiler** - Sunucuda ki emojilere bakabilirsin.
» **s!kanalbilgi** - Yazı yazdığın kanalın bilgilerine bakabilirsin.
» **s!kullanıcıbilgi** - Bir kullanıcının profiline bakabilirsin.
» **s!sunucubilgi** - Sunucu bilgilerine bakabilirsin.
» **s!avatar <@etiket>** - Profil fotoğrafına bakabilirsin.`)
.addField("» Linkler", ` \n[Davet Et](https://discord.com/api/oauth2/authorize?client_id=1072407351660920923&permissions=8&scope=bot)` + "**  **" + `\n[Destek Sunucusu](https://discord.gg/Bq9yeUFCcm)`, false)
       .setFooter(`Savaşçı TEAM - Kullanıcı`)
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
  name: 'kullanıcı',
  description: 'Kullanıcı Komutu',
  usage: 'kullanıcı',
};