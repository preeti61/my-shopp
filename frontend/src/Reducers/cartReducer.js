
export default(state={cartItem:[]},action)=>{
    switch(action.type)
    {
        case 'ADD_CART_ITEM':
            const item=action.payload;
            const existItem=state.cartItem.find((x)=>{
               return  x._id===item._id
            })
            if(existItem)
              {
                  return{
                      ...state,
                      cartItem:state.cartItem.map(x=>x._id===existItem._id?item:x)
                  }
              }
              else
              return{
                  ...state,cartItem:[...state.cartItem,item]
              }

      case  'REMOVE_FROM_CART':
          return{...state,
              cartItem:state.cartItem.filter((item)=>{
                  return !(item._id===action.payload)
              })
          }
      case 'SAVE_SHIPPING_ADDRESS':
          return{
              ...state,
              ShippingAddress:action.payload
          }
      case 'CART_EMPTY':
          return{
              ...state,
              cartItem:[]
          }
           
            default:
                return state;
    }
    

}