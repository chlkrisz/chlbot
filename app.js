const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

client.on("ready", () => {
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`);
  client.user.setStatus('away');
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.on('message', msg => {
  if (msg.content === 'fasz') {
    msg.reply('ne káromkodjál!');
    msg.remove();
  }
});

client.on("message", async message => {

  if(message.author.bot) return;

  if(message.content.indexOf(config.prefix) !== 0) return;

  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

if(command === "yt") {
  message.author.send("**---**")
  message.channel.send(":white_check_mark: Üzenet elküldve.")
  message.author.send("**SZOULO Youtube:** https://www.youtube.com/channel/UCOProuu11kDHFo9kT1paIHg");
  message.author.send("**CHLKRISZ(TheCK) Youtube:** https://www.youtube.com/channel/UCb82WRTuK2X0xllzSVrZPHQ");
  message.author.send("**---**")
}

if(command === "creator") {
  message.channel.send(":white_check_mark: Üzenet elküldve.")
  message.author.send("**---**")
  message.author.send("**Készítő** Chlkrisz")
  message.author.send("**DISCORD** @Chlkrisz#1820");
  message.author.send("**Youtube** https://www.youtube.com/channel/UCb82WRTuK2X0xllzSVrZPHQ");
  message.author.send("**---**")
}


if(command === "help") {
  message.channel.send("Parancsok:")
  message.channel.send("**/help** - Ez a panel")
  message.channel.send("**/yt** - Lekérdezheted a főbb tagok YT csatornájának linkjét.")
  message.channel.send("**/creator** - Lekérdezheted a készítő nevét.")
}
});

  client.login(config.token);
