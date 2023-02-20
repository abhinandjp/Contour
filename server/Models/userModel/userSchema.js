const mongoose = require("mongoose");
const bcrypt = require('bcrypt')

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: Number,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    address : {
      type : String
    },
    city : {
      type : String
    },
    state :{
      type : String
    },
    zipCode : {
      type :Number
    },
    image : {
      type : String
    },
    payment : {
      type : Boolean
    },
    blockStatus : {
      type : Boolean
    }
  },
  { timestamps: true }
);

userSchema.pre('save', async function(next){
  const salt =await bcrypt.genSalt()
  this.password = await bcrypt.hash(this.password,salt)
  next()
})

const User = mongoose.model("User", userSchema);
module.exports = User;
