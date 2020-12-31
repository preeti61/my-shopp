import {Link} from 'react-router-dom'

import { useEffect } from 'react';
import { useDispatch,useSelector} from 'react-redux';
import {register} from '../actions/user'
import Message from '../MainPage/Message';
const RegisterForm =(props)=> {
   
 const dispatch=useDispatch();
   
   const userSignin=useSelector((state)=>state.userSignin);
    const redirect=props.location.search?props.location.search.split('=')[1]:'/';
   
    const {userInfo,error}=userSignin;
   const onsubmit=(e)=>{
   e.preventDefault();
   let alert=false;
   const name=e.target.elements.name.value;
   const email=e.target.elements.email.value;
   const password=e.target.elements.password.value
   const confirmpassword =e.target.elements.confirmpassword.value
    if(password&&password!==confirmpassword)
    alert('password and error do not match');
    else
     dispatch(register(name,email,password))
     
    };
    useEffect(()=>{
     if(userInfo)
         props.history.push(redirect)
    },[props.history,redirect,
        userInfo])
    
    return(
        <div>
            <main className="row center" onSubmit={onsubmit}>
              
             <form className="signinform"  >
            
                 <div>
                     <h1>Register</h1>
                 </div>
                 <div className="input">
                         <label htmlFor="name">
                             Name
                         </label>
                         <input type="text" placeholder="Enter Name" name="name"/>
                     </div>

                     <div className="input">
                         <label htmlFor="email">
                              Email
                         </label>
                         <input type="email" placeholder="Enter Email" name="email"/>
                     </div>
                     <div className="input">
                         <label htmlFor="password">
                             Password
                         </label>
                         <input type="password" placeholder="Enter Password" name="password"/>
                     </div>
                     <div className="input">
                         <label htmlFor="confirmpassword">
                             Confirm Password
                         </label>
                         <input type="password" placeholder="Re-Enter Password" name="confirmpassword"/>
                     </div>
                     <div>
                         <label/>
                        <button className="primary">Register</button>
                     </div>
                     <p>Already have an account ? <Link to="/signin">Sign-In</Link></p>
             </form>
            </main>
        </div>
    )
   }
    

export default RegisterForm;