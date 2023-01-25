const { response } = require("../app");
const userModel = require("../Models/userModel/userSchema");
const contractorModel = require("../Models/contractorModel/contractorSchema");
const jwt = require("jsonwebtoken");
const designModel = require("../Models/contractorModel/designSchema");
const bcrypt = require("bcrypt");

module.exports = {
  findUser: (newUser) => {
    let validation = { existingUser: false, userTrue: false };
    console.log(newUser);
    return new Promise(async (resolve, reject) => {
      let userS = await userModel.findOne({ email: newUser.email });
      if (userS) {
        validation.existingUser = true;
        resolve(validation);
      } else {
        validation.userTrue = true;
        resolve(validation);
      }
    });
  },

  userSignup: (user) => {
    console.log(user);
    let validation = { existingUser: false, userTrue: false };

    return new Promise(async (resolve, reject) => {
      let userS = await userModel.findOne({ email: user.email });

      // if(!userS){

      //   validation.userTrue = true;
      //   resolve(validation);
      //   // console.log(newUser);
      //   // validation.userTrue = true;
      //   // console.log(validation);
      // }

      if (!userS) {
        const userData = new userModel({
          name: user.name,
          email: user.email,
          phoneNumber: user.phoneNumber,
          password: user.password,
          blockStatus: false,
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
    let validation = {
      userTrue: false,
      userFalse: false,
      passFalse: false,
      blckTrue: false,
    };

    return new Promise(async (resolve, reject) => {
      let user = await userModel.findOne({ email: userLogin.email });
      if (!user) {
        console.log("Login Failed");
        validation.userFalse = true;
        resolve([validation]);
      } else {
        const auth = await bcrypt.compare(userLogin.password, user.password);
        if (auth && user.blockStatus == false) {
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
        } else if (user.blockStatus == true) {
          validation.blckTrue = true;
          resolve([validation]);
        } else {
          validation.passFalse = true;
          resolve([validation]);
        }
      }
    });
  },
  view: (viewD) => {
    // console.log(viewD);

    return new Promise(async (resolve, reject) => {
      let contView = await designModel.findById(viewD);
      resolve(contView);
    });
  },

  contractor : (user)=>{
    return new Promise(async(resolve,reject)=>{
      let contractorD = await contractorModel.findOne({email : user})
      resolve(contractorD)
    })
  },
  specificCView: (user) => {
    console.log(user);

    return new Promise(async (resolve, reject) => {
      let contView = await designModel.find({email : user});
      // console.log(contView);
      resolve(contView);
    });
  },
};

