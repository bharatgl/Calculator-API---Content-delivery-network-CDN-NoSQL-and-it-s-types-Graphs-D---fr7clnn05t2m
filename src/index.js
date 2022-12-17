const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello world!');
});

app.post('/add', (req, res) => {
  const num1 = req.body.num1;
  const num2 = req.body.num2;
  const sum = num1 + num2;

  if (sum < -1000000 || sum > 1000000) {
    return res.status(400).json({ status: 'error', message: 'Overflow' });
  }

  res.json({ status: 'success', message: 'the sum of given two numbers', sum });
});

app.post('/sub', (req, res) => {
  const num1 = req.body.num1;
  const num2 = req.body.num2;
  const difference = num1 - num2;

  if (difference < -1000000 || difference > 1000000) {
    return res.status(400).json({ status: 'error', message: 'Overflow' });
  }

  res.json({ status: 'success', message: 'the difference of given two numbers', difference });
});

app.post('/multiply', (req, res) => {
  const num1 = req.body.num1;
  const num2 = req.body.num2;
  const result = num1 * num2;

  if (result < -1000000 || result > 1000000) {
    return res.status(400).json({ status: 'error', message: 'Overflow' });
  }

  res.json({ status: 'success', message: 'The product of given numbers', result });
});

app.post('/divide', (req, res) => {
  const num1 = req.body.num1;
  const num2 = req.body.num2;

  if (num2 == 0) {
    return res.status(400).json({ status: 'error', message: 'Cannot divide by zero' });
  }

  const result = num1 / num2;

  if (result < -1000000 || result > 1000000) {
    return res.status(400).json({ status: 'error', message: 'Overflow' });
  }

  res.json({ status: 'success', message: 'The division of given numbers', result });
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server listening on port ${port}`));
