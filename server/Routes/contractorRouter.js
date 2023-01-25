const express = require("express");
const {  contractorLogin, contractorSignup , addDesigns , editDesign  ,design ,deleteDesign ,contractor ,editProfile } = require("../controllers/contractorController");
const router = express.Router();



router.post("/contractorSignup", contractorSignup);
router.post("/contractorLogin", contractorLogin);
router.post("/getContractor",contractor)
router.patch("/editProfile",editProfile)
router.post('/addDesigns',addDesigns)
router.get('/contractorDesigns',design)
router.post('/deleteDesign',deleteDesign)
router.patch('/editDesign',editDesign)


module.exports = router;
              