const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

client.on("ready", () => {
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`);
  client.user.setActivity(`Coded by chlkrisz`);
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
