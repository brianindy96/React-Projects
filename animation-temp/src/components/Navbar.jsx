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
    transition: {
      duration: 7,
      delay: 0.2,
      type: "spring",
      stiffness: 200,
    }
    
  },
  initial: {
    y: -60,
    opacity: 0,
  },
  // this doesn't work
  whileHover: {
    scale: 1.1,
  }
  
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
      <motion.div whileHover="whileHover">Menu</motion.div>
      <motion.div whileHover={{scale: 1.1, transition: "ease 0.3s"}}>Flirty Flowers</motion.div>
      <motion.div whileHover={{scale: 1.1, transition: "ease 0.3s"}}>Card</motion.div>
    </Section>
  )
}

export default Navbar