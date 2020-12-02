module.exports = {
    name: "kill",
    description: "Bring death upon someone in the server!",
    execute(msg, args) {
        if (msg.member.hasPermission("KICK_MEMBERS")) {
            if (msg.mentions.users.first()) {
                try {
                    msg.channel.send("<@" + msg.mentions.users.first() + "> has been killed!");
                    var member = msg.guild.member(msg.mentions.users.first());
                    member.kick();
                } catch {
                    msg.reply("I do not have permissions to kill " + msg.mentions.users.first());
                }
            }else{
                msg.reply("You do not have permissions to kill " + msg.mentions.users.first());
            }
        }
    },
};
