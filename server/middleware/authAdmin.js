const jwt = require('jsonwebtoken')
// const helpers = require('../helpers/adminHelper');
// const Expert = require('../model/expertModal');

const Admin = require('../Models/adminModel/adminSchema')



const authAdmin = async (req, res, next) => {
    let token;  
    // console.log("haiiiiiiiiiiiiii");
    // console.log(req.headers.authorization); 
    if (req.headers.authorization) {
       
        try {
            token = req.headers.authorization   
            
            const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY)

            // console.log(decoded,"decoded token");

            req.admin = await Admin.findOne({email:decoded.email})

            // console.log(req.contractor);


            next()
  
        } catch (error) {
            return res.status(500).json({msg: error.message})
        }
    }
    if (! token) {
        return res.status(400).json({msg: "Invalid authentication."})
    }
}

module.exports = authAdmin
