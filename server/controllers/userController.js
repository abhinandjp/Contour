const userHelpers = require('../Helpers/userHelper')

const signup = (req, res) => {
  let userdata = req.body;
  userHelpers.userSignup(userdata).then((response) => {
    if (response.userTrue) {
      res.json({ status: "registered" });
    } else if (response.existingUser) {
      let existingUser = "Existing Email";
      res.json({ status: "user", data: existingUser });
    }
  });
};

const login = (req, res) => {
  let userLogin = req.body;
  userHelpers.userLogin(userLogin).then((response) => {
    const [validate, token ] = response;
    // console.log(validate);
    if (validate.userTrue) {
      res.json({ status: "login", user: token });
    } else if (validate.userFalse) {
      let invalidUser = "Invalid User";
      res.json({ status: "noUser", data: invalidUser });
    }else if (validate.passFalse){
      let inctPassword = "Incorrect Password"
      
      res.json({status : "inctPassword" , data : inctPassword})
    }
  });
};

const getUsers = ( req,res)=>{
  userHelpers.getAllUsers().then((response)=>{
    res.json(response)
  })
}

module.exports = {
  signup,
  login,
  getUsers
};
