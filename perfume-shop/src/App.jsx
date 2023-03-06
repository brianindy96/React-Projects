// import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import SingleProduct from './pages/SingleProduct'
import { Routes, Route } from "react-router-dom"
import Cart from './pages/Cart'
import Checkout from './pages/CheckOut'
import { useState, useEffect } from "react";
import commerce from './lib/commerce'
import { ToastContainer, toast } from 'react-toastify';

function App() {

  const [cart, setCart] = useState({});
  const [order, setOrder] = useState({})
  const [errorMsg, setErrorMsg] = useState('')


  // Retrieve Cart

  const fetchCart = async () => {
    const getCart = await commerce.cart.retrieve();

    setCart(getCart);
  }

  // EmptyCart

  const handleEmptyCart = async () => {
    toast.info('Emptying cart', {
      autoClose: 2800,
    });

    const empty = await commerce.cart.empty();

    setCart(empty);
  }
  

  // Add to Cart

  const handleAddToCart = async (productId, quantity) => {
    toast.info('Adding item to cart');

    const item = await commerce.cart.add(productId, quantity);

    toast.success(`${item.product_name} has been added to cart`, {
      autoClose: 1000,
      hideProgressBar: true,
    });

    setCart(item.cart)
  }

  // Update Cart Quantity

  const handleUpdateCartQty = async (lineItemId, quantity) => {
    toast.info('Updating Cart', {
      autoClose: 2700,
      hideProgressBar: false,
    });

    const item = await commerce.cart.update(lineItemId, { quantity });


    setCart(item.cart)
  }

  // Remove from Cart

  const handleRemoveFromCart = async (lineItemId) => {
    toast.info('Removing item from cart', {
      autoClose: 2500,
      hideProgressBar: false,
    });

    const item = await commerce.cart.remove(lineItemId);

    setCart(item.cart)
  }

  // Delete Product from cart

  const handleDeleteFromCart = async () => {
    toast.info(`Deleting all items from cart`, {
      autoClose: 2700,
      hideProgressBar: false,
    });

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
        onEmptyCart={handleEmptyCart}
        />} />
        <Route path="/checkout" element={<Checkout 
        cart={cart}
        order={order}
        onCaptureCheckout={handleCaptureCheckout}
        error={errorMsg}
        />} />
      </Routes>
      <ToastContainer
        position="bottom-right"
        autoClose={3800}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        theme="light"
      />
      
    </div>
  )
}

export default App
