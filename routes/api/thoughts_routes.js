const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  deleteThought,
} = require('../../controllers/thoughtsController');

// /api/thoughts
// router.route('/').get(getUsers).post(createUser);
router.route('/').get(getThoughts).post(createThought);

// /api/thoughts/:userId
router.route('/:thoughtId').get(getSingleThought).delete(deleteThought);

module.exports = router;