const connection = require('../config/connection.js');
const { Reaction, Thought, User } = require('../models');

console.time('seeding');

connection.once('open', async () => {
    await Reaction.deleteMany({});
    await Thought.deleteMany({});
    await User.deleteMany({});

});