const app = require('../index.js');
const solver = require("javascript-lp-solver");

// TODO finish this and test if it actually works :|

app.listen(3000, (err) => {
  if (err) throw err;
  console.log('Server running on http://localhost:3000');
});

app.post('/calulcate', (req, res) => {
  console.log('got some forage to calculate!', req);
  try {
    const result = solver.Solve(req);
    res.send(result);
  } catch (e) {
    throw Error(e);
  }
});

