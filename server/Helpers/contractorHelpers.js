const contractorModel = require("../Models/contractorModel/contractorSchema");
const designModel = require('../Models/contractorModel/designSchema')
const jwt = require("jsonwebtoken");

module.exports = {
  contractorSignup: (contractorDetails) => {
   
    let validation = { existingContractor: false, contractorTrue: false };

    return new Promise(async (resolve, reject) => {
      let contractor = await contractorModel.findOne({
        email: contractorDetails.email,
      });
      if (!contractor) {
        const contractorData = new contractorModel({
          name: contractorDetails.name,
          email: contractorDetails.email,
          licenseNumber: contractorDetails.Lnumber,
          phoneNumber: contractorDetails.number,
          password: contractorDetails.password,
        });
        contractorData.save().then((response) => {
          console.log("new Contractor Registered");
          validation.contractorTrue = true;
          resolve(validation);
        });
      } else {
        console.log("Existing Contractor");
        validation.existingContractor = true;
        resolve(validation);
      }
    });
  },
  contractorLogin: (contractorLogin) => {
    let validation = { invalidContractor: false, contractorTrue: false , passFalse : false };
    return new Promise(async (resolve, reject) => {
      let contractor = await contractorModel.findOne({
        email: contractorLogin.email,
      });
      if (!contractor) {
        console.log("Login Failed");
        validation.invalidContractor = true;
        resolve([validation]);
      } else {
        if(contractor.password === contractorLogin.password){
          console.log("Logined");
        const token = jwt.sign(
          {
            user: contractorLogin.name,
            email: contractorLogin.email,
          },
          "secret123"
        );
        console.log(token);
        validation.contractorTrue = true;
        resolve([validation, token]);
        }else{
          validation.passFalse = true
          resolve([validation])
        }
            
      }
    });
  },

  addDesign : (designs)=>{    
    let validation = { designTrue: false  };
   const {inp, array} =designs
  
  const values = [] ;
  array.forEach(element => {
    
    values.push(element.value)

  });

  console.log('vvvv',values);
 

  return new Promise (async (resolve,reject)=>{
    try{
    const saveData = await new designModel({
      designName : inp.designType,
      description : values,
      cost : inp.cost
    })
    saveData.save().then((res)=>{
      console.log("new Design Added");
      validation.designTrue = true;
      resolve(validation);
    })
    }catch(err){
      console.log(err.message);
    }
  })
        
  },

  designs :()=>{
    return new Promise (async(resolve,reject)=>{
      let contDesign = await designModel.find()
      
      resolve(contDesign)
    })
  }
};
               