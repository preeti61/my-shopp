

import Product from './Components/product';
import Products from './data';
import Header from './Components/Header';
import Footer from './Components/footer';
function App() {
 
  return (
    <div className="grid-container">
         <Header/>
           
           <main className="row center">
             {
               Products.map((product)=>{
                 return <Product product={product} key={product._id}/>
               })
             }
           </main>
       <Footer/>
       </div>
  );
}

export default App;
