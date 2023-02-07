import React from 'react'
import Announcement from '../components/Announcement'
import Banner from '../components/Banner'
import Categories from '../components/Categories'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Products from '../components/Products'

const Home = ({ cart, onAddToCart }) => {
  return (
    <>
      <Navbar cart={cart} />
      <Banner />
      <Categories />
      <Products onAddToCart={onAddToCart} />
      <Footer />
    </>
  )
}

export default Home