
import { PRODUCT_FAIL, PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_REQUEST, PRODUCT_SUCCESS } from '../constants/product'
import axios from 'axios'
export const listProducts=()=>{
    return async(dispatch)=>{
        dispatch({
            type:PRODUCT_LIST_REQUEST
        });

        try{
            const {data}=await axios.get('/api/products');
           console.log(data)
            dispatch({
                type:PRODUCT_LIST_SUCCESS,
                payload:data
            })
        }
        catch(e)
        {
               dispatch({
                   type:PRODUCT_LIST_FAIL,
                   payload:e.message
               })
        }
    }
}
export const detailsProduct=(productId)=>{
    return async(dispatch)=>{
        dispatch({
            type:PRODUCT_REQUEST,
            payload:productId
        })
        try{
            const data=await axios.get(`/api/products/${productId}`);
            console.log(data)
            dispatch({
                type:PRODUCT_SUCCESS,
                payload:data
            })
        }
        catch(e){
            dispatch({
                type:PRODUCT_FAIL,
                payload:e.response&&e.response.data.message?e.response&&e.response.data.message:e.message
            })
        }
    }
}