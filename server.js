const express =require('express');
const dotenv=require('dotenv');
const path=require('path')
dotenv.config();

const app=express();

const User=require('./Models/Usermodel.js')
const userRouter=require('./Router/UserRouter.js');
const productRouter=require('./Router/ProductRouter.js');
const orderRouter=require('./Router/OrderRouter.js');
const mongoose =require('mongoose');
app.get('/',(req,res)=>{
  res.send('server Ready')
})
app.use(express.json());
app.use(express.urlencoded({extended:true}));
mongoose.connect(process.env.MONGODB_URL,
{useCreateIndex:true,
  useUnifiedTopology:true,
  useNewUrlParser:true
});


   
  
app.use('/api/users',userRouter);
app.use('/api/products',productRouter);
app.use('/api/order',orderRouter);

const port=process.env.PORT||5000;

if(process.env.NODE_ENV==='production')
{
  app.use(express.static('frontend/build'));
  app.get('*',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'frontend','build','index.html'))
  })
}

app.listen(port,()=>{
    console.log("server is up at port "+port)
})