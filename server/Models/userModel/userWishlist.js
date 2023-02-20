const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const wishlistSchema = new Schema(
    {
      email : {
        type : String,
        required : true
      },
      designId : {
        type:String
      },
      items : {
        type : Object
      }
     
    },
    { timestamps: true }
  );

const Wishlist = mongoose.model("Wishlist", wishlistSchema);
module.exports= Wishlist

