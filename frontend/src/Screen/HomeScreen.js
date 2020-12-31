

import Product from '../MainPage/product';

import { useEffect  } from 'react';
import Loading from '../MainPage/Loading';
import Message from '../MainPage/Message';
import {useSelector,useDispatch} from 'react-redux';
import { listProducts} from '../actions/product';

function App() {
  const dispatch=useDispatch();
  const productList=useSelector((state)=>state.productList);

const {loading,error,products}=productList;

  useEffect(()=>{
 dispatch(listProducts())},[]);
  if(products){
  return (
        <div>
         {loading ?(
          <Loading></Loading>):error?(
             <Message variant={"danger"}>{error}</Message>
           ):
           (
           <main className="row center">
          {
            products.map((product)=>{
              return <Product product={product} key={product._id}/>
            })
          }
        </main>)
         }
         
       </div>
  );
        }
        else
        return(
          <div>
             <Message variant="danger">{error}</Message>
          </div>
        )
        
}

export default App;
