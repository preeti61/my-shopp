const express=require('express');
const data=require('../data.js');
const {ObjectId}=require('mongodb')
const Product=require('../Models/Productmodel.js');
const productRouter=express.Router();


productRouter.get('/',async(req,res)=>{
    try{
         const products=await Product.find({});
       
         res.send(products);
    }
    catch(e)
    {
        res.status(500).send({error:e.message})
    }
})
productRouter.get('/seed',async(req,res)=>{

    try{
        const createdProduct=await Product.insertMany(data.Products);
    
        res.send({createdProduct});
    }
    catch(e)
    {
        res.status(500).send({error:e.message})
    }
    
})
productRouter.get('/:id',async(req,res)=>{
  
    try{
        const product=await Product.find({_id:req.params.id})
        if(product)
        res.send(product);
        else
        throw new Error('product not found')
    }
    catch(e)
    {
        res.status(500).send({error:e.message})
    }
   
})


module.exports=productRouter;