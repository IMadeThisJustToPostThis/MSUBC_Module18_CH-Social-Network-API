const { Thought, User } = require('../models');

const thoughtController = {
    getThoughts(req, res) {
        Thought.find().select('-__v')
            .then((thoughtData) => {
                res.status(200).json(thoughtData);
            })
            .catch((err) => {
                console.error(err);
                res.status(500).json(err);
            });
    },
    getThought(req, res) {
        Thought.findOne({ _id: req.params.thoughtId }).select('-__v')
            .then((thoughtData) => {
                if (!thoughtData) {
                    return res.status(404).json({ message: 'Thought does not exist.' });
                }
                res.status(200).json(thoughtData);
            })
            .catch((err) => {
                console.error(err);
                res.status(500).json(err);
            });
    },
    createThought(req, res) {
        Thought.create(req.body)
            .then((thoughtData) => {
                return User.findOneAndUpdate(
                    { _id: req.body.userId },
                    { $push: { thoughts: thoughtData._id } },
                    { new: true }
                );
            })
            .then((userData) => {
                if (!userData) {
                    return res.status(404).json({ message: 'User does not exist.' });
                }
                res.status(200).json(userData);
            })
            .catch((err) => {
                console.error(err);
                res.status(500).json(err);
            });
    },
    updateThought(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $set: req.body },
            { new: true })
            .then((thoughtData) => {
                if (!thoughtData) {
                    return res.status(404).json({ message: 'Thought does not exist.' });
                }
                res.status(200).json(thoughtData);
            })
            .catch((err) => {
                console.error(err);
                res.status(500).json(err);
            });
    },
    deleteThought(req, res) {
        Thought.findOneAndRemove({ _id: req.params.thoughtId })
            .then((thoughtData) => {
                if (!thoughtData) {
                    return res.status(404).json({ message: 'Thought does not exist.' });
                }
                return User.findOneAndUpdate(
                    { thoughts: req.params.thoughtId },
                    { $pull: { thoughts: req.params.thoughtId } },
                    { new: true }
                );
            })
            .then((userData) => {
                if (!userData) {
                    return res.status(404).json({ message: 'User does not exist.' });
                }
                res.status(200).json(userData);
            })
            .catch((err) => {
                console.error(err);
                res.status(500).json(err);
            });
    },
    addReaction(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $addToSet: { reactions: req.body } },
            { new: true })
            .then((thoughtData) => {
                if (!thoughtData) {
                    return res.status(404).json({ message: 'Thought does not exist.' });
                }
                res.status(200).json(thoughtData);
            })
            .catch((err) => {
                console.error(err);
                res.status(500).json(err);
            });
    },
    removeReaction(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $pull: { reactions: { reactionId: req.params.reactionId } } },
            { new: true })
            .then((thoughtData) => {
                if (!thoughtData) {
                    return res.status(404).json({ message: 'Thought does not exist.' });
                }
                res.status(200).json(thoughtData);
            })
            .catch((err) => {
                console.error(err);
                res.status(500).json(err);
            });
    }
};

module.exports = thoughtController;