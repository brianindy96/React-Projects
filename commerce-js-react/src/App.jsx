import './App.css'
import Products from './components/Products'
import styled from 'styled-components'
import Navbar from './components/Navbar'
import commerce from "./lib/commerce"
import { useState, useEffect } from "react"
import Cart from './components/Cart'
import {BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Checkout from './components/Checkout'

const Container = styled.div`
  
`


function App() {
  // Products
  const [products, setProducts ] = useState([]);

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);

  }
  


  // Carts
  const [cart, setCart] = useState({});
  
  const fetchCart = async () => {
    const cart = await commerce.cart.retrieve();

    setCart(cart);
  };

  // AddToCart

  const handleAddToCart = async (productId, quantity) => {
    const { cart } = commerce.cart.add(productId, quantity);

    setCart(cart);
  }

  const handleUpdateCartQty = async (productId, quantity) => {
    const { cart } = await commerce.cart.update(productId, { quantity });

    setCart(cart);
  }

  // RemoveFromCart

  const handleRemoveFromCart = async (productId) => {
    const { cart } = await commerce.cart.remove(productId);

    setCart(cart);
  }

  // EmptyCart

  const handleEmptyCart = async () => {
    const { cart } = await commerce.cart.empty();

    setCart(cart)
  }

  // Refresh Cart

  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();

    setCart(newCart);
  }

  // CaptureCheckout

  const [order,setOrder] = useState({})

  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try{
      const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);
      
      setOrder(incomingOrder);
      refreshCart();
      
    } catch(error){
      setErrorMsg(error.data.error.message)
    }
  }

  // Error Message state

  const [errorMsg, setErrorMsg] = useState('');

  // UseEffects for execution

  
  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, [2])

  // console.log(cart.line_items);

  return (
    <Container>
      <Navbar
      totalItems={cart.total_items}
      />
      <Routes>
        <Route path="/" element={
          <Products 
            cart={cart}
            products={products}
            onAddToCart={handleAddToCart}
          />
        } />
        <Route 
        path="/cart" 
        element={<Cart 
          cart={cart}
          handleUpdateCartQty={handleUpdateCartQty}
          handleRemoveFromCart={handleRemoveFromCart}
          handleEmptyCart={handleEmptyCart}
          />} />
          <Route path="/checkout" element={<Checkout
          cart={cart}
          order={order}
          onCaptureCheckout={handleCaptureCheckout}
          error={errorMsg}
          />}>
            
          </Route>
      </Routes>      
    </Container>
  )
}

export default App
