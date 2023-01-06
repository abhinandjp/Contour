const adminModel = require("../Models/adminModel/adminSchema");
const jwt = require("jsonwebtoken");

module.exports = {
  adminLogin: (adminLogin) => {
    
    let validation = { invalidAdmin: false, adminTrue: false , passFalse : false };
    return new Promise(async (resolve, reject) => {
      let admin = await adminModel.findOne({
        email: adminLogin.email
      });
      if (!admin) {
        console.log("Login Failed");
        validation.invalidAdmin = true;
        resolve([validation]);
      } else {
        if(admin.password === adminLogin.password){
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
        }else{
          validation.passFalse = true
          resolve([validation])
        }
        
      }
    });

    // const adminData = new adminModel({
    //   name:adminLogin.name,
    //   email:adminLogin.email,
    //   password:adminLogin.password,
    // });
    // adminData.save()

  }
}

  