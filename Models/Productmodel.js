const mongoose = require("mongoose");


const productSchema=new mongoose.Schema({
   
    name:{
        type:String,
        required:true},
    brand:{
        type:String,
        required:true
    },
    countProduct:{
         type:Number,
         default:0
    },
    image:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    }


},{timestamps:true,});
const Product=mongoose.model('product',productSchema);
module.exports=Product;