const contractorModel = require("../Models/contractorModel/contractorSchema");
const designModel = require("../Models/contractorModel/designSchema");
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt')


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
          blockStatus: false,
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
    let validation = {
      invalidContractor: false,
      contractorTrue: false,
      passFalse: false,
      blkdTrue : false
    };
    return new Promise(async (resolve, reject) => {
      let contractor = await contractorModel.findOne({
        email: contractorLogin.email,
      });
      if (!contractor) {
        console.log("Login Failed");
        validation.invalidContractor = true;
        resolve([validation]);
      } else {
        const auth = await bcrypt.compare(contractorLogin.password , contractor.password)
        if (
          auth &&
          contractor.blockStatus == false
        ) {
          console.log("Logined");
          const token = jwt.sign(
            {
              user: contractorLogin.name,
              email: contractorLogin.email,
            },
            "secret123"
          );
          // console.log(token);
          validation.contractorTrue = true;
          resolve([validation, token]);
        } else if (contractor.blockStatus) {
          validation.blkdTrue = true
          resolve([validation]);
        } else {
          validation.passFalse = true;
          resolve([validation]);
        }
      }
    });
  },

  contractor : (user)=>{
    return new Promise(async(resolve,reject)=>{
      let contractorD = await contractorModel.findOne({email : user}).select("-password")
      // console.log(contractorD);
      resolve(contractorD)
    })
  },

 edit : (data)=>{
  let validation = { editSuccess : false}
  console.log(data);
  let {name, email ,phone , address, state, city, zip,  about , image  } = data
  // console.log(phone);
  return new Promise(async(resolve,reject)=>{
  let contractorD = await contractorModel.findOneAndUpdate({email : email} , {
          name: name,
          phoneNumber: phone,
          address : address,
          state : state ,
          city : city , 
          zipCode : zip,
          about : about,
          image : image
  })
  validation.editSuccess = true
  resolve(validation)
  })
 },

  designs: () => {
    return new Promise(async (resolve, reject) => {
      let contDesign = await designModel.find();
      resolve(contDesign);
    });
  },     

  addDesign: (designs) => {
    let validation = { designTrue: false };
    const { inp, array , email } = designs;
    console.log(email);

    const values = [];
    array.forEach((element) => {
      values.push(element.value);
    });

    // console.log('vvvv',values);

    return new Promise(async (resolve, reject) => {
      try {
        const saveData = await new designModel({
          email : email,
          designName: inp.designType,
          description: values,
          cost: inp.cost,
        });
        saveData.save().then((res) => {
          console.log("new Design Added");
          validation.designTrue = true;
          resolve(validation);
        });
      } catch (err) {
        console.log(err.message);
      }
    });
  },

  editDesign : (editDesign)=>{
    let validation ={edited : false}
    let {id , designName , cost,description } = editDesign
    // console.log("destucture",array,id,inp,cost);
    return new Promise(async (resolve,reject)=>{
      try{
        const edit = await designModel.findByIdAndUpdate(id,{designName,cost,description})
        validation.edited = true
        console.log("updated succesfully");
        resolve(validation)
      }catch(err){
        console.log(err.message);
      }
    })

  },

 
  delete : (id)=>{
    let validation ={deleteDesgn : false}
    return new Promise (async (resolve,reject)=>{
      let contDelteDesign = await designModel.findByIdAndDelete(id);
      validation.deleteDesgn = true
      resolve(validation)
    })

  }
};
