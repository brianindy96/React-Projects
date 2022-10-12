import React from 'react'
import commerce from './lib/commerce';
import { useState, useEffect } from 'react';
import Products from './components/Products';
import Cart from './components/Cart';
import Navbar from './components/Navbar';
import { Routes, Route } from "react-router"
import Announcement from './components/Announcement';
import Checkout from './components/Checkout';

const App = () => {

  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [order,setOrder] = useState({});
  const [errorMessage, setErrorMessage]= useState('');

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

  const handleUpdateCartQty = (lineItemId, quantity) => {
    commerce.cart.update(lineItemId, { quantity }).then((resp) => {
      setCart(resp.cart);
    }).catch((error) => {
      console.log('There was an error updating the cart items', error);
    });
  };

  const handleRemoveFromCart = (lineItemId) => {
    commerce.cart.remove(lineItemId).then((resp) => {
      setCart(resp.cart);
    }).catch((error) => {
      console.error('There was an error removing the item from the cart', error);
    });
  }

  const handleEmptyCart = () => {
    commerce.cart.empty().then((resp) => {
      setCart(resp.cart);
    }).catch((error) => {
      console.error('There was an error emptying the cart', error);
    });
  }

  // once transaction finished, use refreshCart to refresh Cart
  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();

    setCart(newCart);
  }

   const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try{
      const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder)
    
      setOrder(incomingOrder);

      refreshCart();

    } catch(error){
      setErrorMessage(error.data.error.message);
    } 

   }

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  

  return (
    <div className="app">
      <Navbar 
      totalItems={cart.total_items} />
      <Announcement />
      <Routes>
        <Route exact path='/' element={<Products products = {products} onAddToCart = {handleAddToCart}/>} />
        <Route exact path='/cart' element={<Cart 
        cart={cart} 
        onUpdateCartQty={handleUpdateCartQty} 
        onEmptyCart={handleEmptyCart} 
        onRemoveFromCart={handleRemoveFromCart} 
        />} />
        <Route exact path="/checkout" element={
        <Checkout 
        cart={cart}
        order={order}
        onCaptureCheckout={handleCaptureCheckout}
        error={errorMessage}
         />
        } /> 
      </Routes> 
    </div>
  )
}

export default App
