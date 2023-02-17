import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const Section = styled(motion.section)`
  display: flex;
  justify-content: space-between;
  padding: 50px 0;
  font-size: 1.2rem;
  letter-spacing: 1px;
  font-family: "Syncopate", sans-serif;
  color: #464646;
  font-weight: 600;
  text-transform: uppercase;
`

// Framer Motion

const navVariants = {
  animate: {
    opacity: 1,
    y: 0,
    duration: 3,
    delay: 0.2,
  },
  initial: {
    y: -40,
    opacity: 0,
  },
}


const Navbar = () => {
  return (
    <Section 
    className='navbar'
    data-scroll-section	
    variants={navVariants}
    animate="animate"
    initial="initial"
    >
      <div>Menu</div>
      <div>Flirty Flowers</div>
      <div>Card</div>
    </Section>
  )
}

export default Navbar