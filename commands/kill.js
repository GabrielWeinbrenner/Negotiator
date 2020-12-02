module.exports = {
    name: "kill",
    description: "Bring death upon someone in the server!",
    execute(msg, args) {
        if (msg.member.hasPermission("KICK_MEMBERS")) {
            if (msg.mentions.users.first()) {
                try {
                    var member = msg.guild.member(msg.mentions.users.first());
                    member.kick().then(()=>{
                        msg.channel.send("<@" + msg.mentions.users.first() + "> has been killed!");
                    }).catch(()=>{
                        msg.channel.send(
                            "There was an attempt to kill <@" + msg.mentions.users.first() + ">"
                        );

                    });


                } catch {
                    msg.reply("I do not have permissions to kill " + msg.mentions.users.first());
                }
            }else{
                msg.reply("You do not have permissions to kill " + msg.mentions.users.first());
            }
        }
    },
};
