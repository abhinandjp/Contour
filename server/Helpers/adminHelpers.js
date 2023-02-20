const adminModel = require("../Models/adminModel/adminSchema");
const userModel = require("../Models/userModel/userSchema");
const contractorModel = require("../Models/contractorModel/contractorSchema");
const designModel = require("../Models/contractorModel/designSchema")

const jwt = require("jsonwebtoken");

module.exports = {
  adminLogin: (adminLogin) => {
    let validation = {
      invalidAdmin: false,
      adminTrue: false,
      passFalse: false,
    };

    return new Promise(async (resolve, reject) => {
      let admin = await adminModel.findOne({
        email: adminLogin.email,
      });
      if (!admin) {
        console.log("Login Failed");
        validation.invalidAdmin = true;
        resolve([validation]);
      } else {
        if (admin.password === adminLogin.password) {
          console.log("Logined");
          const token = jwt.sign(
            {
              user: adminLogin.name,
              email: adminLogin.email,
            },
            "secret123"
          );
          // console.log(token);
          validation.adminTrue = true;
          resolve([validation, token]);
        } else {
          validation.passFalse = true;
          resolve([validation]);
        }
      }
    });

    // const adminData = new adminModel({
    //   name:adminLogin.name,
    //   email:adminLogin.email,
    //   password:adminLogin.password,
    // });
    // adminData.save()
  },
  getAllUsers: () => {
    return new Promise(async (resolve, reject) => {
      let users = await userModel.find();
      resolve(users);
    });
  },
  userCnt: () => {
    return new Promise(async (resolve, reject) => {
      let userCount = await userModel
        .find({
          blockStatus: false,
        }).count();
        // console.log(userCount);
        resolve(userCount)
    });
  },
  blkUserCnt: () => {
    return new Promise(async (resolve, reject) => {
      let userCount = await userModel
        .find({
          blockStatus: true,
        }).count();
        resolve(userCount)
    });
  },
  subCount : ()=>{
    return new Promise(async (resolve, reject) => {
      let userCount = await userModel
        .find({
          payment: true,
        }).count();
        // console.log(userCount);
        resolve(userCount)
    });
  },
  contCount: () => {
    return new Promise(async (resolve, reject) => {
      let userCount = await contractorModel
        .find({
          blockStatus: false,
        }).count();
        // console.log(userCount);
        resolve(userCount)
    });
  },
  blkCountCount:()=>{
    return new Promise(async (resolve, reject) => {
      let contCount = await contractorModel
        .find({
          blockStatus: true,
        }).count();
        // console.log(contCount);
        resolve(contCount)
    });
  },
  designCont : ()=>{
 return new Promise (async(resolve,reject)=>{
  let desgCount = await designModel.find().count()
  resolve(desgCount)
 })
  },
  getSubUsers: () => {
    return new Promise(async (resolve, reject) => {
      let users = await userModel.find({ payment: true });
      // console.log(users);
      resolve(users);
    });
  },
  userBlk: (user) => {
    let validation = { blockStatus: false };
    return new Promise(async (resolve, reject) => {
      let userB = await userModel.findByIdAndUpdate(user, {
        blockStatus: true,
      });
      validation.blockStatus = true;
      resolve(validation);
    });
  },
  userUnBlk: (user) => {
    let validation = { blockStatus: false };
    return new Promise(async (resolve, reject) => {
      let userUB = await userModel.findByIdAndUpdate(user, {
        blockStatus: false,
      });
      // console.log(userUB);
      validation.blockStatus = false;
      resolve(validation);
    });
  },
  getAllContractors: () => {
    return new Promise(async (resolve, reject) => {
      let users = await contractorModel.find();
      resolve(users);
    });
  },
  contractorBlk: (user) => {
    let validation = { blockStatus: false };
    return new Promise(async (resolve, reject) => {
      let userB = await contractorModel.findByIdAndUpdate(user, {
        blockStatus: true,
      });
      validation.blockStatus = true;
      resolve(validation);
    });
  },
  contractorUnBlk: (user) => {
    let validation = { blockStatus: false };
    return new Promise(async (resolve, reject) => {
      let userUB = await contractorModel.findByIdAndUpdate(user, {
        blockStatus: false,
      });
      console.log(userUB);
      validation.blockStatus = false;
      resolve(validation);
    });
  },
};
