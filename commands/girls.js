const randomPuppy = require('random-puppy');

module.exports.run = async (bot, message, args) => {

    let reddit = [
        "prettyaltgirls",
        "PrettyGirls",
    ]

    let subreddit = reddit[Math.floor(Math.random() * reddit.length)];

    randomPuppy(subreddit).then(async url => {
            await message.channel.send({
                files: [{
                    attachment: url,
                    name: 'girls.png'
                }]
            }).then(() => message.channel.stopTyping());
    }).catch(err => console.error(err));
};

module.exports.help = {
    name: 'girls',
    aliases: ['girls']
}