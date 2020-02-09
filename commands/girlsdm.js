const randomPuppy = require('random-puppy');
const discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

    let reddit = [
        "prettyaltgirls",
        "PrettyGirls",
    ]

    let subreddit = reddit[Math.floor(Math.random() * reddit.length)];

    randomPuppy(subreddit).then(async url => {
            await message.channel.send("Hmm should I send you it?")
            await message.author.send({
                files: [{
                    attachment: url,
                    name: 'girls.png'
                }]
            })
    }).catch(err => console.error(err));
};

module.exports.help = {
    name: 'girlsdm',
    aliases: ['girlsdm']
}