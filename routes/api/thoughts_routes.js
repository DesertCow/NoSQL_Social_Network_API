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

// Thoughts/ API Routes
router.route('/').get(getThoughts).post(createThought);

router.route('/:thoughtId').get(getSingleThought).delete(deleteThought).put(updateThought);

router.route('/:thoughtId/reactions').post(postReaction)

router.route('/:thoughtId/:reactionID').delete(deleteReaction);

module.exports = router;