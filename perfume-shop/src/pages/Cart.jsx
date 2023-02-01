import React from 'react'
import Announcement from '../components/Announcement'
import CartSummary from '../components/CartSummary'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Cart = ({ cart, onUpdateCartQty }) => {
  return (
    <>
        <Navbar cart={cart} onUpdateCartQty={onUpdateCartQty}/>
        <Announcement />
        <CartSummary cart={cart} onUpdateCartQty={onUpdateCartQty} />
        <Footer/>
    </>
  )
}

export default Cart