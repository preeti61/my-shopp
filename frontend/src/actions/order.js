
const Axios =require( "axios");

 const createOrder=(order)=>async(dispatch,getState)=>{
    dispatch({
        type:'ORDER_CREATE_REQUEST'
    })
    try{
        const {userSignin:{userInfo}}=getState()
        const {data}=await Axios.post('/api/order',order,{
            headers:{
                Authorization:`Bearer ${userInfo.token}`
            },
        })
        
        dispatch({
            type:'ORDER_CREATE_SUCCESS',
            payload:data
        })
        dispatch({
            type:'CART_EMPTY'
        })
        localStorage.removeItem('CartItems')
    }
    catch(error){
        dispatch({type:'ORDER_CREATE_FAIL',
        payload:error.response&&error.response.data.message?error.response.data.message:error.message})
    }
}

 const getOrder=()=>async(dispatch,getState)=>{
  

    try{
        const {userSignin:{userInfo}}=getState();
        const {data}=await Axios.get('/api/order/seed',{
            headers:{
                Authorization:`Bearer ${userInfo.token}`
            },
        })
        console.log(data)
        dispatch({
            type:'FETCH_ORDER_SUCCESS',
            payload:data
        })
    }
    catch(error)
    {
         dispatch({
             type:'FETCH_ORDERS_FAIL',
             payload:error.response&&error.response.data.message?error.response.data.message:error.message
         })
    }
    
}
module.exports={createOrder,getOrder}