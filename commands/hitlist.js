module.exports = {
    name: "hitlist",
    description: "Add role!",
    execute(msg, args) {
        let role = msg.guild.roles.cache.find((r) => r.name === "Hit-listed");
        console.log(args);
        if(args[1] == "add"){
            if (msg.member.hasPermission("MANAGE_ROLES")) {
                try {
                    console.log(role);
                    var member = msg.guild.member(msg.mentions.users.first());

                    member.roles.add(role);
                    msg.channel.send("<@" + msg.mentions.users.first() + "> has been hitlisted!");
                } catch (err) {
                    console.log(err);
                }
            }
        }else{
            // console.log(role);
            // console.log(role.members);
            // console.log(role.members.array());
            // console.log(role.members.array()[0]);
            role.members.array().map(m=>console.log(m));
        }


    },
};
