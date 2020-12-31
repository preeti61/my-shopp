export default (state={},action)=>{

    switch(action.type)
    {
        case 'ORDER_CREATE_REQUEST':
           return {
                loading:true
            }
            case 'ORDER_CREATE_SUCCESS':
                return{
                    loading:false,
                    order:action.payload
                }
            case 'ORDER_CREATE_FAIL':
                return{
                    loading:false,
                    error:action.payload
                }

            case 'ORDER_RESET':
                return{

                }
            case 'FETCH_ORDER_SUCCESS':
                return{
                    orders:action.payload
                }
                case 'FETCH_ORDER_FAIL':
                    return{
                        error:action.payload
                    }
            default:
                return state;
    }

}