const { Thought } = require('../models');

module.exports = {
  //* GET: allThoughts
  getThoughts(req, res) {
    Thought.find()
      .then((thoughts) => res.json(thoughts))
      .catch((err) => res.status(500).json(err));
  },
  //* GET: a single Thought
  getSingleThought(req, res) {
    Thought.findOne({ _id: req.params.thoughtId })
      .select('-__v')
      .then((thoughts) =>
        !thoughts
          ? res.status(404).json({ message: 'No Thoughts with that ID' })
          : res.json(thoughts)
      )
      .catch((err) => res.status(500).json(err));
  },
  //* POST: Create a new Thought
  createThought(req, res) {
    Thought.create(req.body)
      .then((thoughts) => res.json(thoughts))
      .catch((err) => res.status(500).json(err));
  },
  //* DELETE: Thoughts
  deleteThought(req, res) {
    Thought.findOneAndDelete({ _id: req.params.thoughtId })
      .then((thoughts) => res.status(200).json({ message: 'Thought ' + req.params.thoughtId + ' Deleted!' }))
      .catch((err) => res.status(500).json(err));
  },
  //* PUT: Update an existing Thought
  updateThought(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $set: req.body },
      { runValidators: true, new: true },
    )
      .then((thoughts) =>
        !thoughts
          ? res
            .status(404)
            .json({ message: 'No Thoughts [' + req.params.thoughtId + '] found with that ID' })
          : res.json(thoughts)
      )
      .catch((err) => res.status(500).json(err));
  },
  //* POST: Add reaction
  postReaction(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $addToSet: { reactions: req.body } },
      { runValidators: true, new: true }
    )
      .then((reactions) =>
        !reactions
          ? res
            .status(404)
            .json({ message: 'Reaction [' + req.params.thoughtId + '] was not found!' })
          : res.json(reactions)
      )
      .catch((err) => res.status(500).json(err));
  },
  //* DELETE: Remove reaction
  deleteReaction(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $pull: { reactions: { reactionId: req.params.reactionID } } },
      { runValidators: true, new: true }
    )
      .then((reactions) =>
        !reactions
          ? res
            .status(404)
            .json({ message: 'Reaction [' + req.params.thoughtId + '] was not found!' })
          : res.json(reactions)
      )
      .catch((err) => res.status(500).json(err));
  },
};