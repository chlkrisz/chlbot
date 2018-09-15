const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

client.on("ready", () => {
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`);
  client.user.setActivity(`/help`);
});

client.on("guildCreate", guild => {
  console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
  client.user.setActivity(`Serving ${client.guilds.size} servers`);
});

client.on("guildDelete", guild => {
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
  client.user.setActivity(`Serving ${client.guilds.size} servers`);
});

function altgen() {
  var rand = ['user:155',
  'asgasg:123',
  '15132:sfasf'];

  return rand[Math.floor(Math.random()*rand.length)];
}

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
});

  client.login(config.token);
