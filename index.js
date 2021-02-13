// TODO migrate to typescript with ts-node
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const lpSolver = require('./src/calculate-feed-mix');

const PORT = process.env.PORT ?? 3000;

const router = express.Router();
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// TODO fix this, seems bad and should not happen when we have FE deployed by BE
app.use(cors());

// TODO refactor those names
app.use('/api', lpSolver);

router.get('/', (request, response) => {
  response.send('hello world');
  return;
  // TODO make it work with actual FE
  response.sendFile('index.html');
});

app.use('/', router);

app.listen(PORT, (err) => {
  if (err) throw err;
  console.log(`Server running on http://localhost:${PORT}`);
});
