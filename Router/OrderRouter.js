const express=require('express');

const Order = require('../Models/ordermodel.js');
const {isAuth}=require('../utils.js')
const orderRouter=express.Router();
orderRouter.post('/',isAuth,async(req,res)=>{
      
   
    try{
        if(req.body.orderItems.length===0)
        {
          throw new Error('Cart is empty');
        }
    
        else{
            const order=new Order({
                orderItems:req.body.orderItems,
                shippingAddress:req.body.shippingAddress,
                user:req.user._id,
    
                
            })
           
            const createdOrder=await order.save();
           
            res.send({message:"New order Created"})
        }
    }
    catch(e)
    {
        res.status(401).send({message:'Error Creating order'})
    }
   
})
orderRouter.get('/seed',isAuth,async(req,res)=>{

    try{
        const orders=await Order.find({user:req.user._id});
        if(orders.length===0)
        return res.send({});
        console.log('css')
        res.send(orders)
    }
    catch(e)
    {
         res.status(500).send(e)
    }
    
    
})
{

}
module.exports=orderRouter;