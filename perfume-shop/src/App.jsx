import { useState, useEffect } from 'react'
import './App.css'
import Cart from './components/Cart'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Products from './components/Products'
import { commerce } from "./lib/commerce";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  
  const fetchProducts = async () => {
    // returns a promise
    const { data } = await commerce.products.list();

    setProducts(data);

  }

  const fetchCart = () =>{
    commerce.cart.retrieve()
      .then((cart) => {
        setCart(cart);
      })
      .catch((error) => {
        console.log("There was an error fetching the cart", error);
      });

    
  }

  const handleAddToCart = (productId, quantity) =>{
    commerce.cart.add(productId, quantity)
      .then((item) =>{
        setCart(item.cart);
      }).catch((error) =>{
        console.error("There was an error adding the item to the cart", error);
      });
    
  }



  useEffect(() => {
    fetchProducts();
    fetchCart();

    

  }, []);

  console.log(typeof(cart.line_items));  
  // Objects of our products in commerce.js

  return (
    <div className="App">
      <Navbar totalItems={cart.total_items}/>
      {/* <Products products={products} onAddToCart={handleAddToCart} /> */}
      {/* {Object.keys(cart.line_items).map((key, index) =>{(
          <div key={index}>
              {key}: {cart.line_items[key]}
          </div>
      )})}; */}
      <Footer />
    </div>
  )
}

export default App
