const express = require('express');
const solver = require('javascript-lp-solver');

const router = express.Router();

router.post('/calculate-feed-mix', (request, response) => {
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

module.exports = router;
