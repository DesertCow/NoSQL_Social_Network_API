const { User, Thought } = require('../models');

module.exports = {
  // Get all users
  getUsers(req, res) {
    User.find()
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err));
  },
  // Get a single user
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
  //* Create a new User
  createUser(req, res) {
    User.create(req.body)
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err));
  },
  //* Delete User and Remove thoughts
  deleteUser(req, res) {
    User.findOneAndDelete({ userName: req.params.userName })
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No such User exists' + req.params.userName })
          : Thought.deleteMany(
            { username: req.params.userName }
          )
      )
      .then((thought) =>
        !thought
          ? res.status(404).json({
            message: 'User (' + req.params.userName + ') deleted, but no Thought(s) found!',
          })
          : res.json({ message: 'User (' + req.params.userName + ') and Thought(s) successfully deleted' })
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
};