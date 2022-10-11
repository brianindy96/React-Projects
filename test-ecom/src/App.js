import React from 'react'
import commerce from './lib/commerce';
import { useState, useEffect } from 'react';
import Products from './components/Products';
import Cart from './components/Cart';
import Navbar from './components/Navbar';
import { Routes, Route } from "react-router"

const App = () => {

  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  const fetchProducts = () => {
    commerce.products.list().then((products) => {
      setProducts(products.data);
    }).catch((error) => {
      console.log('There was an error fetching the products', error)
    });
  }

  const fetchCart = () => {
    commerce.cart.retrieve().then((cart) => {
      setCart(cart);
    }).catch((error) => {
      console.log('There was an error fetching the cart', error);
    });
  }

  const handleAddToCart = (productId, quantity) => {
    commerce.cart.add(productId, quantity).then((item) => {
      setCart(item.cart);
    }).catch((error) => {
      console.error('There was an error adding the item to the cart', error);
    });
  }

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  console.log(cart);
  

  return (
    <div className="app">
      <Navbar 
      totalItems={cart.total_items} />
      <Routes>
        <Route path='/' element={<Products products = {products} onAddToCart = {handleAddToCart}/>} />
        <Route path='/cart' element={<Cart cart={cart} />} />
      </Routes> 
    </div>
  )
}

export default App
