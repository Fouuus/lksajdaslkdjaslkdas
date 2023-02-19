const Discord = require("discord.js")

exports.run = async(client, message) => {
	
	let prefix = 's!'
  
	const zekibot = new Discord.RichEmbed()
        .setThumbnail(message.author.avatarURL)
        .setColor("RED")
       .setTitle(`Savaşçı TEAM - Eğlence`)
       .setDescription(`
» **s!yaz <mesaj>** - Bota istediğiniz mesajı yazdırırsınız.
» **s!sahtemesaj <@kullanıcı> <mesaj>** - Etiketlediğiniz Kullanıcıya İstediğiniz Mesajı Yazdırırsınız.
» **s!missionpassed** - Profilinize Mission Passed Efekti Verir.
» **s!havadurumu <şehir>** - Girilen Şehirin Hava Durumunu Listeler.
» **s!youtube <ara>** - YouTube'da Bir şey aratırsınız.
» **s!kralol** - Kral olursunuz.
» **s!afk <sebep>** - AFK Olursunuz.
» **s!yılbaşı** - Yılbaşı Sayaç.
» **s!token** - Botun tokenine erişebilirsin.
» **s!düello** - Biriyle 1vs1 kapışabilirsiniz.
» **s!tkm** - Taş, kağıt , makas oynarsınız.
» **s!espri** - Gülmek garanti.
» **s!banner** - Banner bir yazı yazarsınız.`)
.addField("**»Linkler**", ` \n[Davet Et](https://discord.com/api/oauth2/authorize?client_id=1072407351660920923&permissions=8&scope=bot)` + "**  **" + `\n[Destek Sunucusu](https://discord.gg/Bq9yeUFCcm)`, false)
       .setFooter(`Savaşçı TEAM - Eğlence`)
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
  name: 'eğlence',
  description: '[Admin Komutu]',
  usage: 'eğlence'
};