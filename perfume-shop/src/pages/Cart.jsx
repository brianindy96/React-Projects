import React from 'react'
import Announcement from '../components/Announcement'
import CartSummary from '../components/CartSummary'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Cart = () => {
  return (
    <>
        <Navbar />
        <Announcement />
        <CartSummary />
        <Footer/>
    </>
  )
}

export default Cart