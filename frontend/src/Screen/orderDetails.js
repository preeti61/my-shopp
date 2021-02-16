import { PromiseProvider } from "mongoose"
import { useSelector } from "react-redux"
import {Link} from 'react-router-dom'
export default (props)=>{
      
    const orders=useSelector(state=>state.orderInfo.orders)
       
    const order=orders.filter((x)=>{
       return x._id===props.match.params._id
    })
    console.log(order[0])
    const {orderItems,shippingAddress}=order[0]
    return(
        <div>
        <main className="row center">
            <div className="row top col-1">
                 <div className="card card-body lightpink col-1">
                    <h1>Shipping</h1>
                    <div ><strong>Name:</strong> {shippingAddress.name}</div>
                    <div><strong>Address:</strong> {shippingAddress.address },{shippingAddress.city},{shippingAddress.pincode},{shippingAddress.state},{shippingAddress.country}</div>
                 </div>

                 <div className="row ">
                      {orderItems.map((x)=>{
                          return(
                              <div className="row center card card-body">
                                 <div className="col-2">
                                   <img className="small" src={x.image}/>
                                  </div>
                              <div className="col-1">
                              <Link to={`api/products/${x._id}`}>{x.name}</Link>
                                  </div>
                                  <div className="col-1">
                               <div>₹{x.qty*x.price}</div>
                                  </div>
                              </div>
                              

                              )
                      })}
                 </div>
            </div>
            </main>
            </div>
    )
    
}