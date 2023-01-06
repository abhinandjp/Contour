const { response } = require("../app");
const userModel = require("../Models/userModel/userSchema");
const jwt = require("jsonwebtoken");

module.exports = {
  userSignup: (userdata) => {
    let validation = { existingUser: false, userTrue: false };

    return new Promise(async (resolve, reject) => {
      let user = await userModel.findOne({ email: userdata.email });
      if (!user) {
        const userData = new userModel({
          name: userdata.name,
          email: userdata.email,
          phoneNumber: userdata.number,
          password: userdata.password,
        });
        userData.save().then((response) => {
          console.log("new user Registered");
          validation.userTrue = true;
          resolve(validation);
        });
      } else {
        console.log("existing user");
        validation.existingUser = true;
        resolve(validation);
      }
    });
  },

  userLogin: (userLogin) => {
    let validation = { userTrue: false, userFalse: false ,passFalse : false };

    return new Promise(async (resolve, reject) => {
      let user = await userModel.findOne({ email: userLogin.email });
      if (!user) {
        console.log("Login Failed");
        validation.userFalse = true;
        resolve([validation]);
      } else {
        if(user.password === userLogin.password){
          console.log("Logined");
        
        const token = jwt.sign(
          {
            userName: user.name,
            email: user.email,
          },
          "secret123"
        );

        validation.userTrue = true;
        
        resolve([validation, token]);
        }else{
          validation.passFalse = true
          resolve([validation])
        }
        
      }
    });
  },
  getAllUsers : ()=>{
    return new Promise(async(resolve,reject)=>{
      let users = await userModel.find();
      resolve(users)
    })
  }
};
