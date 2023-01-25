const express = require("express");
const { signup, login, viewDesign, activateEmail , contractor , SContractorD } = require("../controllers/userController");
const router = express.Router();

router.post("/signup", signup);
router.post("/activation", activateEmail);


router.post("/login", login);
router.post("/getContractor",contractor)
router.post('/contractorDesigns',viewDesign)
router.post("/getSpecificContractorD",SContractorD)


module.exports = router;
    