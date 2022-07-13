const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');


const PORT = process.env.API_PORT || 3001;
const app = express();


const cwd = process.cwd();
// Note: not necessary for the Express server to function. This just helps indicate what activity's server is running in the terminal.
const activity = cwd.includes('01-Activities')
  ? cwd.split('/01-Activities/')[1]
  : cwd;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`\n\x1b[42m   ~~~ API server is LIVE ~~~   \x1b[0m`);
    console.log(`\x1b[0m\x1b[43m${activity}\x1b[0m`);
    console.log(`\x1b[46mLive API: http://localhost:${PORT}/api\x1b[0m`);
  });
});