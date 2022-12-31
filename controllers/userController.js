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
            if(!userData) {
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

    },
    updateUser(req, res) {

    },
    deleteUser(req, res) {

    },
    addFriend(req, res) {

    },
    removeFriend(req, res) {

    }
};

module.exports = userController;