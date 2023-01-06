const adminHelpers = require('../Helpers/adminHelpers')


const adminLogin = (req, res) => {
    let adminLogin = req.body;
    

    

    adminHelpers.adminLogin(adminLogin)
    .then((response) => {
      const [validate, token] = response;
     
      if (validate.adminTrue) {
        res.json({ status: "login", admin: token });
      } else if (validate.invalidAdmin) {
        let invalidAdmin = "Invalid Admin";
        res.json({ status: "noAdmin", data: invalidAdmin });
      }else if(validate.passFalse){
        let inctPassword = "Incorrect Password"
        
        res.json({status : "inctPassword" , data : inctPassword})
      }
    });
  };

  module.exports = {

    adminLogin,
  };
  