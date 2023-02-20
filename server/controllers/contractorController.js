const contractorHelpers = require("../Helpers/contractorHelpers");

const contractorSignup = (req, res) => {
  let contractorDetails = req.body;
  contractorHelpers.contractorSignup(contractorDetails).then((response) => {
    if (response.contractorTrue) {
      res.json({ status: "login" });
    } else if (response.existingContractor) {
      let existingContractor = "Contractor Already Registered";
      res.json({ status: "contractor", data: existingContractor });
    }
  });
};

const contractorLogin = (req, res) => {
  let contractorLogin = req.body;
  contractorHelpers.contractorLogin(contractorLogin).then((response) => {
    const [validate, token] = response;
    if (validate.contractorTrue) {
      res.json({ status: "login", contractor: token });
    } else if (validate.invalidContractor) {
      let invalidContractor = "Invalid Contractor";
      res.json({ status: "noContractor", data: invalidContractor });
    } else if (validate.blkdTrue) {
      let adminBlocked = "Blocked By Admin";
      res.json({ status: "noContractor", data: adminBlocked });
    } else if (validate.passFalse) {
      let inctPassword = "Incorrect Password";

      res.json({ status: "inctPassword", data: inctPassword });
    }
  });
};

const contractor = (req,res)=>{
  // let {user} = req.body
  user = req.contractor.email
  contractorHelpers.contractor(user).then((response)=>{
    res.json(response)
  })
}

const editProfile = (req,res)=>{
  let data = req.body
  contractorHelpers.edit(data).then((response)=>{
    // console.log(response);
    res.json(response)
  })
}

const design = (req, res) => {
  contractorHelpers.designs().then((response) => {
    
    res.json(response);
  });
};

const addDesigns = (req, res) => {
  let designs = req.body;
  // console.log(designs);
  contractorHelpers.addDesign(designs).then((response) => {
    result = "New Design Added";
    res.json({ status: "Design Added", data: result });
  });
};

const editDesign = (req,res)=>{

  let editDesign = req.body
  // console.log(editDesign);
  contractorHelpers.editDesign(editDesign).then((response)=>{
    res.json(response)
  })

}



const deleteDesign = (req, res) => {
  let { id } = req.body;

  contractorHelpers.delete(id).then((response)=>{
    res.json(response);
  })
};

module.exports = {
  contractorSignup,
  contractorLogin,
  addDesigns,
  design,
  deleteDesign,
  editDesign ,
  contractor,
  editProfile
};
