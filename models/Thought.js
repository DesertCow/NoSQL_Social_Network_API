const { Schema, model, Types } = require('mongoose');
const moment = require('moment');


// Get Method: formatTimeStamp
function formatTimeStamp(timestamp) {

  timestamp = moment().format('h:mm:ss a on MMMM Do YYYY');

  return timestamp;

}

// Define Schema For Reactions
const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
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
      get: formatTimeStamp,
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
    get: formatTimeStamp,
  },
  username: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
  },
  reactions: [reactionSchema],
},
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

thoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length
});

// Initialize Thought Model
const Thought = model('thought', thoughtSchema);

module.exports = Thought;
