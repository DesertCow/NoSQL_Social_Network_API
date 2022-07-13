const { Schema, model } = require('mongoose');


const reactionSchema = new mongoose.Schema({
  reactionId: {
    type: String,
    required: true
  },
  reactionBody: {
    type: String,
    required: true,
    max: 280,
  },
  username: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,

  },
});


// Define Schema For Thought Model
const thoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: true,
    min: 1,
    max: 280,
  },
  createdAt: {
    type: Date,
    default: Date.now,

  },
  username: {
    type: String,
    required: true,
  },
  reactions: reactionSchema,
},
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

postSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
});


// Initialize Thought Model
const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;