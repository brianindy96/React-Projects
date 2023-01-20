import './App.css'
import Products from './components/Products'
import styled from 'styled-components'
import Navbar from './components/Navbar'
import commerce from "./lib/commerce"
import { useState, useEffect } from "react"

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

  // UseEffects for execution

  
  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, [])

  console.log(cart);

  return (
    <Container>
      <Navbar />
      <Products products={products} />
    </Container>
  )
}

export default App
