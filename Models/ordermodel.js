const mongoose=require('mongoose');
const orderSchema=new mongoose.Schema({
    orderItems:[{
        name:{
            type:String,
            required:true
        },
        qty:{
            type:Number,
            required:true
        },
        image:{
            type:String,
            required:true
        },
        price:{
            type:Number,
            required:true
        },
        _id:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'Product',
            required:true
        }
    }]
    ,shippingAddress:{
       
        address:{
            type:String,
            required:true
        },
        city:{
            type:String,
            required:true
        },
       pincode:{
            type:String,
            required:true
        },
        state:{
            type:String,
            required:true
        },
        country:{
            type:String,
            required:true
        },
        name:{
            type:String,
            required:true
        }
    },
    totalPrice:{
        type:Number,
        required:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
  
    isPaid:
    {    type:Boolean,
         default:false}

    
},{
    timestamps:true
})
const Order=mongoose.model('Order',orderSchema);
module.exports=Order;