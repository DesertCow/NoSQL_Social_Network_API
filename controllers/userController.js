const { User, Thought } = require('../models');

module.exports = {
  //* GET: all users
  getUsers(req, res) {
    User.find()
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err));
  },
  //* GET: a single user
  getSingleUser(req, res) {
    User.findOne({ _id: req.params.userId })
      .select('-__v')
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with that ID' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
  //* POST: Create a new User
  createUser(req, res) {
    User.create(req.body)
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err));
  },
  //* PUT: Update an existing User
  updateUser(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $set: req.body },
      { runValidators: true, new: true },
    )
      .then((user) =>
        !user
          ? res
            .status(404)
            .json({ message: 'No User [' + req.params.userId + '] found with that ID' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
  //* DELETE: User and remove all thoughts
  deleteUser(req, res) {
    User.findOneAndDelete({ _id: req.params.userId })
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No such User exists' + req.params.userId })
          : Thought.deleteMany(
            { _id: req.params.userId }
          )
      )
      .then((thought) =>
        !thought
          ? res.status(404).json({
            message: 'User (' + req.params.userId + ') deleted, but no Thought(s) found!',
          })
          : res.json({ message: 'User (' + req.params.userId + ') and Thought(s) successfully deleted' })
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  //* POST: Add Friend
  addFriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $addToSet: { friends: req.params.friendsId } },
      { runValidators: true, new: true }
    )
      .then((user) =>
        !user
          ? res
            .status(404)
            .json({ message: 'No User [' + req.params.userId + '] found with that ID' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
  //* DELETE: Remove Friend
  deleteFriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $pull: { friends: req.params.friendsId } },
      { new: true }
    )
      .then((user) =>
        !user
          ? res
            .status(404)
            .json({ message: 'No User [' + req.params.userId + '] found with that ID' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
};