const userHelpers = require("../Helpers/userHelper");
const { CLIENT_URL } = process.env;
const jwt = require("jsonwebtoken");

const sendEmail = require("./sentMail");

// const signup = (req, res) => {
//   let userdata = req.body;
//   userHelpers.userSignup(userdata).then((response) => {
//     if (response.userTrue) {
//       res.json({ status: "registered" , msg : "register Sucess please activate your email" });
//     } else if (response.existingUser) {
//       let existingUser = "Existing Email";
//       res.json({ status: "user", data: existingUser });
//     }
//   });
// };

//nodemailer

const createActivationToken = (payload) => {
  return jwt.sign(payload, process.env.ACTIVATION_TOKEN_SECRET, {
    expiresIn: "5m",
  });
};
const createAccessToken = (payload) => {
  return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "15m",
  });
};
const createRefreshToken = (payload) => {
  return jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: "30d",
  });
};

const signup = (req, res) => {
  let userdata = req.body;

  try {
    const newUser = {
      name: userdata.name,
      email: userdata.email,
      password: userdata.password,
      phoneNumber: userdata.number,
      blockStatus: false,
    };

    const findUser = async () => {
      await userHelpers.findUser(newUser).then((response) => {
        console.log(response);
        if (response.existingUser) {
          res.json({
            status: "Existing",
            msg: "This Email has already registerd",
          });
        } else if (response.userTrue) {
          const activation_token = createActivationToken(newUser);
          const url = `${CLIENT_URL}/user/activation/${activation_token}`;
          sendEmail(userdata.email, url);
          console.log({ activation_token });
          res.json({
            status: "registered",
            msg: " Register Success please activate your email",
          });
        }
      });
    };
    findUser();
  } catch (err) {
    return res.status(500).json({ mesg: err.message });
  }
};

const activateEmail = async (req, res) => {
  try {
    const { activation_token } = req.body;
    const user = await jwt.verify(
      activation_token,
      process.env.ACTIVATION_TOKEN_SECRET
    );
    console.log(user);
    userHelpers.userSignup(user).then((response) => {
      if (response.userTrue) {
        res.json({
          status: "registered",
          msg: "register Sucess please activate your email",
        });
      } else if (response.existingUser) {
        let existingUser = "Existing Email";
        res.json({ status: "user", data: existingUser });
      }
    });
  } catch (err) {
    return res.status(500).json({ mesg: err.message });
  }
};

//nodemailer ivide varee

const login = (req, res) => {
  let userLogin = req.body;
  userHelpers.userLogin(userLogin).then((response) => {
    const [validate, token] = response;
    // console.log(validate);
    if (validate.userTrue) {
      res.json({ status: "login", user: token });
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
  //  console.log(req.body)
  let { Id } = req.body;

  userHelpers.view(Id).then((response) => {
    res.json(response);
  });
};

const contractor = (req,res)=>{
  // console.log(req.body);
  let {user} = req.body
  
  userHelpers.contractor(user).then((response)=>{
    res.json(response)
  })
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

module.exports = {
  signup,
  login,
  viewDesign,
  activateEmail,
  contractor,
  SContractorD
}
