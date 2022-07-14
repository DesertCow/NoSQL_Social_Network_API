const { Thought } = require('../models');

module.exports = {
  //* Get all Thoughts res.json(thoughts) 
  getThoughts(req, res) {
    Thought.find()
      .then((thoughts) => res.json(thoughts))
      .catch((err) => res.status(500).json(err));
  },
  //* Get a single Thoughts
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
  //* Create a new Thought
  createThought(req, res) {
    Thought.create(req.body)
      .then((thoughts) => res.json(thoughts))
      .catch((err) => res.status(500).json(err));
  },
  //* Delete Thoughts
  deleteThought(req, res) {
    Thought.findOneAndDelete({ _id: req.params.thoughtId })
      .then((thoughts) => res.status(200).json({ message: 'Thought ' + req.params.thoughtId + ' Deleted!' }))
      .catch((err) => res.status(500).json(err));
  },
  //* Update Thoughts
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
  //* Post reaction
  postReaction(req, res) {
    console.log("POST REACTION! " + req.params.thoughtId);
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
  //* Delete reaction
  deleteReaction(req, res) {
    console.log("DELETE REACTION! " + req.params.thoughtId + " || " + req.params.reactionID);
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