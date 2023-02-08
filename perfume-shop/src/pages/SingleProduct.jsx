import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import ProductInfo from '../components/ProductInfo'
import commerce from '../lib/commerce'
import { CircularProgress } from '@mui/material'
import PropTypes from 'prop-types';
import styled from 'styled-components'

const DisplayScreen = styled.div`
  height: 80vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

`

const Description = styled.h2`
  color: #4444ec;
  margin-bottom: 10px;
`

const SingleProduct = ({ cart, onAddToCart, onRemoveFromCart, onUpdateCartQty }) => {

  const { id } = useParams();


  // loading screen wait for fetching products

  const [loading, setLoading] = useState(false);


  const [products, setProducts] = useState([])
  const [product, setProduct] = useState([])
  
  const fetchProducts = async () => {
    const prods = await commerce.products.list();
  

    const data = prods.data
    
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
    }, 1500);
  }, [])


  return (
    <>
        <Navbar cart={cart} />
        <Announcement />
        {
          loading === true ? (
            <DisplayScreen>
                <Description>Fetching Product...</Description>
                <CircularProgress />
            </DisplayScreen>
          ) : (
            <ProductInfo 
            product={product} 
            cart={cart}
            onAddToCart={onAddToCart}
            onUpdateCartQty={onUpdateCartQty}
            />
          )
        }   
        <Footer />
    </>
  )
}


export default SingleProduct