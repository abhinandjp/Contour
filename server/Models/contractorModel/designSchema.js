const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const designSchema = new Schema(
    {
      designName: {
        type: String,
        required: true,
      },
      description : [{
        type :String,
        required : true
      }],
      cost: {
        type: String,
        required: true,
      },
    },
    { timestamps: true }
  );
  

const Designs = mongoose.model("Designs", designSchema);
module.exports = Designs;
