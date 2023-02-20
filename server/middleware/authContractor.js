const jwt = require('jsonwebtoken')
// const helpers = require('../helpers/adminHelper');
// const Expert = require('../model/expertModal');

const Contractor = require('../Models/contractorModel/contractorSchema')



const authContractor = async (req, res, next) => {
    let token;  
    // console.log("haiiiiiiiiiiiiii");
    // console.log(req.headers); 
    if (req.headers.authorization) {
       
        try {    
            token = req.headers.authorization   
            
            const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY)

            // console.log(decoded,"decoded token");

            req.contractor = await Contractor.findOne({email:decoded.email})

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

module.exports = authContractor
