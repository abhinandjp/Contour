const express = require("express");
const { signup, login, viewDesign , contractor , user, getWishlist ,wishlist ,deleteDesign,  SContractorD , checkout , paymentOk , edit } = require("../controllers/userController");
const router = express.Router();
const authUser = require('../middleware/authUser')

router.post("/signup", signup);
// router.post("/activation", activateEmail);
router.post("/login", login);
router.post("/getContractor",authUser,contractor)
router.post("/getuser",authUser , user)
router.post("/wishlist",authUser,wishlist)
router.post('/deleteDesign',authUser,deleteDesign)
router.post("/getWishlist",authUser,getWishlist)
router.patch("/profileEdit",authUser,edit)
router.post('/contractorDesigns' , authUser, viewDesign)
router.post("/getSpecificContractorD",SContractorD)
router.post("/create-checkout-session", checkout)
router.post("/paymentOk",paymentOk)


module.exports = router;
    