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

  const getUsers = ( req,res)=>{
    adminHelpers.getAllUsers().then((response)=>{
      res.json(response)
    })
  }

  const userBlock = (req,res)=>{
    let {user} = req.body
    adminHelpers.userBlk(user).then((response)=>{
      res.json(response)
    })
  }
  const userUnBlock = (req,res)=>{
    let {user} = req.body
    // console.log(user);
    adminHelpers.userUnBlk(user).then((response)=>{
      res.json(response)
    })
  }

  const getContractors = ( req,res)=>{
    adminHelpers.getAllContractors().then((response)=>{
      res.json(response)
    })
  }

  const contractorBlock = (req,res)=>{
    let {user} = req.body
    adminHelpers.contractorBlk(user).then((response)=>{
      res.json(response)
    })
  }
  const contractorUnBlock = (req,res)=>{
    let {user} = req.body
    // console.log(user);
    adminHelpers.contractorUnBlk(user).then((response)=>{
      res.json(response)
    })
  }

  module.exports = {

    adminLogin,getUsers, userBlock, userUnBlock,getContractors,contractorBlock,contractorUnBlock
  };
  