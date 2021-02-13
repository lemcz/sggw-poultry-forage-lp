const express = require('express');
const bodyParser = require('body-parser');
const lpSolver = require('./src/calculate-feed-mix');

const router = express.Router();
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// TODO refactor those names
app.use('/api', lpSolver);

router.get('/', (request, response) => {
  response.send('hello world');
  return;
  // TODO make it work with actual FE
  response.sendFile('index.html');
});

app.use('/', router);

app.listen(3000, (err) => {
  if (err) throw err;
  console.log('Server running on http://localhost:3000');
});

module.exports = app;
