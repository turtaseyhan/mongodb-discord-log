const Discord = require('discord.js');
const { Mongoose } = require('mongoose');
const client = new Discord.Client();
const logSchema = require('./mongo-test')
const { token } = require('./config.json')
const mongo = require('./mongo')
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.on('ready', async () => {
  console.log('Bot başlatıldı')

  await mongo().then((mongoose) => {
    try {
      console.log('Veritabanı bağlantısı kuruldu!', 'Sebep : Başlatılma')
    }
    finally {
      mongoose.connection.close()
    }
  })
})

client.on('message', async (msg) => {
  if ( message.channel.name ==! 'logs' | 'log' | 'mod-log') {
    await mongo().then(async (mongoose) => {
      try {
        console.log('Veritabanı bağlantısı kuruldu!', ' | Sebep : Mesaj Log | ')
        await new logSchema({
          kID: msg.author,
          kanalId: msg.channel.id,
          mesajID: msg.id,
          mesaj: msg.content
        }).save()

      }
      finally {
        mongoose.connection.close()
      }
    })
  }
})

client.on('channelUpdate', (oldc, newc) => {

})

client.login(token);