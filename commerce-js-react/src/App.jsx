import './App.css'
import Products from './components/Products'
import styled from 'styled-components'
import Navbar from './components/Navbar'
import commerce from "./lib/commerce"
import { useState, useEffect } from "react"

const Container = styled.div`
  
`
function App() {
  const [products, setProducts ] = useState([]);

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);

  }

  useEffect(() => {
    fetchProducts();
  }, [])

  console.log(products);
  
  return (
    <Container>
      <Navbar />
      <Products products={products} />
    </Container>
  )
}

export default App
