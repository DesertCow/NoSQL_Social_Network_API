const connection = require('../config/connection');
const { faker } = require('@faker-js/faker');
const { User, Thought } = require('../models');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log(`💡     Database Connection:  \x1b[42mOnline\x1b[0m     💡`);
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

  // console.table(users);
  // console.table(thoughts);

  console.info('🌱           Seeding: \x1b[42mComplete\x1b[0m          🌱\n\n');
  process.exit(0);
});