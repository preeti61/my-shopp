const express=require('express');
const data=require('../data');
const User=require('../Models/Usermodel');
const userRouter=express.Router();
const bcrypt=require('bcryptjs' );
const {generateToken}=require('../utils.js')
userRouter.get('/add',async(req,res)=>{
  try{
      const createdUsers=await User.insertMany(data.Users);
      res.send({createdUsers});
  }
  catch(e)
  {
    res.status(500).send({message:e.message})
  }
})
userRouter.post('/signin',async(req,res)=>{

  try{
    const user=await User.findOne({email:req.body.email})
    
   if(user)
   {
    if( bcrypt.compareSync(req.body.password,user.password))
    {
      res.send({
        _id:user._id,
        name:user.name,
        email:user.email,
        isAdmin:user.isAdmin,
        token:generateToken(user)

      })
  }
  
    }
    else
    throw new Error('Invalid email or password')
   }
   catch(e){
    
     res.status(401).send(e.message);
   }
})


userRouter.post('/register',async(req,res)=>{
  const user=new User({name:req.body.name,
  email:req.body.email,
   password:bcrypt.hashSync(req.body.password,8)})
   const createdUser=await user.save();
   res.send({_id:user._id,
    name:user.name,
    email:user.email,
    isAdmin:user.isAdmin,
    token:generateToken(user)})
})
module.exports=userRouter;