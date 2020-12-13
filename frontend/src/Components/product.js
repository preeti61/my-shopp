import React from 'react';

const Product=(props)=>{
    const {_id,name,brand,image,price,rating}=props.product;
return(
     
       <div className="card">
              <a href="/"><img className="medium" src={image}/></a>
               <div className="card-body">
                   <a><h2>{name}</h2></a>
                 
                 <div className="rating">
                   <span>
                     <i className="fa fa-star"></i>
                     <i className="fa fa-star"></i>
                     <i className="fa fa-star"></i>
                     <i className="fa fa-star"></i>
                     <i className="fa fa-star"></i>
                   </span>
                 </div>
                 <div className="price">
                     {price}
                 </div>
               </div>
            </div>
    
    
)
}
export default Product;