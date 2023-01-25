import React from 'react'
import Announcement from '../components/Announcement'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Products from '../components/Products'

const Home = () => {
  return (
    <>
      <Navbar />
      <Announcement />
      <Banner />
      <Products />
      <Footer />
    </>
  )
}

export default Home