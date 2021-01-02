import {  useState } from "react"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { addtoCart, removeFromCart } from "../actions/cart"


export default (props)=>{
  const [qty,setQty]=useState(props.x.qty)
  const dispatch=useDispatch()
  return(
    <div className="row center">
      <div className="col-2">
        <img className="small" src={props.x.image}/>
      </div>
      <div className="col-1">
        
       <p>{props.x.name}</p>
      </div>
      <div className="col-2">
      <select value={qty} onChange={(e)=>{
        setQty(e.target.value)
        dispatch(addtoCart(props.x._id,e.target.value))
        props.history.push(`/cart/${props.x._id}`)}} >
                                        {
                                            [...Array(props.x.countProduct).keys()].map((count)=>{
                                                    return <option key={count+1}>{count+1}</option>
                                            })
                                        }
                                       </select>
      </div>
      <div className="col-2">
₹{props.x.price*props.x.qty}
      </div>
      <div className="col-2">
         <button class="cartButton" onClick={()=>{
           dispatch(removeFromCart(props.x._id))
         }}>Remove</button>
      </div>
      
    </div>
  )
}