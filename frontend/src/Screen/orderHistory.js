import { useDispatch, useSelector } from "react-redux"


import {Link} from 'react-router-dom';
export default ()=>{
   
    const orders=useSelector(state=>state.orderInfo.orders)
   
    return(
        <div>
            <main className="row center">
              <table>
                  <thead>
                     <tr>
                         <td>ORDER_ID</td>
                         <td>Paid Status</td>
                         <td>Total Price</td>
                         <td>Shipping Address</td>
                     </tr>
                  </thead>
                  <tbody>
                     {orders&&(orders.map((order)=>{
                         const {city,name,country,state,pincode}=order.shippingAddress
                         return(
                         
                         <tr>
                             <td>{order._id}</td>
                             <td>{order.isPaid?"Yes":"No"}</td>
                             <td>₹{order.totalPrice}</td>
                             <td>{name , city, pincode ,state ,country }</td>
                             <Link to={`/orderDetails/${order._id}`}><button className="primary" >Details</button></Link>
                         </tr>)
                     }))}
                  </tbody>
              </table>
            </main>
        
        </div>
    )
}