const express = require("express");
const router = express.Router();
const PageQuery = require("../PageandQueryControllers");

router.get("/", PageQuery.indexController);

router.get("/callback", PageQuery.callBackController);

router.post("/submit",express.urlencoded({extended:true}),PageQuery.submitController);

router.get("/thankyou",PageQuery.thankyouController);


module.exports = router;