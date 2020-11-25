const express = require('express');
const app = express();
const port = 3100;

const getDocuments = require('./db/index.js');

app.get('/', (req, res) => {
  res.send(`You have reached port ${port}!`)
})

app.get('/api/users/', (req, res) => {
  res.send(getDocuments());
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})