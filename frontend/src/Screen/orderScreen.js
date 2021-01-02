import { useDispatch, useSelector } from "react-redux"
import {Link} from 'react-router-dom'
import {createOrder} from '../actions/order'
export default(props)=>{
    const shipping=useSelector((state)=>state.cartInfo.ShippingAddress);
    console.log(shipping)
    const cartInfo=useSelector((state)=>state.cartInfo);
    const {cartItem}=cartInfo;
    let sum=0;
    cartItem.forEach((x)=>{
        sum+=x.price*x.qty;
    })
  
   const dispatch=useDispatch();
    const placeorderHandler=(e)=>{
        e.preventDefault();
        dispatch(createOrder({orderItems:cartInfo.cartItem,shippingAddress:cartInfo.ShippingAddress,totalPrice:sum}));
        props.history.push('/cart') 
    }
    return(
      <div>
          <div>
              <main className="row center">
                  <div className="row top col-1">
                       <div className="card card-body lightpink col-1">
                          <h1>Shipping</h1>
                          <div ><strong>Name:</strong> {shipping.name}</div>
                          <div><strong>Address:</strong> {shipping.address },{shipping.city},{shipping.pincode},{shipping.state},{shipping.country}</div>
                       </div>

                       <div className="row ">
                            {cartItem.map((x)=>{
                                return(
                                    <div className="row center card card-body">
                                       <div className="col-2">
                                         <img className="small" src={x.image}/>
                                        </div>
                                    <div className="col-1">
                                     <Link to={`/api/products/${x._id}`}>{x.name}</Link>
                                        </div>
                                        <div className="col-1">
                                     <div>{x.qty*x.price}</div>
                                        </div>
                                    </div>
                                    

                                    )
                            })}
                       </div>
                  </div>
                  <div className="col-2 row top card card-body center">
                   <div className="row">
                       <h1>Total Item(s)</h1>
                       <h1>{cartItem.length}</h1>
                       </div>
                       <div className="row">
                       <h1>Subtotal</h1>
                       <h1>₹{sum}</h1>
                       </div>
                       
                       <button className="primary  " onClick={placeorderHandler}>Place Order</button>
                       
                   </div>
              </main>
          </div>
      </div>
    )
}