import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import ProductInfo from '../components/ProductInfo'
import commerce from '../lib/commerce'
import { CircularProgress } from '@mui/material'
import PropTypes from 'prop-types';

const SingleProduct = ({ cart, onAddToCart, onRemoveFromCart, onUpdateCartQty }) => {

  const { id } = useParams();


  // loading screen wait for fetching products

  const [loading, setLoading] = useState(false);


  const [products, setProducts] = useState([])
  const [product, setProduct] = useState([])
  
  const fetchProducts = async () => {
    const products = await commerce.products.list();
  

    const data = products.data
    
    setProducts(data);

    const resp = data.find((prod) => prod.id === id);

    setProduct(resp);
  }

  // useEffects
  useEffect(() => {
    setLoading(true);
    fetchProducts();
    
    setTimeout(() => {
      setLoading(false)
    }, 3000);
  }, [])


  return (
    <>
        <Navbar cart={cart} />
        <Announcement />
        {
          loading === true ? (
            <CircularProgress />
          ) : (
            <ProductInfo product={product}  />
          )
        }   
        <Footer />
    </>
  )
}


export default SingleProduct