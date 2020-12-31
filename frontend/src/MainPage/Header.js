import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import {signOut} from '../actions/user';
import {getOrder} from '../actions/order';
const Header=(props)=>{
    const dispatch=useDispatch();
    const cartItem=useSelector((state)=>state.cartInfo.cartItem)
    const userSignin=useSelector((state)=>state.userSignin);
    const {userInfo}=userSignin;
    const signOutHandler=()=>{
        dispatch(signOut())
    }
    const fetchOrders=()=>{
        dispatch(getOrder())
    }
    return(
        <div>
            <header className="row">
        <div className="brand" >
            <Link to="/">My Shopp</Link>
             </div>
       
          <div>
              <Link to="/cart" className="Link">{cartItem.length>0&&(<span className="cartItems">
              {cartItem.length}
              </span>)}<i className="fa fa-shopping-cart"/></Link>
              {userInfo?(<div className="dropdown"><Link to="#" className="Link ">{userInfo.name} <i className="fa fa-caret-down"/></Link>
              <ul className="dropdown-content">
                  <Link to="#signout" onClick={signOutHandler} className="Link merge">Sign Out </Link>
                  <Link  to="/orderHistory" onClick={fetchOrders} className="Link merge">Orders</Link>
                  </ul></div>):(<Link to="/signin" className="Link">SignIn</Link>)}
               
              </div>
       
       </header>
        </div>
    )
}
export default Header;