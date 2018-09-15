const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

client.on("ready", () => {
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`);
  client.user.setActivity(` 000000111011000111100001101001000101000000  00001  00000  000000000000`);
});

client.on('message', msg => {
  if (msg.content === 'baszd') {
    msg.reply('Naa! Azért ne káromkodd ide a Dunát!');
  }
});

client.on('message', msg => {
  if (msg.content === 'kurva') {
    msg.reply('Naa! Azért ne káromkodd ide a Dunát!');
  }
});

client.on('message', msg => {
  if (msg.content === 'geci') {
    msg.reply('Naa! Azért ne káromkodd ide a Dunát!');
  }
});

client.on('message', msg => {
  if (msg.content === 'fasz') {
    msg.reply('Naa! Azért ne káromkodd ide a Dunát!');
  }
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.on("guildCreate", guild => {
  console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
  client.user.setActivity(` 000000111011000111100001101001000101000000  00001  00000  000000000000`);
});

client.on('message', msg => {
  if (msg.content.startsWith(config.prefix+'join')) {
    let [command, ...channelName] = msg.content.split("_");
    if (!msg.guild) {
      return msg.reply('no private service is available in your area at the moment. Please contact a service representative for more details.');
    }
    const voiceChannel = msg.guild.channels.find("name", channelName.join(" "));
    //console.log(voiceChannel.id);
    if (!voiceChannel || voiceChannel.type !== 'voice') {
      return msg.reply(`I couldn't find the channel ${channelName}. Can you spell?`);
    }
    voiceChannel.join()
      .then(conn => {
        msg.reply('ready!');
        // create our voice receiver
        const receiver = conn.createReceiver();

        conn.on('speaking', (user, speaking) => {
          if (speaking) {
            msg.channel.sendMessage(`I'm listening to ${user}`);
            // this creates a 16-bit signed PCM, stereo 48KHz PCM stream.
            const audioStream = receiver.createPCMStream(user);
            // create an output stream so we can dump our data in a file
            const outputStream = generateOutputFile(voiceChannel, user);
            // pipe our audio data into the file stream
            audioStream.pipe(outputStream);
            outputStream.on("data", console.log);
            // when the stream ends (the user stopped talking) tell the user
            audioStream.on('end', () => {
              msg.channel.sendMessage(`I'm no longer listening to ${user}`);
            });
          }
        });
      })
      .catch(console.log);
  }
  if(msg.content.startsWith(config.prefix+'leave')) {
    let [command, ...channelName] = msg.content.split(" ");
    let voiceChannel = msg.guild.channels.find("name", channelName.join(" "));
    voiceChannel.leave();
  }
});

client.on("guildDelete", guild => {
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
  client.user.setActivity(` 000000111011000111100001101001000101000000  00001  00000  000000000000`);
});

client.on("message", async message => {

  if(message.author.bot) return;

  if(message.content.indexOf(config.prefix) !== 0) return;

  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

if(command === "yt") {
  message.channel.send("** ${message.author} ** Nézd meg a privát üzeneteid!");
  message.author.send("asd");
}

if(command === "help") {
  message.channel.send("Parancsok:")
  message.channel.send("**/help** - Ez a panel")
  message.channel.send("**/yt** - Lekérdezheted a főbb tagok YT csatornájának linkjét.")
}
});

  client.login(config.token);
