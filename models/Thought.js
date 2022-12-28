const mongoose = require('mongoose');
const Reaction = require('./Reaction.js');

const thoughtSchema = new mongoose.Schema({
    text: { type: String, required: true, unique: true },
    date: { type: Date, default: Date.now},
    user: { type: String, required: true},
    reactions: [Reaction]
});

const Thought = mongoose.model('User', thoughtSchema);

const handleError = (err) => console.error(err);

Thought.create(
    {
        username: 'Mat123',
        email: 'mat@gmail.com',
        thoughts: 0,
        friends: 0
    },
    (err) => (err ? handleError(err) : console.log('Created new document'))
);

module.exports = User;