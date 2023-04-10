const express = require('express');
const bodyParser = require('body-parser');
const db = require('./config/database');
const app = express();
const port = 3000;

// Activate body-parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

async function startServer() {
  try {
    await db.authenticate();
    console.log('Database Connected');
    app.listen(port, () => console.log(`Server running at port ${port}`));
  } catch (error) {
    console.error(error);
  }
}

app.use('/', require('./src/register'));

startServer();