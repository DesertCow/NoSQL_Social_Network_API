const connection = require('../config/connection');
const { faker } = require('@faker-js/faker');
const { User, Thought } = require('../models');
const { getRandomName, getRandomThought } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log(`\x1b[42m ~~~ Successful Connection to Datbase for Seeding! ~~~ \x1b[0m`);
  await Thought.deleteMany({});
  await User.deleteMany({});

  const users = [];
  const thoughts = [];

  console.log("FAKER = " + faker.internet.userName())

  for (let i = 0; i < 20; i++) {,

    users.push({
      username: faker.internet.userName(),
      email: faker.internet.email(),
    }
    );
  }

  // console.table(users);
  console.log(users)

  await User.collection.insertMany(users);
  // await Thought.collection.insertMany(thoughts);

  // loop through the saved applications, for each application we need to generate a application response and insert the application responses
  console.log("==== USER ==== \n");
  console.table(users);
  // console.table(thoughts);

  console.info('Seeding complete! 🌱');
  process.exit(0);
});