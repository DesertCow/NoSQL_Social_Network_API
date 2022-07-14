const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  deleteThought,
  postReaction,
  deleteReaction,
  updateThought,
} = require('../../controllers/thoughtsController');

// /api/thoughts
// router.route('/').get(getUsers).post(createUser);
router.route('/').get(getThoughts).post(createThought);

// /api/thoughts/:userId
router.route('/:thoughtId').get(getSingleThought).delete(deleteThought).put(updateThought);

router.route('/:thoughtId/reactions').post(postReaction).delete(deleteReaction);

module.exports = router;