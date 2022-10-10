import { useState, useEffect } from 'react'
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Products from './components/Products'
import { commerce } from "./lib/commerce";

function App() {

  const [products, setProducts] = useState([]);
  
  const fetchProducts = async () => {
    // returns a promise
    const { data } = await commerce.products.list();

    setProducts(data);

  }

  useEffect(() => {
    fetchProducts();
  }, []);

  // console.log(products);
  // Objects of our products in commerce.js

  return (
    <div className="App">
      <Navbar />
      <Products products={products} />
      <Footer />
    </div>
  )
}

export default App
