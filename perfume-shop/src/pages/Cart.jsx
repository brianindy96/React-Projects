import React from 'react'
import Announcement from '../components/Announcement'
import CartSummary from '../components/CartSummary'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Cart = ({ cart }) => {
  return (
    <>
        <Navbar cart={cart}/>
        <Announcement />
        <CartSummary cart={cart} />
        <Footer/>
    </>
  )
}

export default Cart