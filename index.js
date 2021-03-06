// TODO migrate to typescript with ts-node
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const apiPaths = require('./src/calculate-feed-mix');

const PORT = process.env.PORT ?? 3000;

const router = express.Router();
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

app.use('/api', apiPaths);

app.use('/', router);

app.listen(PORT, (err) => {
  if (err) throw err;
  console.log(`Server running on http://localhost:${PORT}`);
});
