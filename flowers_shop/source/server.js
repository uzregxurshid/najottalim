const express = require('express');
const mongoConnect = require('./library/mongoConnect');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 5000;
const routes = require('./routes/routes');
app.use(express.json())
app.use('/api/v1', routes);

/**
 * This function is used to start the server. It first connects to the database and then starts the
 * server
 */
const start = async ()=>{
  try {
    await mongoConnect()
    app.listen(port , ()=> console.log('> Server is up and running on port : ' + port))
  } catch (error) {
    console.log(error);
  }
}

start();