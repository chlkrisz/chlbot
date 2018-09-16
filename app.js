const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

client.on("ready", () => {
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`);
  client.user.setActivity(`BY: chlkrisz | /help`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.on("message", async message => {

  if(message.author.bot) return;

  if(message.content.indexOf(config.prefix) !== 0) return;

  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

if(command === "yt") {
  message.author.send("**SZOULO Youtube:** https://www.youtube.com/channel/UCOProuu11kDHFo9kT1paIHg");
  message.author.send("**CHLKRISZ(TheCK) Youtube:** https://www.youtube.com/channel/UCb82WRTuK2X0xllzSVrZPHQ");
}
  
  client.on('message', message => {
    // If the message is '!rip'
    if (message.content === '!rip') {
        // Create the attachment using Attachment
        const attachment = new Attachment('https://i.imgur.com/w3duR07.png');
        // Send the attachment in the message channel
        message.channel.send(attachment);
    }
});

if(command === "help") {
  message.channel.send("Parancsok:")
  message.channel.send("**/help** - Ez a panel")
  message.channel.send("**/yt** - Lekérdezheted a főbb tagok YT csatornájának linkjét.")
}
});

  client.login(config.token);
