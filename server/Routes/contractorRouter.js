const express = require("express");
const {  contractorLogin, contractorSignup , addDesigns ,design } = require("../controllers/contractorController");
const router = express.Router();



router.post("/contractorSignup", contractorSignup);
router.post("/contractorLogin", contractorLogin);
router.post('/addDesigns',addDesigns)
router.get('/contractorDesigns',design)

module.exports = router;
            