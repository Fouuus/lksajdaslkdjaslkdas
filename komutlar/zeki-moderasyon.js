const Discord = require("discord.js")

exports.run = async(client, message) => {
	
	let prefix = 's!'

	const zekibot = new Discord.RichEmbed()
        .setThumbnail(message.author.avatarURL)
        .setColor("RED")
       .setTitle(`Savaşçı TEAM - Moderasyon`)
       .setDescription(`
» **s!sa-as** Sa-As Sistemini Açar-Kapatır.
» **s!ban <@kullanıcı>** - Seçtiğiniz kullanıcıyı sunucudan yasaklar.
» **s!oylama <mesaj>** - Bir oylama yapmanızı sağlar.
» **s!slow-mode** - Kanalın yazma limiti belirlersiniz.
» **s!sunucupanel** - Sunucunuza bir kullanıcı paneli kurabilirsiniz.
» **s!snipe** - Son silinen mesajı gösterir.
» **s!sil <miktar>** - Mesajları silmenize yarar.
» **s!reklam-engel <aç-kapat>** - Sunucuda reklamları önler.
» **s!küfür-engel <aç-kapat>** - Sunucuda küfürleri önler.
» **s!emojiyükle** - Sunucuya emoji yükleyebilirsiniz.
» **s!sunucu-kur** - Güzel  bir sunucu kurmanız sağlar.
» **s!duyuru** - Mesaj duyurmanıza sağlar.
» **s!reklamtaraması** - Üyelerin oynuyor kısmın da yazdığı reklamlara bakarsınız.
» **s!sunucutanıt** - Sunucunuzu bizim destek sunucumuz da tanıtırsınız.
» **s!çekiliş** - Bir çekiliş yaparsınız.
» **s!kayıtsistemi** - Sunucuna kayıt sistemi ekleyip, daha güvenli bir sunucu kurabilirsin!`)
.addField("» Linkler", ` \n[Davet Et](https://discord.com/api/oauth2/authorize?client_id=1072407351660920923&permissions=8&scope=bot)` + "**  **" + `\n[Destek Sunucusu](https://discord.gg/Bq9yeUFCcm)`, false)
       .setFooter(`Savaşçı TEAM - Moderasyon`)
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
  name: 'moderasyon',
  description: '[Admin Komutu]',
  usage: 'moderasyon'
};