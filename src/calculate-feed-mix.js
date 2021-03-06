const express = require('express');
const solver = require('javascript-lp-solver');

const router = express.Router();

// simple and definitely bad, but working handling of calculate request
router.post('/calculate-feed-mix', (request, response) => {
  const params = request.body;
  if (!params) {
    // TODO implement responding with bad request here
    response.send({ code: 500, msg: 'Provide params for the calculations' });
    return;
  }

  try {
    const solution = solver.Solve(params);
    response.send(solution);
  } catch (e) {
    // TODO this is wrong and sends a 200 response with 400 in it...
    response.send({ code: 400, status: e });
  }
});

module.exports = router;
