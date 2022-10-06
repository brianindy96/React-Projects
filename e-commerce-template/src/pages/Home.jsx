import React from 'react'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'

const Home = () => {
  return (
    <div className="Home">
        <Announcement />
        <Navbar />
        <Slider />
    </div>
  )
}

export default Home

