import { useSelector } from "react-redux"
import Message from '../MainPage/Message'
export default ()=>{

     
    const orderInfo=useSelector(state=>state.orderInfo)
    const {orders,error}=orderInfo
     

    return (
        <div>
            {error?<Message variant="danger">{error}</Message>:(<main className="row center">
                <table className="table">
                    <thead>
                        <tr>
                          <td>ID</td>
                          <td>Date</td>
                          <td>Price</td>
                          <td>Paid</td>
                          <td>Actions</td>
                        </tr>
                    </thead>
                    <tbody>
                        
                            {orders.map((order)=>{
                                return(<tr>
                                    <td>{order._id}</td>
                                    <td>{order.isPaid}</td>
                                    <td>{order.totalPrice}</td>
                                </tr>
                                    
                                )
                            })}
                        
                    </tbody>
                </table>
            </main>)}
            
        </div>
    )

}
    
    