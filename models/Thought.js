const { Schema, model } = require('mongoose');


const reactionSchema = new Schema(
  {
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
  userId: {
    type: String,
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

thoughtSchema.virtual('reactionCount').get(function () {
  //TODO: Fix ME! TEMP WORKAROUND
  // return this.reactions.length();
  return Math.floor(Math.random() * 150);
});

// thoughtSchema.virtual('userId').get(function () {

//   return this.userId;
//   // return "NULL";
// });


// Initialize Thought Model
const Thought = model('thought', thoughtSchema);

module.exports = Thought;
