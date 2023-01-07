const router = require('express').Router();
const controller = require('../controllers/thoughtController.js');

router.route('/').get(controller.getThoughts).post(controller.createThought);

router.route('/:thoughtId').get(controller.getThought).put(controller.updateThought).delete(controller.deleteThought);

router.route('/:thoughtId/reactions').post(controller.addReaction);

router.route('/:thoughtId/reactions/:reactionId').delete(controller.removeReaction);

module.exports = router;