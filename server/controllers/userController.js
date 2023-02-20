const userHelpers = require("../Helpers/userHelper");
const { CLIENT_URL } = process.env;
const jwt = require("jsonwebtoken");

const sendEmail = require("./sentMail");

const signup = (req, res) => {
  let userdata = req.body;
  userHelpers.userSignup(userdata).then((response) => {
    if (response.userTrue) {
      res.json({ status: "registered" , msg : "Signed succesfully" });
    } else if (response.existingUser) {
      
      let existingUser = "Existing Email";
      res.json({ status: "Existing", msg : existingUser });
    }
  });
};

//nodemailer

// const createActivationToken = (payload) => {
//   return jwt.sign(payload, process.env.ACTIVATION_TOKEN_SECRET, {
//     expiresIn: "5m",
//   });
// };
// const createAccessToken = (payload) => {
//   return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
//     expiresIn: "15m",
//   });
// };
// const createRefreshToken = (payload) => {
//   return jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, {
//     expiresIn: "30d",
//   });
// };
// const signup = (req, res) => {
//   let userdata = req.body;

//   try {
//     const newUser = {
//       name: userdata.name,
//       email: userdata.email,
//       password: userdata.password,
//       phoneNumber: userdata.number,
//       blockStatus: false,
//       payment : false
//     };

//     const findUser = async () => {
//       await userHelpers.findUser(newUser).then((response) => {
//         console.log(response);
//         if (response.existingUser) {
//           res.json({   
//             status: "Existing",
//             msg: "This Email has already registerd",
//           });
//         } else if (response.userTrue) {
//           const activation_token = createActivationToken(newUser);
//           const url = `${CLIENT_URL}/user/activation/${activation_token}`;
//           sendEmail(userdata.email, url);
//           console.log({ activation_token });
//           res.json({
//             status: "registered",
//             msg: " Register Success please activate your email",
//           });
//         }
//       });
//     };
//     findUser();
//   } catch (err) {
//     return res.status(500).json({ mesg: err.message });
//   }
// };
// const activateEmail = async (req, res) => {
//   try {
//     const { activation_token } = req.body;
//     const user = await jwt.verify(
//       activation_token,
//       process.env.ACTIVATION_TOKEN_SECRET
//     );
//     console.log("hssssssaaaaaiii",user);
//     userHelpers.userSignup(user).then((response) => {
//       if (response.userTrue) {
//         res.json({
//           status: "registered",
//           msg: "register Sucess please activate your email",
//         });
//       } else if (response.existingUser) {
//         let existingUser = "Existing Email";
//         res.json({ status: "user", data: existingUser });
//       }
//     });
//   } catch (err) {
//     return res.status(500).json({ mesg: err.message });
//   }
// };

//nodemailer ivide varee

const login = (req, res) => {
  let userLogin = req.body;
  userHelpers.userLogin(userLogin).then((response) => {
    // console.log(response);
    const [validate, token,userDetails] = response;
    // console.log(validate);
    if (validate.userTrue) {
      res.json({ status: "login", user: token , userDetails : userDetails });
    } else if (validate.userFalse) {
      let invalidUser = "Invalid User";
      res.json({ status: "noUser", data: invalidUser });
    } else if (validate.passFalse) {
      let inctPassword = "Incorrect Password";
      res.json({ status: "inctPassword", data: inctPassword });
    } else if (validate.blckTrue) {
      let adminBlocked = "Blocked By Admin !";
      res.json({ status: "blocked", data: adminBlocked });
    }
  });
};

const viewDesign = (req, res) => {
   console.log(req.body)  
  let { Id } = req.body;

  userHelpers.view(Id).then((response) => {
    res.json(response);
  });
};

const contractor = (req,res)=>{
  console.log(req.body,"cont autherizatioonn");
  let {user} = req.body 
  // user = req.user
  userHelpers.contractor(user).then((response)=>{
    res.json(response)
  })
}

const user = (req,res)=>{
  console.log("haiii",req.body);
  let email = req.user.email
  userHelpers.user(email).then((response)=>{
    res.json(response)
  })
}

const getWishlist = (req,res)=>{
  let user = req.user.email
  // console.log(user);
 userHelpers.getWish(user).then((response)=>{
  // console.log(response);
  res.json(response)
 })
}

const wishlist = (req,res)=>{
  // console.log(req.body)
  const {DesignId } = req.body
  const email = req.user.email
  userHelpers.wish(DesignId,email).then((response)=>{
    console.log(response);
    if(response.existingDesign){
      let display = "Design Already Added"
      res.json({status : "existing" ,data : display})
    }else if(response.wishAdded){
      let display = "Saved To Wishlist"
      res.json({status : "saved" ,data : display})
    }
    else if(response.newDesign){
      let display = "Saved To Wishlist"
      res.json({status : "newSaved" ,data : display})
    }
  })
}

const deleteDesign = (req, res) => {
  let { id } = req.body;
  email = req.user.email
  userHelpers.delete(id,email).then((response)=>{
    res.json(response);
  })
};

const edit = (req,res)=>{
  // console.log(req.body);
  data = req.body    
  userHelpers.editing(data)
}

const SContractorD = (req,res)=>{
  // console.log(req.body);
  let {user} = req.body
  // console.log(user);
  
  userHelpers.specificCView(user)
.then((response)=>{
    res.json(response)
  })
}

const checkout = (req,res)=>{
        // console.log("request",req);
        // console.log("response",res);
        let request = req
        let response = res
        userHelpers.checkoutProcess(request,response)
}
const paymentOk = (req,res)=>{
  id = req.body
  userHelpers.paymentDone(id)
  .then((response)=>{
    console.log(response);
    res.json({payment :response})
  })
}

module.exports = {
  signup,
  login,
  viewDesign,
  contractor,
  user,
  getWishlist,
  wishlist,
  deleteDesign,
  edit,
  SContractorD,
  checkout,
  paymentOk
}
