const express = require('express');
require('dotenv').config();

const app = express();
const routes = require('./routes')
const database = require('./modules/database');

database.initialize();
routes.initialize(app);

app.listen(process.env.APP_PORT, () => {
  console.log(`Server started on port ${process.env.APP_PORT}`)
});
