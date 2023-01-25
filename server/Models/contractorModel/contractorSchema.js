const mongoose = require("mongoose");
const bcrypt = require('bcrypt')


const Schema = mongoose.Schema;

const contractorSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    licenseNumber: {
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
    about : {
      type : String
    },
    image : {
      type : String
    },
    blockStatus : {
      type : Boolean
    }
  },
  { timestamps: true }
);

contractorSchema.pre('save', async function(next){
  const salt =await bcrypt.genSalt()
  this.password = await bcrypt.hash(this.password,salt)
  next()
})

const Contractor = mongoose.model("Contractor", contractorSchema);
module.exports = Contractor;
