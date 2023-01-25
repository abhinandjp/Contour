const express = require("express");
const {  adminLogin , getUsers , userBlock , userUnBlock  ,getContractors,contractorBlock,contractorUnBlock} = require("../controllers/adminController");
const router = express.Router();



router.post("/adminLogin", adminLogin)
router.get('/users' , getUsers ) 
router.patch("/userBlock",userBlock)
router.patch("/userUnBlock",userUnBlock)
router.get('/contractors' , getContractors ) 
router.patch("/contractorBlock",contractorBlock)
router.patch("/contractorUnBlock",contractorUnBlock)

module.exports = router;
