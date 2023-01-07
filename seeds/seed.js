const connection = require('../config/connection.js');
const { Thought, User } = require('../models');
const { getRandomUser, getRandomEmail, getRandomPost, genRandomIndex } = require('./data.js');

console.time('seeding');

connection.once('open', async () => {
    console.log('connected');
    //await Reaction.deleteMany({});
    await Thought.deleteMany({});
    await User.deleteMany({});

    const users = [];
    const thoughts = [];
    const reactions = [];

    const makeThought = (text) => {
        thoughts.push({
            text,
            
        });
    }

    for (let i = 0; i < 5; i++) {
        let usersName = getRandomUser();
        let emailAdd = `${usersName}@Gmail.com`;

        users.push({
            username: usersName,
            email: emailAdd
    });
    }

    await User.collection.insertMany(users);

    console.table(users);
    console.timeEnd('seeding');
    process.exit(0);
});