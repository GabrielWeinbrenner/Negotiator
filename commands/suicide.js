module.exports = {
    name: "suicide",
    description: "Bring death upon yourself!",
    execute(msg, args) {
        msg.channel.send("<@" + msg.author.id + "> has killed themself!");

        var member = msg.guild.member(msg.author);
        member.kick();

        
    },
};
