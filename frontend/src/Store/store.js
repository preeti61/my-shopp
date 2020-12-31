
import SingleProductReducer from '../Reducers/singleProduct';
import {applyMiddleware, compose, createStore,combineReducers} from 'redux';
import thunk from 'redux-thunk';
import ProductReducer from '../Reducers/product';
import userReducer from '../Reducers/userReducer';
import cartReducer from '../Reducers/cartReducer';
import orderReducer from '../Reducers/orderReducer';
const composeEnhancer=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||compose;
const initialState={
    userSignin:{
        userInfo:localStorage.getItem('userInfo')?JSON.parse(localStorage.getItem('userInfo')):null
       
    },
    cartInfo:{
        cartItem:localStorage.getItem('CartItems')?JSON.parse(localStorage.getItem('CartItems')):[],
        ShippingAddress:localStorage.getItem('shipping')?JSON.parse(localStorage.getItem('shipping')):null
    }
}
const store=createStore(combineReducers({
    productList:ProductReducer,
    product:SingleProductReducer,
    userSignin:userReducer,
    cartInfo:cartReducer,
    orderInfo:orderReducer

}),initialState,composeEnhancer(applyMiddleware(thunk)));
console.log(store.getState())
export default store;