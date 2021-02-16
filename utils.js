const jwt=require('jsonwebtoken');

const generateToken=({_id,name,email,isAdmin})=>{
  
    return jwt.sign(
        {
            _id,
            name,
            email,
            isAdmin
        },process.env.JWT_SECRET||'somethingdifferent',
        {
            expiresIn:'30d'
        }
    )
}

const isAuth=(req,res,next)=>{
   
    const authorization=req.headers.authorization;
    

    if(authorization)
    {
        const token=authorization.slice(7,authorization.length);
      
        jwt.verify(token,process.env.JWT_SECRET||'somethingdifferent',(err,decode)=>{
            if(err)
            res.status(401).send({message:'Invalid Token'})
            else
            {
                req.user=decode;
              
                next()
            }
            
        })
    }
    else
    res.status(401).send({message:'No token'})
}
module.exports={generateToken,isAuth};