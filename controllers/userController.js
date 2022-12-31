const { Thought, User } = require('../models');

const userController = {
    getUsers(req, res) {
        User.find().select('-__v')
            .then((userData) => {
                res.status(200).json(userData);
            })
            .catch((err) => {
                console.error(err);
                res.status(500).json(err);
            });
    },
    getUser(req, res) {
        User.findOne({ _id: req.params.userId }).select('-__v')
            .populate('friends').populate('thoughts')
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
    createUser(req, res) {
        User.create(req.body)
            .then((userData) => {
                res.status(200).json(userData);
            })
            .catch((err) => {
                console.error(err);
                res.status(500).json(err);
            });
    },
    updateUser(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $set: req.body },
            { new: true })
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
    deleteUser(req, res) {
        User.findOneAndDelete({ _id: req.params.userId })
            .then((userData) => {
                if (!userData) {
                    return res.status(404).json({ message: 'User does not exist.' });
                }
                Thought.deleteMany({ _id: { $in: userData.thoughts } });
                res.status(200).json(userData);
            })
            .catch((err) => {
                console.error(err);
                res.status(500).json(err);
            })
    },
    addFriend(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $addToSet: { friends: req.params.friendId } },
            { new: true })
            .then((userData) => {
                if (!userData) {
                    return res.status(404).json({ message: 'User does not exist.' });
                }
                res.status(200).json(userData);
            })
            .catch((err) => {
                console.error(err);
                res.status(500).json(err);
            })
    },
    removeFriend(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $pull: { friends: req.params.friendId } },
            { new: true })
            .then((userData) => {
                if (!userData) {
                    return res.status(404).json({ message: 'User does not exist.' });
                }
                res.status(200).json(userData);
            })
            .catch((err) => {
                console.error(err);
                res.status(500).json(err);
            })
    }
};

module.exports = userController;