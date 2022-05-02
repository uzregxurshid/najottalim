const express = require('express');
const flowersController= require('../Controllers/controller');
const router = express.Router();

router 
  .get('/getFlowers', flowersController.getFlowers)
  .post('/addFlowers', flowersController.addFlowers)  
  .put('/updateFlowers', flowersController.updateFlowers)
  .delete('/deleteFlowers', flowersController.deleteFlowers);
module.exports = router;