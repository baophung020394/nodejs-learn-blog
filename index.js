const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  let a = 1;
  let b = 2;
  let c = a + b;
  res.send('Hello Ku');
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});