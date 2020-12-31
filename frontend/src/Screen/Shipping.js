import { PromiseProvider } from 'mongoose';
import React from 'react';
import { useDispatch } from 'react-redux';
import {saveShippingAddress} from '../actions/cart'

export default(props)=>{
    const dispatch=useDispatch();
   const onsubmit=(e)=>{
       e.preventDefault();
       const name=e.target.elements.name.value;
       const address=e.target.elements.address.value;
       const city=e.target.elements.city.value;
       const pincode=e.target.elements.pincode.value;
       const state=e.target.elements.state.value;
       const country=e.target.elements.country.value;
       dispatch(saveShippingAddress({name,address,city,pincode,state,country}))
       props.history.push('/OrderScreen');
   }
    return(
        <div>
        <main className="row center" onSubmit={onsubmit}>
          
         <form className="signinform"  >
        
             <div>
                 <h1>Shipping Address</h1>
             </div>
             <div className="input">
                     <label htmlFor="name">
                        Full Name
                     </label>
                     <input type="text" placeholder="Enter Full Name" name="name" required/>
                 </div>

                 <div className="input">
                     <label htmlFor="address">
                          Address
                     </label>
                     <input type="text" placeholder="Enter Address" name="address" required/>
                 </div>
                 <div className="input">
                     <label htmlFor="city">
                         City
                     </label>
                     <input type="text" placeholder="Enter city" name="city" required/>
                 </div>
                 <div className="input">
                     <label htmlFor="pincode">
                         PIN code
                     </label>
                     <input type="text" placeholder="Enter Pincode" name="pincode" required/>
                 </div>
                 <div className="input">
                     <label htmlFor="state">
                        State
                     </label>
                     <input type="text" placeholder="Enter State" name="state" required/>
                 </div>
                 <div className="input">
                     <label htmlFor="country">
                         country
                     </label>
                     <input type="text" placeholder="Enter Country" name="country" required/>
                 </div>
                 <div>
                     <label/>
                    <button className="primary">Continue</button>
                 </div>
                
         </form>
        </main>
    </div>
)
    
}