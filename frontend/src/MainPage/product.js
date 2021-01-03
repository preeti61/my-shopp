import React from 'react';
import Rating from './rating'
import {Link} from 'react-router-dom'
const Product=(props)=>{
    const {_id,name,image,price,rating}=props.product;
return(
     
       <div className="card">
              <Link to={`/api/products/${_id}`}><img className="medium" src={image}/></Link>
               <div className="card-body">
               <Link to={`api/products/${_id}`}><h2>{name}</h2></Link>
                    <Rating rating={rating} />
                 <div className="price">
                 ₹{price}
                 </div>
               </div>
            </div>
    )
}
export default Product;