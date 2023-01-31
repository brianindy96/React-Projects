// import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import SingleProduct from './pages/SingleProduct'
import { Routes, Route } from "react-router-dom"
import Cart from './pages/Cart'
import Checkout from './pages/CheckOut'
import { useState, useEffect } from "react";
import commerce from './lib/commerce'

function App() {

  const [cart, setCart] = useState({});
  const [products, setProducts] = useState([]);

  // Retrieve Cart

  const fetchCart = async () => {
    const getCart = await commerce.cart.retrieve();

    setCart(getCart);
  }

  // Fetch Products

  const fetchProducts = async () => {
    const products = await commerce.products.list();

    console.log(products.data)
    setProducts(products.data);

  }

  useEffect(() => {
    fetchCart();

    fetchProducts();
  
    console.log(cart);
    console.log(products);
  }, [])
  

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home 
          cart={cart}
          products={products}
        />} />
        <Route path="/product" element={<SingleProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </div>
  )
}

export default App
