import { PromiseProvider } from 'mongoose';
import React,{useEffect, useState} from 'react';
import {addtoCart,removeFromCart} from '../actions/cart'
import { useDispatch,useSelector } from 'react-redux';
import CartItem from '../MainPage/cartItem';
import Message from '../MainPage/Message';
import { Link } from 'react-router-dom';


export default (props)=>{
    const dispatch=useDispatch();
   
 useEffect(()=>{
    if(props.match.params._id)
    {
       dispatch(addtoCart(props.match.params._id,Number(props.location.search.split('=')[1]))) 
    }},[])
    const cartItem=useSelector((state)=>state.cartInfo.cartItem)
    let Subtotal=0,totalItem=0;
    cartItem.forEach((item)=>{
        totalItem+=Number(item.qty)
         Subtotal+=Number(item.price*item.qty)
        
    })
    return(
       <div>
           <Link to="/"><h1>Continue Shopping...</h1></Link>
           
               {
                   cartItem.length===0?(<main class="row center"><Message><h1>Cart is empty</h1>
                   <Link to="/">Go Shopping
                   </Link></Message></main>):(
                       <main class="row center">
                       <div className="col-1">
                       <ul>
                   {cartItem.map((x)=>{
                         return <li key={x._id} className="card card-body">
                             <CartItem x={x} history={props.history} />
                         </li>
                   })}
                   
                   </ul>
                   
                  
                   
                   </div>
                   <div className="col-2 row top card card-body center">
                   <div className="row">
                       <h1>Total Item(s)</h1>
                       <h1>{totalItem}</h1>
                       </div>
                       <div className="row">
                       <h1>Subtotal</h1>
                       <h1>₹{Subtotal}</h1>
                       </div>
                       
                       <Link to={"/signin?redirect=shipping"}><button className="primary block " onClick={()=>{

                       }}>Proceed to Buy</button></Link>
                       
                   </div>
                   
                   </main>
                   )
               }
               
              
              
          
        
       </div>
    )
}