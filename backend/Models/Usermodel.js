const mongoose=require('mongoose');
const validator=require('validator')
const UserSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        validate(val){
            if(!validator.isEmail(val))
            throw new Error("Enter a valid Email");
        }
    },
    password:{
        type:String,
        required:true
    },
    isAdmin:{
        type:Boolean,
        default:false,
        required:true
    }
},{
    timestamps:true
});

const User=mongoose.model('User',UserSchema);
module.exports=User;