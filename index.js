const express = require('express');
const bodyParser = require('body-parser');
const solver = require('javascript-lp-solver');

const router = express.Router();
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

router.post('/api/calculate-feed-mix', (request, response) => {
  console.log(request.body);
  response.send({ foo: 'baroo ' });

  //TODO fix this request (accept proper params)
  try {
    const result = solver.Solve(request);
    response.send(result); // sends a response of various types
  } catch (e) {
    throw Error(e);
  }
});

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
