

export default (state={},action)=>{
    switch(action.type)
    {
        case'PRODUCT_REQUEST':{
            return{
                loading:true
            }
        }
        case 'PRODUCT_SUCCESS':{
            return{
                product:action.payload,
                loading:false
            }
        }
        case 'PRODUCT_FAIL':{
            return{
                error:action.payload,
                loading:false
            }
        }
        default:
            return state;
    }

}