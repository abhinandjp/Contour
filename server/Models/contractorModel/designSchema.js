const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const designSchema = new Schema(
    {
      email : {
        type : String,
        required : true
      },
      designName: {
        type: String,
        required: true,
      },
     
      description : [{
        type :String,
        required : true
      }],
      image1 :{
        type : String
      },
      image2 :{
        type : String
      },
      image3 :{
        type : String
      },
      cost: {
        type: String,
        required: true,
      },
    },
    { timestamps: true }
  );
  

const Designs = mongoose.model("Designs", designSchema);
module.exports = Designs;
