
const port = 3100;
const app = require('./app');
const connectDb = require('./db/index');

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

connectDb();

module.exports = app;