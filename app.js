const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

client.on("ready", () => {
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`);
  client.user.setActivity(`Chlbot ALPHA`);
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



client.on("guildDelete", guild => {
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
  client.user.setActivity(` 000000111011000111100001101001000101000000  00001  00000  000000000000`);
});

if(command === "yt") {
  msg.reply('Nézd meg az üzeneteid!');
  message.author.send("**SZOULO Youtube:** https://www.youtube.com/channel/UCOProuu11kDHFo9kT1paIHg");
  message.author.send("**CHLKRISZ(TheCK) Youtube:** https://www.youtube.com/channel/UCb82WRTuK2X0xllzSVrZPHQ");
}

if(command === "help") {
  message.channel.send("Parancsok:")
  message.channel.send("**/help** - Ez a panel")
  message.channel.send("**/yt** - Lekérdezheted a főbb tagok YT csatornájának linkjét.")
}
});

  client.login(config.token);
