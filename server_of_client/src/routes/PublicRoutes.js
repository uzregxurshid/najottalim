const public = require('../controllers/publicControllers');
const router = require('express').Router();
router.get('/getCompanies' , public.getCompanies)
      .get('/getBuildings' , public.getBuildings)
      .get('/getApartments' , public.getApartments)
      .get('/getBanks' , public.getBanks)
      .get('/addApplication' , public.register);
module.exports  = router;