const express = require("express");
const {  adminLogin , getUsers , userBlock ,userCount,contractorCount,designCount , blkUserCount,subUserCount, blkContractorCount,userUnBlock  ,getContractors,contractorBlock,getSubUsers,contractorUnBlock} = require("../controllers/adminController");
const router = express.Router();
const authAdmin = require('../middleware/authAdmin')




router.post("/adminLogin", adminLogin)
router.get('/users' ,authAdmin, getUsers ) 
router.get('/subUsers' , authAdmin, getSubUsers ) 
router.get("/userCount",authAdmin,userCount)
router.get("/blkUserCount",authAdmin,blkUserCount)
router.get("/subUserCount",authAdmin,subUserCount)
router.get("/blkContractorCount",authAdmin,blkContractorCount)
router.get("/designCount",authAdmin,designCount)
router.get("/contractorCount",authAdmin,contractorCount)
router.patch("/userBlock",authAdmin,userBlock)
router.patch("/userUnBlock",authAdmin,userUnBlock)
router.get('/contractors' , authAdmin, getContractors ) 
router.patch("/contractorBlock",authAdmin,contractorBlock)
router.patch("/contractorUnBlock",authAdmin,contractorUnBlock)

module.exports = router;
