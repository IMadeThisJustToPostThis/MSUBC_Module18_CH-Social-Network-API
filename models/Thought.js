const mongoose = require('mongoose');
const Reaction = require('./Reaction.js');

const thoughtSchema = new mongoose.Schema(
    {
        text: { type: String, required: true, unique: true },
        date: { type: Date, default: Date.now },
        user: { type: String, required: true },
        reactions: [Reaction]
    },
    {
        toJSON: {
            virtuals: true
        },
        id: false
    }
);

thoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});

const Thought = mongoose.model('Thought', thoughtSchema);

const handleError = (err) => console.error(err);

Thought.create(
    {
        text: 'Thought Text',
        date: Date.now,
        user: 'Mat123',
        reactions: []
    },
    (err) => (err ? handleError(err) : console.log('Created new document'))
);

module.exports = User;