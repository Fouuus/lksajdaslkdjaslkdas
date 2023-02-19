const Discord = require("discord.js")

exports.run = async(client, message) => {
    
    let prefix = 's!'

    const night = new Discord.RichEmbed()
        .setThumbnail(message.author.avatarURL)
        .setColor("RED")
       .setTitle(`Savaşçı TEAM - Koruma`)
       .setDescription(`
 » **s!rol-koruma** - Bir rol oluşturulmasını önler.
 » **s!everyone-engelle** - Everyone korumasını önler.`)
        .setImage('https://hackernoon.com/hn-images/1*Ixp7ZsUIDMs3QHvgKZmsKw.gif')
       .addField("» Linkler", ` \n[Davet Et](https://discord.com/api/oauth2/authorize?client_id=1072407351660920923&permissions=8&scope=bot)` + "**  **" + `\n[Destek Sunucusu](https://discord.gg/Bq9yeUFCcm)`, false)
       .setFooter(message.author.username, message.author.avatarURL) 
    .setTimestamp()
      
  return message.channel.send(night)
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
  kategori: `Yetki Gerekmez`
};

exports.help = {
  name: 'koruma',
  description: 'Koruma Komutu',
  usage: 'koruma'
};