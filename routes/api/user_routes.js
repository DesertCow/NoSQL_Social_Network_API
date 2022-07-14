const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  deleteUser,
} = require('../../controllers/userController');

// /api/users
// router.route('/').get(getUsers).post(createUser);
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId
router.route('/ID/:userId').get(getSingleUser);
router.route('/Name/:userName').delete(deleteUser);

module.exports = router;