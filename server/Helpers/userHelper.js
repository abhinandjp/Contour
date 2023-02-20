const { response } = require("../app");
const userModel = require("../Models/userModel/userSchema");
const contractorModel = require("../Models/contractorModel/contractorSchema");
const jwt = require("jsonwebtoken");
const designModel = require("../Models/contractorModel/designSchema");
const wishlistModel = require("../Models/userModel/userWishlist");
const bcrypt = require("bcrypt");
const Stripe = require("stripe");
const Wishlist = require("../Models/userModel/userWishlist");
require("dotenv").config();
const objectId=require('mongodb').ObjectId
const stripe = Stripe(process.env.STRIPE_KEY);

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
          phoneNumber: user.number,
          password: user.password,
          blockStatus: false,
          payment: false,
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
            // "secret123"
            process.env.JWT_SECRET_KEY
          );

          validation.userTrue = true;
          // let forDeletion = user
          // let userDetails = delete forDeletion.password
          // console.log(userDetails);
          let userDetails = user;
          resolve([validation, token, userDetails]);
        } else if (user.blockStatus == true) {
          validation.blckTrue = true;
          resolve([validation]);
        } else {
          // console.log("pasword false");
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

  contractor: (user) => {
    return new Promise(async (resolve, reject) => {
      let contractorD = await contractorModel.findOne({ email: user });
      resolve(contractorD);
    });
  },
  user: (email) => {
    return new Promise(async (resolve, reject) => {
      let userDetl = await userModel.findOne({ email: email });
      resolve(userDetl);
    });
  },
  wish: (DesignId, email) => {
    console.log(DesignId, email);
    let validation = { existingDesign: false , wishAdded : false , newDesign : false };
    return new Promise(async (resolve, reject) => {
      let design = await designModel.findById({ _id: DesignId });
      let wishing = await wishlistModel.findOne({ email: email });
      // console.log(wishing);
      if (!wishing ) {
        console.log("new wishlist created");
        const newWish = new wishlistModel({
          email: email,
          items: [design],
        });
        newWish.save();
        validation.newDesign = true
        resolve(validation)
      }else if(wishing.items.length == 0 ){
        console.log("puthiyzthh");
        const update = await wishlistModel.updateOne({ email: email },{
          // items: wishing.items,
          $push : {items: design}
          // items: [design],
        });
        validation.newDesign = true
        resolve(validation)

      }
       else {
        // console.log("huii");
        wishing.items.forEach((element,index) => {
          if (DesignId == element._id.toString()) {
            console.log("exixsting Design");
            validation.existingDesign = true;
            resolve(validation) 
          } else if(DesignId != element._id.toString() || element.length == 0 ) {
            console.log("push cheyyy");
            // console.log(design,"designnn");
            // wishing.items.push(design)
            validation.wishAdded = true
            resolve(validation)

          }  else{
            console.log("blank");
          } 
        });
        try {
          if (validation.existingDesign == false && validation.wishAdded == true) {
            wishing.items.push(design)
            const update = await wishlistModel.updateOne({ email: email },{
              // items: wishing.items,
              $set: {items: wishing.items}
            });
          console.log(update);

          }
        } catch (err) {
          console.log(err);
        }
      }
    });
  },

  getWish : (user)=>{
    return new Promise(async(resolve,reject)=>{
      let wishDb = await wishlistModel.findOne({email :user})
      // console.log(wishDb);
      resolve(wishDb)
    })

  },

  delete : (id,email)=>{
    // console.log(id, email);
    let validation = {deletedDesign : false}
    return new Promise (async (resolve,reject)=>{
        let deleted =   await wishlistModel.updateOne({email: email},{
            $pull: {items: {_id: objectId(id)}}
        })
        validation.deletedDesign = true
        // console.log(deleted);
        resolve(validation)
    })
  },

  
  editing: (data) => {
    let { name, email, phone, address, state, city, zip, image } = data;
    // console.log("ahiii fhonee",phone);
    return new Promise(async (resolve, reject) => {
      userDa = await userModel.findOneAndUpdate(
        { email: email },
        {
          name: name,
          phoneNumber: phone,
          address: address,
          state: state,
          city: city,
          zipCode: zip,
          // about : about,
          image: image,
        }
      );
      console.log(userDa);
    });
  },
  specificCView: (user) => {
    // console.log(user);

    return new Promise(async (resolve, reject) => {
      let contView = await designModel.find({ email: user });
      // console.log(contView);
      resolve(contView);
    });
  },
  checkoutProcess: async (request, response) => {
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price_data: {
            currency: "inr",
            product_data: {
              name: "Pay",
            },
            unit_amount: 800 * 100,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${process.env.CLIENT_URL}/checkout-success`,
      cancel_url: `${process.env.CLIENT_URL}/viewDesigns`,
    });
    // console.log(session.url);
    response.send({ url: session.url });
  },

  paymentDone: (id) => {
    let { email } = id;
    return new Promise(async (resolve, reject) => {
      let userdata = await userModel.findOneAndUpdate(
        { email: email },
        {
          // $set: {'payment':true}
          payment: true,
        }
      );
      // console.log( userdata);
      // userdata.payment = true;
      // userdata.payment.save()
      // console.log('k = ',userdata.payment);
      resolve(userdata.payment);
    });

    // try{
    //   let userdata =await userModel.findOneAndUpdate({email : email}, {
    //         payment : true
    //       })
    //       console.log(userdata);
    // }catch(err){
    //   console.log(err);
    // }
  },
};
