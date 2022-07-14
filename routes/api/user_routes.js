const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  deleteUser,
  addFriend,
  deleteFriend,
} = require('../../controllers/userController');

// /api/users
// router.route('/').get(getUsers).post(createUser);
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId
router.route('/:userId').get(getSingleUser).delete(deleteUser);
// router.route('/Name/:userName').delete(deleteUser);

// /api/user/:userId/friends/:friendId
router.route('/:userId/friends/:friendsId').post(addFriend).delete(deleteFriend);

module.exports = router;