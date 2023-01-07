const mongoose = require('mongoose');

const reactionSchema = new mongoose.Schema(
    {
        reactionId: {
            type: mongoose.Schema.Types.ObjectId,
            default: () => new mongoose.Types.ObjectId()
        },
        reactionBody: { type: String, required: true, maxlength: 280 },
        username: { type: String, required: true },
        createdAt: { type: Date, default: Date.now }
    },
    {
        _id: false
    }
);

const Reaction = mongoose.model('Reaction', reactionSchema);

const handleError = (err) => console.error(err);

Reaction.create(
    {
        reactionBody: 'reaction text',
        user: '63b0a676b9ff2ed2e6d17ab8',
    },
    (err) => (err ? handleError(err) : console.log('Created new document'))
);

module.exports = reactionSchema;