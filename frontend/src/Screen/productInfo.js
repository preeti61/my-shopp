
import {useEffect, useState} from 'react';
import Rating from '../MainPage/rating';
import {useSelector,useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import { detailsProduct } from '../actions/product';
import Message from '../MainPage/Message';

const ProductInfo=(props)=>{
    const dispatch=useDispatch();
    const productDetails=useSelector(state=>state.product)
    const [qty,setQty]=useState(1);
    const {loading,error,product}=productDetails;
   
    useEffect(()=>{
        dispatch(detailsProduct(props.match.params._id))},[]);
 
    if(product){
        console.log(product)
        const {countProduct,image,name,rating,brand,price,description}=product.data[0];

        const addtoCartHandler=()=>{
            props.history.push(`/cart/${props.match.params._id}?qty=${qty}`)
        }
    return(
        <div>
            
            <main className="row center">
                <div className="darkBlueYellow"> <Link   to="/"><h1>Back to Main Page</h1></Link></div>
           
            <div className="row top">
               <div className="col-6">
                    <img className="large" src={image}/>
               </div>
               <div className="col-3">
                    <ul>
                        <li><h1>{name}</h1></li>
                        <li><Rating rating={rating}/></li>
                        <li> <div className="row">
                            <div>Price</div>
                            <div>{price}</div>
                            </div></li>
                        <li><div className="row">
                            <div>Brand</div>
                            <div>{brand}</div>
                            </div></li>
                        <li><div className="row">
                            <div>Description</div>
                            <div>{description}</div>
                            </div></li>
                    </ul>
               </div>
               <div className=" col-3">
                     <div className="status card card-body">
                        <ul>
                            <li>
                                <div className="row">
                                      <div>Price</div>
                                      <div className="price">{price}</div>
                                </div>
                            </li>
                            <li>
                                <div className="row">
                                      <div>Status</div>
                                      <div >
                                      {countProduct>0?(
                                          <span className="success">In Stock</span>
                                      ):(
                                          <span className="error">Unavailable</span>
                                      )}
                                      </div>
                                </div>
                            </li>
                             
                             {
                                 countProduct&&(<li><div className="row">
                                       <div>
                                       Qty
                                       </div>
                                       <div>
                                       <select value={qty} onChange={(e)=>setQty(e.target.value)} >
                                        {
                                            [...Array(countProduct).keys()].map((count)=>{
                                                    return <option key={count+1}>{count+1}</option>
                                            })
                                        }
                                       </select>
                                       </div>
                                    </div></li>)
                             }

                            <li>
                                <div className="row" >
                                    <button className="primary block"
                                     disabled={countProduct===0} 
                                      onClick={addtoCartHandler}
                                >Add to cart</button></div>
                                
                            </li>
                        </ul>
                     </div>
                    
               </div>
         </div>
        
            </main>
         </div>
        )

    }
    else
    return(<div>
        <Message variant="danger">{error}</Message>
    </div>)
    
}
export default ProductInfo;