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
        Thought.findOne({ _id: req.params.userId }).select('-__v')
        .then((thoughtData) => {
            if(!thoughtData) {
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

    },
    updateThought(req, res) {

    },
    deleteThought(req, res) {

    },
    addReaction(req, res) {

    },
    removeReaction(req, res) {

    }
};

module.exports = thoughtController;