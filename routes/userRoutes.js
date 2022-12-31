const router = require('express').Router();
//const controller = require('../controllers').UserController();
const controller = require('../controllers/userController.js');

router.route('/').get(controller.getUsers).post(controller.createUser);

router.route('/:userId').get(controller.getUser).put(controller.updateUser).delete(controller.deleteUser);

router.route('/:userId/friends/:friendId').post(controller.addFriend).delete(controller.removeFriend)

module.exports = router;