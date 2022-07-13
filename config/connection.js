const mongoose = require('mongoose');

const Database_URL = "mongodb://192.168.25.10:27017/aggregateDB"
// const Database_URL = "mongodb://127.0.0.1:27017/aggregateDB"

// Wrap Mongoose around local connection to MongoDB
mongoose.connect(Database_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Export connection 
module.exports = mongoose.connection;