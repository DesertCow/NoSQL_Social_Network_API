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

  for (let i = 0; i < 20; i++) {

    let tempUserName = faker.internet.userName()

    users.push({
      username: tempUserName,
      email: faker.internet.email(),
    }
    );

    // Generates between 1-5 posts by this user
    for (let j = 0; j < Math.floor(Math.random() * 5); j++) {
      thoughts.push({
        thoughtText: faker.lorem.paragraph(3),
        username: tempUserName,
      })
    }
  }

  // console.table(users);
  // console.log(users)

  await User.collection.insertMany(users);
  await Thought.collection.insertMany(thoughts);

  console.table(users);
  console.table(thoughts);

  console.info('Seeding complete! 🌱');
  process.exit(0);
});