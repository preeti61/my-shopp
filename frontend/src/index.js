import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HomeScreen from './Screen/HomeScreen';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter,Route,Switch,NavLink } from 'react-router-dom';
import ProductInfo from './Screen/productInfo';
import Header from './MainPage/Header';
import Footer from './MainPage/footer';
import store from './Store/store';
import {Provider,useSelector} from 'react-redux';
import SigninScreen from './Screen/Signin'
import CartScreen from './Screen/CartScreen';
import RegisterForm from './Screen/register';
import ShippingScreen from './Screen/Shipping';
import OrderScreen from './Screen/orderScreen';
import orderHistory from './Screen/orderHistory';
const Routes=()=>{
  const userSignin=useSelector(state=>state.userSignin)
  const {userInfo}=userSignin;
  console.log(userInfo)
  return(
<BrowserRouter>
  <div className="our-container">
    <Header />
    <Switch>
       <Route path="/" component={HomeScreen} exact={true}/>
       <Route path="/api/products/:_id" component={ProductInfo} exact={true}/>
       <Route path="/signin" component={SigninScreen}></Route>
       <Route path="/cart" component={CartScreen} exact={true}/>
       <Route path="/cart/:_id" component={CartScreen} exact={true}/>
       <Route path="/register" component={RegisterForm} exact={true}/>
       <Route path="/shipping" component={ShippingScreen} exact={true}/>
       <Route path="/orderScreen" component={OrderScreen} exact={true}/>
       <Route path="/orderHistory" component={orderHistory}/>
    </Switch>
    <Footer/>
  </div>
  </BrowserRouter>
  )
  
}

ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
    <Routes/>
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
  
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
