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
    console.log(`💡     Database Connection:  \x1b[32mOnline\x1b[0m     💡`);
    // console.log(`${activity}`);
    console.log(`🚀  Live API: \x1b[34mhttp://localhost:${PORT}/api\x1b[0m 🚀\n\n`);
  });
});