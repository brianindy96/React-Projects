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
  const [order, setOrder] = useState({})
  const [errorMsg, setErrorMsg] = useState('')


  // Retrieve Cart

  const fetchCart = async () => {
    const getCart = await commerce.cart.retrieve();

    setCart(getCart);
  }

  // Fetch Products

  

  // Add to Cart

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);

    setCart(item.cart)
  }

  // Update Cart Quantity

  const handleUpdateCartQty = async (lineItemId, quantity) => {
    const item = await commerce.cart.update(lineItemId, { quantity });

    setCart(item.cart)
  }

  // Remove from Cart

  const handleRemoveFromCart = async (lineItemId) => {
    const item = await commerce.cart.remove(lineItemId);

    setCart(item.cart)
  }

  // Delete Product from cart

  const handleDeleteFromCart = async () => {
    const item = await commerce.cart.delete();

    setCart(item.cart);
  }

  // RefreshCart

  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();

    setCart(newCart);
  }

  // Handle Capture Checkout

  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
        const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);

        setOrder(incomingOrder);

        refreshCart();


      } catch(error){
          console.log("There is an error");
      }
    }




  useEffect(() => {

    fetchCart();

  }, [])
  
  

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home 
          cart={cart}
          onAddToCart={handleAddToCart}
          onUpdateCartQty={handleUpdateCartQty}
          onRemoveFromCart={handleRemoveFromCart}
        />} />
        <Route path="/:id" element={<SingleProduct
        onUpdateCartQty={handleUpdateCartQty}
        cart={cart}
        onAddToCart={handleAddToCart}
        onRemoveFromCart={handleRemoveFromCart}
        />} />
        <Route path="/cart" element={<Cart 
        cart={cart}
        onUpdateCartQty={handleUpdateCartQty}
        onRemoveFromCart={handleRemoveFromCart}
        onDeleteFromCart={handleDeleteFromCart}
        />} />
        <Route path="/checkout" element={<Checkout 
        cart={cart}
        order={order}
        onCaptureCheckout={handleCaptureCheckout}
        error={errorMsg}
        />} />
      </Routes>
    </div>
  )
}

export default App
