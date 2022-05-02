const bodyParser = require("body-parser");
const express = require("express");
const {check} = require("express-validator");
const MyController = require("../controller/MyController");
const multer = require("multer");
const router = express.Router();
const jsonParser = bodyParser.urlencoded({extended: false});
/**
 * Storage Middleware
 * */
const storage = multer.diskStorage({
    destination: function (req,file,cb){
       const dir = MyController.getFast(req.body.username);
       cb(null,dir);
    },
    filename: function (req,file,cb){
        console.log(file);
        cb(null, Date.now()+"---."+file.originalname.split(".").at(-1));
    }
});
const upload =multer({storage});
/**
 * form controller
 * */
router.get("/", MyController.index);
/**
 * register controller
 * */
router.post(`/register`, upload.array("myfile", 20), jsonParser, [
    check("username", "Username must not be empty!").notEmpty({ignore_whitespace: true}),
    check("password", "Password must be minimal 4 and maximum 12 length").isLength({min: 4, max: 12}),
    check("date", "Date is must true format").notEmpty().isDate()
], MyController.registerController);
/**
 * login controller
 * */
router.get("/login", MyController.loginPage);
router.post("/login", jsonParser, MyController.loginController);

module.exports = router;