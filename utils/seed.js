const connection = require('../config/connection');
const { User, Thought } = require('../models');

const { getRandomName, getRandomThought } = require('./data');


connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log(`\x1b[42m ~~~ Successful Connection to Datbase for Seeding! ~~~ \x1b[0m`);
  await Thought.deleteMany({});
  await User.deleteMany({});

  const users = [];
  // const thoughts = getRandomApplications(10);
  const thoughts = [];

  for (let i = 0; i < 20; i++) {
    const tempUserName = getRandomName();
    let tempEmail = "TEMP@gmail.com";
    const thoughts = "TEMP THOUGHT";
    const friends = "Temp LIST"

    // console.log("UserName: " + userName)

    // const first = fullName.split(' ')[0];
    // const last = fullName.split(' ')[1];

    // email = Math.floor(Math.random() * (1000 - 18 + 1) + 18) + email;
    // console.log("UserName: " + email)

    // await User.collection.insertOne({
    //   userName: tempUserName,
    //   email: tempEmail,

    users.push({
      userName: tempUserName,
      email: tempEmail,
    }
    );
  }

  console.table(users);

  await User.collection.insertMany(users);
  // await Thought.collection.insertMany(thoughts);

  // loop through the saved applications, for each application we need to generate a application response and insert the application responses
  console.log("==== USER ==== \n");
  console.table(users);
  // console.table(thoughts);

  console.info('Seeding complete! 🌱');
  process.exit(0);
});