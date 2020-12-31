export default (state={},action)=>{
    switch(action.type){
        case 'USER_SIGNIN_REQUEST':
            return {loading:true}
        case 'USER_SIGNIN_SUCCESS':{
          
            return {
                userInfo:action.payload,
                loading:false
            }
        }
        case 'USER_SIGNIN_FAIL':{
            return{
                loading:false,
                error:action.payload
            }
        }
        case 'USER_SIGNIN_SIGNOUT':{
            return{}
        }
        case 'USER_REGISTER_REQUEST':
            return {loading:true}
        case 'USER_REGISTER_SUCCESS':{
          
            return {
                userInfo:action.payload,
                loading:false
            }
        }
        case 'USER_REGISTER_FAIL':{
            return{
                loading:false,
                error:action.payload
            }
        }
       
        default:
            return state;
    }
}

