import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import ProductInfo from '../components/ProductInfo'
import commerce from '../lib/commerce'

const SingleProduct = ({ cart }) => {

  const { id } = useParams();


  const [products, setProducts] = useState([])
  const [product, setProduct] = useState([])
  
  const fetchProducts = async () => {
    const products = await commerce.products.list();
  

    const data = products.data
    
    setProducts(data);

    const resp = data.find((prod) => prod.id === id);

    setProduct(resp);
  }

  


  useEffect(() => {
    fetchProducts();

  }, [])

  return (
    <>
        <Navbar cart={cart} />
        <Announcement />
        <ProductInfo product={product}  />
        <Footer />
    </>
  )
}

export default SingleProduct