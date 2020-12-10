const Discord = require('discord.js');
const bot = new Discord.Client();
const token = ''; //input token here
const PREFIX = '$';

const nine_dragons = '564486946651504668';
const pathofexile = '729664057619251252';
const warframe = '740955129854820452';
const genshin = '760471838807031827';

bot.on('ready', () => {
    console.log('im ready');
});


/*Role Assign */
bot.on('message', message => {
    var msg = message.content.toLowerCase();
    if (msg == '$help') {
        message.reply('available commands : poe, 9d, wf, genshin, or remove and the role ');
    }
    if (msg == '$9d') {
        message.member.roles.add(nine_dragons);
        message.reply('role assigned');
    }
    if (msg == '$poe') {
        message.member.roles.add(pathofexile);
        message.reply('role assigned');
    }
    if (msg == '$wf') {
        message.member.roles.add(warframe);
        message.reply('role assigned');
    }
    if (msg == '$genshin') {
        message.member.roles.add(genshin);
        message.reply('role assigned');
    }
    if (msg == '$remove 9d') {
        message.member.roles.remove(nine_dragons);
        message.reply('role removed');
    }
    if (msg == '$remove poe') {
        message.member.roles.remove(pathofexile);
        message.reply('role removed');
    }
    if (msg == '$remove wf') {
        message.member.roles.remove(warframe);
        message.reply('role removed');
    }
    if (msg == '$remove genshin') {
        message.member.roles.remove(genshin);
        message.reply('role removed');
    }


})

bot.login(token);
