const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  deleteUser,
  addFriend,
  deleteFriend,
  updateUser,
} = require('../../controllers/userController');

// users/ API Routes
router.route('/').get(getUsers).post(createUser);

router.route('/:userId').get(getSingleUser).delete(deleteUser).put(updateUser);

router.route('/:userId/friends/:friendsId').post(addFriend).delete(deleteFriend);

module.exports = router;