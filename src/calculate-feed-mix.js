const express = require('express');
const solver = require('javascript-lp-solver');

const router = express.Router();

// simple and definitely bad, but working handling of calculate request
router.post('/calculate-feed-mix', (request, response) => {
  const params = request.body;
  if (!params) {
    // TODO implement responding with bad request here
    response.send({ foo: 'bar' });
    return;
  }

  try {
    const result = solver.Solve(params);
    console.info('calculated result!', result);
    response.send(result);
  } catch (e) {
    // TODO this is wrong and sends a 200 response with 400 in it...
    response.send({ code: 400, status: e });
  }
});

module.exports = router;
