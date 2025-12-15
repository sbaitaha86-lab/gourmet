const express = require('express');
const app = express();
const port = 4000;

app.get('/', (req, res) => {
  res.send('Hello SBAI SBAI');
});

app.get('/amine', (req, res) => {
    res.send('Hello amine');
  });

  app.get('/hassan', (req, res) => {
    res.send('Hello hassan');
  });
  

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});