import { CircularProgress } from '@mui/material'
import React, { useState, useEffect } from 'react'
import Announcement from '../components/Announcement'
import CartSummary from '../components/CartSummary'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
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
const Cart = ({ cart, onUpdateCartQty, onRemoveFromCart, onDeleteFromCart, onEmptyCart }) => {
  
  const [loading, setLoading] = useState(false)
    
  // useEffect(()=>{
  //   setLoading(true);
    
  //   setTimeout(() => {
  //     setLoading(false)
  //   }, 5000);
  // },[])

  return (
    <>
        <Navbar onRemoveFromCart={onRemoveFromCart} cart={cart} onUpdateCartQty={onUpdateCartQty}/>
        <Announcement />
        {
          loading === true ? (
              <DisplayScreen>
                <Description>Fetching Cart..</Description>
                <CircularProgress />
              </DisplayScreen>
          ) : (
            <CartSummary 
            onRemoveFromCart={onRemoveFromCart} 
            cart={cart} 
            onUpdateCartQty={onUpdateCartQty}
            onDeleteFromCart={onDeleteFromCart}
            onEmptyCart={onEmptyCart}
            />
          )
        }
        <Footer/>
    </>
  )
}

export default Cart