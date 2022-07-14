
require('dotenv').config();

const { config } = require('dotenv');
const mongoose = require('mongoose');

console.log("\n\n\n              \x1b[35m DATABASE_URL \x1b[0m");
console.log("\x1b[33m" + process.env.DATABASE_URL + "\x1b[0m\n");

//* Setup Connection to Database
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


module.exports = mongoose.connection;