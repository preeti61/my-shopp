import Axios from 'axios';
import React from 'react';
export const addtoCart=(productId,qty)=>async(dispatch,getState)=>{
    
    const {data}=await Axios(`/api/products/${productId}`)
   
    dispatch({
        type:'ADD_CART_ITEM',
        payload:{
            ...data[0],
            qty
        }
    })
    localStorage.setItem('CartItems',JSON.stringify(getState().cartInfo.cartItem))


}

export const removeFromCart=(productId)=>async(dispatch,getState)=>{
    dispatch({
        type:'REMOVE_FROM_CART',
        payload:productId
    })
    localStorage.setItem('CartItems',JSON.stringify(getState().cartInfo.cartItem))
}

export const saveShippingAddress=(data)=>(dispatch,getState)=>{
    dispatch({
        type:'SAVE_SHIPPING_ADDRESS',
        payload:data
    })
    localStorage.setItem('shipping',JSON.stringify(getState().cartInfo.ShippingAddress))
}


