const express =require('express');
const dotenv=require('dotenv');
dotenv.config();
const port=process.env.PORT||5000
const app=express();

const User=require('./Models/Usermodel.js')
const userRouter=require('./Router/UserRouter.js');
const productRouter=require('./Router/ProductRouter.js');
const orderRouter=require('./Router/OrderRouter.js');
const mongoose =require('mongoose');

app.use(express.json());
app.use(express.urlencoded({extended:true}));
mongoose.connect(process.env.MONGODB_URL||'mongodb://127.0.0.1:27017/myshopp',
{useCreateIndex:true,
  useUnifiedTopology:true,
  useNewUrlParser:true
});


   
  
app.use('/api/users',userRouter);
app.use('/api/products',productRouter);
app.use('/api/order',orderRouter);
app.get('/',(req,res)=>{
    res.send("Server Ready")
})

if(process.env.NODE_ENV==='production')
{
  app.use(express.static('frontend/public'))
}

app.listen(port,()=>{
    console.log("server is up at port 5000")
})