import {Link} from 'react-router-dom'

import { useEffect } from 'react';
import { useDispatch,useSelector} from 'react-redux';
import {signin} from '../actions/user'
import Message from '../MainPage/Message';
const SignInForm =(props)=> {
   
 const dispatch=useDispatch();
   
   const userSignin=useSelector((state)=>state.userSignin);
    const redirect=props.location.search?props.location.search.split('=')[1]:'/';
    
    const {userInfo,error}=userSignin;
   const onsubmit=(e)=>{
   e.preventDefault();
   const email=e.target.elements.email.value;
   const password=e.target.elements.password.value
 
    dispatch(signin(email,password))

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
             <div>{error&&  <Message variant="danger">{error}</Message>}</div>
                 <div>
                     <h1>Signin</h1>
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

                     <div>
                         <label/>
                        <button className="primary">Sign In</button>
                     </div>
                     <p>Do not have an account ? <Link to={`/register?redirect=${redirect}`}>Register</Link></p>
             </form>
            </main>
        </div>
    )
   }
    

export default SignInForm;