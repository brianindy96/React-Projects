import './App.css'
import Products from './components/Products'
import styled from 'styled-components'
import Navbar from './components/Navbar'
import commerce from "./lib/commerce"
import { useState, useEffect } from "react"
import Cart from './components/Cart'

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
    const item = commerce.cart.add(productId, quantity);

    setCart(item.cart);
  }


  // UseEffects for execution

  
  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, [])

  console.log(cart.line_items);

  return (
    <Container>
      <Navbar
      totalItems={cart.total_items}
      />
      {/* <Products 
      products={products}
      onAddToCart={handleAddToCart}
      /> */}
      <Cart cart={cart}/>
    </Container>
  )
}

export default App
