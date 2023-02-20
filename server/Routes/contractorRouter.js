const express = require("express");
const {  contractorLogin, contractorSignup , addDesigns , editDesign  ,design ,deleteDesign ,contractor ,editProfile } = require("../controllers/contractorController");
const router = express.Router();
const authContractor = require('../middleware/authContractor')



router.post("/contractorSignup", contractorSignup);
router.post("/contractorLogin", contractorLogin);
router.post("/getContractor",authContractor,contractor)
router.patch("/editProfile",authContractor,editProfile)
router.post('/addDesigns',authContractor,addDesigns)
router.get('/contractorDesigns',design)
router.post('/deleteDesign',authContractor,deleteDesign)
router.patch('/editDesign',editDesign)


module.exports = router;
              