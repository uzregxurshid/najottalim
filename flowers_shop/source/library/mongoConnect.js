const mongoose = require('mongoose');
const flowerSchema = require('../model/flowers');
/**
 * Connect to the database using the mongoose.connect() method
 */
const mongoConnect = async () => {
  try {
       mongoose.connect(process.env.DB_CONNECT,()=>{
        console.log('> DB Connected');
      });
    } catch (error) {
    console.log(error);
  }
};

module.exports = mongoConnect;