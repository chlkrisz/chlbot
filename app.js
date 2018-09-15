const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

client.on("ready", () => {
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`);
  client.user.setActivity(`kecske`);
});

client.on("guildCreate", guild => {
  console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
  client.user.setActivity(`CS:GO`);
});

client.on("guildDelete", guild => {
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
  client.user.setActivity(`CS:GO`);
});

client.on("message", async message => {

  if(message.author.bot) return;

  if(message.content.indexOf(config.prefix) !== 0) return;

  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

if(command === "yt") {
  message.channel.send("**Hibás használat!** Helyes használat: /yt <név> **PÉLDÁUL** /yt chlkrisz");
}
if(command === "yt szoulohun") {
  message.channel.send("**Szoulo YT:** https://www.youtube.com/channel/UCOProuu11kDHFo9kT1paIHg");
}
if(command === "yt chlkrisz") {
  message.channel.send("**Chlkrisz YT:** https://www.youtube.com/channel/UCb82WRTuK2X0xllzSVrZPHQ")  
}
if(command === "help") {
  message.channel.send("Parancsok:")
  message.channel.send("**/help** - Ez a panel")
  message.channel.send("**/yt** - Lekérdezheted a főbb tagok YT csatornájának linkjét.")
}
});

  client.login(config.token);
