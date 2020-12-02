require('dotenv').config();
const Discord = require('discord.js');
const Client = require('./client/Client');
const bot = new Client();
bot.commands = new Discord.Collection();
const botCommands = require('./commands');
const embed = require('./static/embeds');


Object.keys(botCommands).map(key => {
    bot.commands.set(botCommands[key].name, botCommands[key]);
});

const TOKEN = process.env.TOKEN;
bot.login(TOKEN);

bot.once('reconnecting', () => {
    console.log('Reconnecting!');
});

bot.once('disconnect', () => {
    console.log('Disconnect!');
});

bot.on('ready', () => {
    console.info(`Logged in as ${bot.user.tag}!`);
});

bot.on('message', msg => {
    if (msg.content.split("")[0].toLowerCase() == ("+")) {
        const args = msg.content.split(/ +/);
        const command = msg.content.substring(1);
        console.info(`Called command: ${command}`);
        if (!bot.commands.has(command)) return;
        try {
            bot.commands.get(command).execute(msg, args);
        } catch (error) {
            console.error(error);
            msg.reply('there was an error trying to execute that command!');
        }
    }
});


