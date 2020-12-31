import Axios from "axios"
import { USER_SIGNIN_FAIL, USER_SIGNIN_REQUEST, USER_SIGNIN_SIGNOUT, USER_SIGNIN_SUCCESS } from "../constants/signin"

export const signin=(email,password)=>async(dispatch)=>{
    
    dispatch({type:USER_SIGNIN_REQUEST})
     try{
         const {data}=await Axios.post('/api/users/signin',{email,password})
           
         dispatch({
             type:USER_SIGNIN_SUCCESS,
             payload:data
         })
         
         localStorage.setItem("userInfo",JSON.stringify(data));
     }
     catch(e)
     {   console.log(e)
         dispatch({
             type:USER_SIGNIN_FAIL,
             payload:e.response&&e.response.data.message?e.response&&e.response.data.message:e.message
         })
     }
}
export const signOut=()=>(dispatch)=>{
    localStorage.removeItem('userInfo');

    dispatch({type:USER_SIGNIN_SIGNOUT})
}
export const register=(name,email,password)=>async(dispatch)=>{
    
    dispatch({type:'USER_REGISTER_REQUEST'})
     try{
         const {data}=await Axios.post('/api/users/register',{name,email,password})
           
         dispatch({
             type:'USER_REGISTER_SUCCESS',
             payload:data
         })
         dispatch({
             type:'USER_SIGNIN_SUCCESS',
             payload:data
         })
         
         localStorage.setItem("userInfo",JSON.stringify(data));
     }
     catch(e)
     {   console.log(e)
         dispatch({
             type:'USER_REGISTER_FAIL',
             payload:e.response&&e.response.data.message?e.response&&e.response.data.message:e.message
         })
     }
}