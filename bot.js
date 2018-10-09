const Discord = require('discord.js');
const client = new Discord.Client();





client.login(process.env.BOT_TOKEN);







client.on('ready',  () => {
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
  console.log('by iTz_Volcano');
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
  console.log(`Logged in as  * [ " ${client.user.username} " ] servers! [ " ${client.guilds.size} " ]`);
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
  console.log('is online')
client.user.setStatus("dnd");
});

// playing
client.on('ready', () => {

        console.log(`----------------`);
              console.log(`iTz_Volcano`);
      console.log(`Your Bot in  ${client.guilds.size} Servers `);
    console.log(`----------------`);
  client.user.setGame(` $help | $clear `,"https://twitch.tv/")


});


client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('gmail')){
        message.delete()
    return message.reply(`** لايمكنك نشر الجيمل  هنا **`)
    }
});

client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('snapchat')){
        message.delete()
    return message.reply(`** لايمكنك نشر سناب شات  هنا **`)
    }
});


client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('instagram')){
        message.delete()
    return message.reply(`** لايمكنك نشر الانستقرام هنا **`)
    }
});


client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('twitter')){
        message.delete()
    return message.reply(`** لايمكنك  نشر التويتر هنا **`)
    }
});


client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('facebook')){
        message.delete()
    return message.reply(`** لايمكنك نشر الفيس بوك هنا **`)
    }
});



client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('youtube')){
        message.delete()
    return message.reply(`** لايمكنك نشر اروابط في هذا اسرفر **`)
    }

});

client.on('message', message => {
   if (message.content === "$roll 1") {
  message.channel.sendMessage(Math.floor(Math.random() * 25));
    }
});
 
client.on('message', message => {
   if (message.content === "$roll 2") {
  message.channel.sendMessage(Math.floor(Math.random() * 50));
    }
});
 
client.on('message', message => {
   if (message.content === "$roll 3") {
  message.channel.sendMessage(Math.floor(Math.random() * 75));
    }
});
 
client.on('message', message => {
   if (message.content === "$roll 4") {
  message.channel.sendMessage(Math.floor(Math.random() * 100));
    }
});




client.on("message", message => {
    var args = message.content.substring(prefix.length).split(" ");
    if (message.content.startsWith(prefix + "clear")) {
        if(!message.channel.guild) return message.reply('**:x: اسف لكن هذا الامر للسيرفرات فقط **');         
if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**⚠  لا يوجد لديك صلاحية لمسح الشات**');
var msg;
msg = parseInt();

message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
message.channel.sendMessage("", {embed: {
title: "``تــم مسح الشات ``",
color: 0x06DF00,
footer: {
  
}
}}).then(msg => {msg.delete(3000)});
                  }


});





client.on('message', message => {
    if(message.channel.type === 'dm') {
        var guildID = '447597023063965696'; // <=============== ايدي السيرفر حقك
        if(message.content.includes('discord.gg/')) {
            var member = client.guilds.find(g => g.id === guildID).members.find(m => m.id === message.author.id);
            member.ban({ reason: 'ADS In Private.' }).catch();
        }
    }
});


 client.on('message', message => {
 if (message.content.toLowerCase() === prefix + "move all") {
     message.delete(4000)
 if(!message.channel.guild) return;
 if (!message.member.hasPermission("MOVE_MEMBERS")) return;
 if(!message.guild.member(client.user).hasPermission("MOVE_MEMBERS")) return;
if (message.member.voiceChannel == null) return;
 var author = message.member.voiceChannelID;
 var m = message.guild.members.filter(m=>m.voiceChannel)
 message.guild.members.filter(m=>m.voiceChannel).forEach(m => {
 m.setVoiceChannel(author)
 })
 message.channel.send('\`Moved All Voice Members To Your Channel\`').then(m => m.delete(4000))
 }
   });
   
   
  
 
 
 
client.on('message', message => {
    if(message.content.includes('discord.gg')){
                                            if(!message.channel.guild) return message.reply('** advertising me on DM ? :thinking:   **');
        if (!message.member.hasPermissions(['ADMINISTRATOR'])){
        message.delete()
    return message.reply(`** ممنوع النشر في السيرفر :angry: ! **`)
    }
}
});


client.on('message', message => {
    if(message.content.includes('كل خرا')){
                                            if(!message.channel.guild) return message.reply('** advertising me on DM ? :thinking:   **');
        if (!message.member.hasPermissions(['ADMINISTRATOR'])){
        message.delete()
    return message.reply(`** مَّا يَلْفِظُ مِن قَوْلٍ إِلَّا لَدَيْهِ رَقِيبٌ عَتِيدٌ :angry: ! **`)
    }
}
});

client.on('message', message => {
    if(message.content.includes('kol 5ra')){
                                            if(!message.channel.guild) return message.reply('** advertising me on DM ? :thinking:   **');
        if (!message.member.hasPermissions(['ADMINISTRATOR'])){
        message.delete()
    return message.reply(`** مَّا يَلْفِظُ مِن قَوْلٍ إِلَّا لَدَيْهِ رَقِيبٌ عَتِيدٌ  :angry: ! **`)
    }
}
});





client.on('message', message => {
    if(message.content.includes('5ra+')){
                                            if(!message.channel.guild) return message.reply('** advertising me on DM ? :thinking:   **');
        if (!message.member.hasPermissions(['ADMINISTRATOR'])){
        message.delete()
    return message.reply(`** مَّا يَلْفِظُ مِن قَوْلٍ إِلَّا لَدَيْهِ رَقِيبٌ عَتِيدٌ  :angry: ! **`)
    }
}
});

client.on('message', message => {
    if(message.content.includes('5ra')){
                                            if(!message.channel.guild) return message.reply('** advertising me on DM ? :thinking:   **');
        if (!message.member.hasPermissions(['ADMINISTRATOR'])){
        message.delete()
    return message.reply(`** مَّا يَلْفِظُ مِن قَوْلٍ إِلَّا لَدَيْهِ رَقِيبٌ عَتِيدٌ  :angry: ! **`)
    }
}
});



client.on('message', message => {
    if(message.content.includes('ابوك')){
                                            if(!message.channel.guild) return message.reply('** advertising me on DM ? :thinking:   **');
        if (!message.member.hasPermissions(['ADMINISTRATOR'])){
        message.delete()
    return message.reply(`** مَّا يَلْفِظُ مِن قَوْلٍ إِلَّا لَدَيْهِ رَقِيبٌ عَتِيدٌ  :angry: ! **`)
    }
}
});



client.on('message', message => {
     if (message.content === "$bot") {
            if(!message.channel.guild) return message.reply('** This command only for servers **');
     let embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .addField("**عدد السيرفرات الي فيها البوت:**" , client.guilds.size)
  .addField("**المستخدمين:**", client.users.size)
  .addField("**قنوات:**", client.channels.size)
  .addField('الرام المستخدم', `${(process.memoryUsage().rss / 1048576).toFixed()}MB`, true)
  .addField('``سرعة اتصال البوت`` ' , `${Date.now() - message.createdTimestamp}` + ' ms')
  .addField('مدة تشغيل البوت', timeCon(process.uptime()), true)

function timeCon(time) {
    let days = Math.floor(time % 31536000 / 86400)
    let hours = Math.floor(time % 31536000 % 86400 / 3600)
    let minutes = Math.floor(time % 31536000 % 86400 % 3600 / 60)
    let seconds = Math.round(time % 31536000 % 86400 % 3600 % 60)
    days = days > 9 ? days : '0' + days
    hours = hours > 9 ? hours : '0' + hours
    minutes = minutes > 9 ? minutes : '0' + minutes
    seconds = seconds > 9 ? seconds : '0' + seconds
    return `${days > 0 ? `${days}:` : ''}${(hours || days) > 0 ? `${hours}:` : ''}${minutes}:${seconds}`
}

message.channel.sendEmbed(embed);
    }
});




client.on('message', message => {
    if(message.content.includes('abook')){
                                            if(!message.channel.guild) return message.reply('** advertising me on DM ? :thinking:   **');
        if (!message.member.hasPermissions(['ADMINISTRATOR'])){
        message.delete()
    return message.reply(`** مَّا يَلْفِظُ مِن قَوْلٍ إِلَّا لَدَيْهِ رَقِيبٌ عَتِيدٌ  :angry: ! **`)
    }
}
});
 
 
 
 
client.on('message', message => {

    if (message.content === "$mc") {
                        if(!message.channel.guild) return message.reply(' هذا الامر فقط للسيرفرات !!');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' ليس لديك صلاحيات');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: false

           }).then(() => {
               message.reply("تم تقفيل الشات ✅ ")
           });
             }
if (message.content === "$umc") {
    if(!message.channel.guild) return message.reply(' هذا الامر فقط للسيرفرات !!');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('ليس لديك صلاحيات');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: true

           }).then(() => {
               message.reply("تم فتح الشات✅")
           });
             }



});
 
 
 
 client.on('message', message => {
if (message.content.split(' ')[0] == '$bc')
 message.guild.members.forEach( member => {
         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
member.send( `${member} ! ` + "**" + message.guild.name + " : ** " + message.content.substr(3));
                                                            message.delete();
});
});
 
 
 
 
 

 
 

client.on('message', message => {
if (message.content.startsWith('$info')) {
let oi = message.mentions.users.first() ? message.mentions.users.first().id : message.author.id ; 
  let img = message.mentions.users.first() ? message.mentions.users.first().username : message.author.username;
  let imagemm = message.mentions.users.first() ? message.mentions.users.first().avatarURL : message.author.avatarURL
  message.guild.fetchInvites().then(invs => {
    let member = client.guilds.get(message.guild.id).members.get(oi);
    let personalInvites = invs.filter(i => i.inviter.id === oi);
    let urll = invs.filter(i => i.inviter.id === oi);
    let link = urll.reduce((p , v) => v.url +` , Total de membros recrutados no convite: ${v.uses}.\n`+ p, `\nServidor: ${message.guild.name} \n `);
    let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
   let exec = personalInvites.reduce((p, v) => v.inviter);
 let possibleInvites = [['Total de membros recrutados:']];
possibleInvites.push([inviteCount, exec]);
        let user = message.mentions.users.first() || message.author;
        let mem = message.guild.member(user);
        let millisJoined = new Date().getTime() - mem.joinedAt.getTime();
        let daysJoined = millisJoined / 1000 / 60 / 60 / 24;
const alpha = new Discord.RichEmbed()
.setAuthor(img)
.addField('🏆 Invite Infos',  `\n\n► لقد قمت بدعوة ما مجموعه \`\`${Number(inviteCount)}\`\` عضو.\n\n► لقد انضممت لسرفر مند\`${daysJoined.toFixed(0)}\`يوم .\n\n► لقد انضممت بهذه الدعوة\`${exec}\``,true)
.setThumbnail(imagemm)
.setColor(0x4959e9);
message.channel.send(alpha);

});

};
  });


  
  
  
  
 



  
client.on('message', msg => {
  if (msg.content === '5ra') {
   msg.delete(30)
    msg.reply('مَّا يَلْفِظُ مِن قَوْلٍ إِلَّا لَدَيْهِ رَقِيبٌ عَتِيدٌ');
  }
});



client.on('message', msg => {
  if (msg.content === 'kol 5ra') {
   msg.delete(30)
    msg.reply('مَّا يَلْفِظُ مِن قَوْلٍ إِلَّا لَدَيْهِ رَقِيبٌ عَتِيدٌ');
  }
});



client.on('message', msg => {
  if (msg.content === 'fuck') {
   msg.delete(30)
    msg.reply('مَّا يَلْفِظُ مِن قَوْلٍ إِلَّا لَدَيْهِ رَقِيبٌ عَتِيدٌ');
  }
});



client.on('message', msg => {
  if (msg.content === 'wtf') {
   msg.delete(30)
    msg.reply('مَّا يَلْفِظُ مِن قَوْلٍ إِلَّا لَدَيْهِ رَقِيبٌ عَتِيدٌ');
  }
});


client.on('message', msg => {
  if (msg.content === 'shit') {
   msg.delete(30)
    msg.reply('مَّا يَلْفِظُ مِن قَوْلٍ إِلَّا لَدَيْهِ رَقِيبٌ عَتِيدٌ');
  }
});


client.on('message', msg => {
  if (msg.content === 'discord.gg') {
   msg.delete(30)
    msg.reply('ممنوع');
  }
});
   
 
client.on('message', message => {
    if (message.content === prefix + "time") {
        var currentTime = new Date(),
            السنة = currentTime.getFullYear(),
            الشهر = currentTime.getMonth() + 1,
            اليوم = currentTime.getDate();
        message.channel.sendMessage( "التاريخ : " + اليوم + "-" + الشهر + "-" +السنة)
    }
}); 
 
 
 
const adminprefix = "$";
const devs = ['482798942447206400','335594469841829888'];
client.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!devs.includes(message.author.id)) return;
    
if (message.content.startsWith(adminprefix + 'setgame')) {
  client.user.setGame(argresult);
    message.channel.sendMessage(`**${argresult} تم تغيير بلاينق البوت إلى **`)
} else 
  if (message.content.startsWith(adminprefix + 'setname')) {
client.user.setUsername(argresult).then
    message.channel.sendMessage(`**${argresult}** : تم تغيير أسم البوت إلى`)
return message.reply("**لا يمكنك تغيير الاسم يجب عليك الانتظآر لمدة ساعتين . **");
} else
  if (message.content.startsWith(adminprefix + 'setavatar')) {
client.user.setAvatar(argresult);
  message.channel.sendMessage(`**${argresult}** : تم تغير صورة البوت`);
      } else     
if (message.content.startsWith(adminprefix + 'setT')) {
  client.user.setGame(argresult, "https://www.twitch.tv/idk");
    message.channel.sendMessage(`**تم تغيير تويتش البوت إلى  ${argresult}**`)
}
});


 
   
   
   
   
client.on('message', message => {
              if (!message.channel.guild) return;
      if(message.content =='$member')
      var IzRo = new Discord.RichEmbed()
      .setThumbnail(message.author.avatarURL)
      .setFooter(message.author.username, message.author.avatarURL)
      .setTitle('🌷| Members info')
      .addBlankField(true)
      .addField('📗| Online',
      `${message.guild.members.filter(m=>m.presence.status == 'online').size}`)
      .addField('📕| DND',`${message.guild.members.filter(m=>m.presence.status == 'dnd').size}`)
      .addField('📙| Idle',`${message.guild.members.filter(m=>m.presence.status == 'idle').size}`)
      .addField('📓| Offline',`${message.guild.members.filter(m=>m.presence.status == 'offline').size}`)
      .addField('➡| Server Members',`${message.guild.memberCount}`)
      message.author.send(IzRo);



    });

   
   

client.on('guildMemberAdd', member => {
    const botCount = member.guild.members.filter(m=>m.user.bot).size
    const memberCount = [member.guild.memberCount] - [botCount]
    client.channels.get('498874580559986699').setName(`⟫『 ${memberCount} عدد الاعضاء 』⟪`);
    client.channels.get('498874594640396289').setName(`⟫『 ${botCount} عدد البوتات 』⟪`);
});

client.on('guildMemberRemove', member => {
    const botCount = member.guild.members.filter(m=>m.user.bot).size
    const memberCount = [member.guild.memberCount] - [botCount]
    client.channels.get('498874580559986699').setName(`⟫『 ${memberCount} عدد الاعضاء 』⟪`);
    client.channels.get('498874594640396289').setName(`⟫『 ${botCount} عدد البوتات 』⟪`);
});

client.on ("guildMemberAdd", member => {
  
   var role = member.guild.roles.find ("name", "Legend");
   member.addRole (role);
  
})

client.on ("guildMemberRemove", member => {
   
})

client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {      const embed = new Discord.RichEmbed()
        .setColor('RANDOM')
  return channel.send(`*==========================ب العربية===========================
1- commands يمنع استعمال البوتات الا بروم 
2- احترام جميع الاعضاء :white_check_mark: 
3- ممنوع النشر بالخاص :no_entry_sign: 
4-عدم التفوه بالكلام الغير لائق مثل السب والشتم في الرومات الصوتيه + الكتابيه :no_entry_sign: 
5- يمنع السبام :no_entry_sign: 
6- عدم الازعاج :no_entry_sign: 
7- أي واحد يسب او يخالف القانون بدون انذا رح ياخذ ميوت :no_entry_sign: 
8- ممنوع الخروج والدخول للسيرفر لعدم الازعاج :no_entry_sign: 
9- ممنوع النشر , او توزيع اي شي :no_entry_sign: 
10- ممنوع طلب الرتب :no_entry_sign:*

[ ${member} ]  مرحبا  **﹞`)
message.channel.send({embed})

}).catch(console.error)
})


client.on("guildMemberAdd", function(member) {
    const wc = member.guild.channels.find("name", "⇜👋hello👋⇝")
        const embed = new Discord.RichEmbed()
        .setColor('B90C0C')
        .setAuthor(member.user.tag, member.user.avatarURL)
 .setDescription('***اهلا بك في السيرفر***')
.setThumbnail(member.avatarURL)
  .setImage('https://cdn.discordapp.com/attachments/498856391277019156/498868072023719946/The_Legend.png')
        .setTimestamp()
        return wc.sendEmbed(embed);
        
});



client.on("message", message => {
 if (message.content === "$help") {
        message.react("😘")
           message.react("😵")
  const embed = new Discord.RichEmbed() 
      .setColor("#ffff00")
      .setThumbnail(message.author.avatarURL)
      .setDescription(`
-🚀 سرعه اتصال ممتازه
-😎 سهل الاستخدام 


● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ● 

💎『اوامر عامة』💎


💎$help


💎$bot


💎$member


💎$time


💎$info


● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ● 

👑『اوامر ادارية』👑


👑$clear


👑$move all


👑$mc لتقفيل الشات


👑$umc ل فتح الشات


👑$bc


● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ● 

🎲『القرعة』🎲


🎲$roll 1   『القرعة من 1 الى 25』


🎲$roll 2   『القرعة من 1 الى 50』


🎲$roll 3   『القرعة من 1 الى 75』


🎲$roll 4   『القرعة من 1 الى 100』


● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ● 

News : : Welcome

News : : !setgame And !setavatar And !setname To Change The Bot Name And Playing And Avatar

● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ● 


`)

message.author.sendEmbed(embed)

}
});


   
   
   
var prefix = '$'
