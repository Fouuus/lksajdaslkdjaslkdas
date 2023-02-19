const Discord = require("discord.js")

exports.run = async(client, message) => {
    
    let prefix = 's!'

    const zeki = new Discord.RichEmbed()
        .setThumbnail(message.author.avatarURL)
        .setColor("RED")
       .setTitle(`Savaşçı TEAM - Yardım Listesi`)
       .setDescription(`
 » **s!yardım** - Botun Tüm Listelenmiş Komut Kategorisini Listeler.
 » **s!kullanıcı** - Tüm Listelenmiş Kullanıcı Kategorisi.
 » **s!moderasyon** - Moderasyon Komutlarını Listeler.
 » **s!bot** - Botun Kendine Ait Komutlarını Listeler.
 » **s!eğlence** - Tüm Eğlence Komutlarını Listeler.
 » **s!koruma** - Tüm Koruma Komutlarını Listeler.

           ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
 ➦ <a:altinkant:752988788736917595> Savaşçı TEAM | s!yardım

   🎁・Bize destek vermek, katkıda bulunmak için **s!öneri <öneriniz>** komudunu kullan!`)
        .setImage('')
       .addField("» Bağlantılarım", `
<a:yuklen:762587983055814667> [Davet Et!](https://discord.com/api/oauth2/authorize?client_id=1072407351660920923&permissions=8&scope=bot)
<a:yuklen:762587983055814667> [Destek Sunucum!](https://discord.gg/Bq9yeUFCcm)`, false)
       .setFooter(message.author.username, message.author.avatarURL) 
    .setTimestamp()
      
  return message.channel.send(zeki) 
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
  kategori: `Yetki Gerekmez`
};

exports.help = {
  name: 'yardım',
  description: 'Yardım Komutu',
  usage: 'yardım'
};