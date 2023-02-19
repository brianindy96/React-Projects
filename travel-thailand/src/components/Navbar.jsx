import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion"

const Container = styled(motion.div)`
    min-height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: transparent;
    color: black;
`

const Navs = styled.ul`
    display: flex;
    list-style: none;
`

const NavItem = styled.li`
    margin: 0 3rem;
    font-size: 1.2rem;
    cursor: pointer;
    transition: transform 0.2s ease;

    &:hover{
        transform: scale(1.1);
    }
`

// Framer Motion variants

const navConVariants = {
    initial:{ 
        opacity: 0, 
        y: -20 
    },
    animate:{ 
        opacity: 1, 
        y: 0,
        transition:{
            ease: "easeInOut",
            duration: 1,
            delay: 0.1,
        }
    },
}

const Links = styled(Link)`
    color: black;
    letter-spacing: 2px;
    text-decoration: none;
`
const Navbar = () => {
  return (
    <Container
        variants={navConVariants}
        animate="animate"
        initial="initial"
        data-scroll-section data-scroll-sticky 
    >
        <Navs data-scroll>
            <NavItem>
                <Links to="/">Home</Links>
            </NavItem>
            <NavItem>
                <Links to="/cities">Cities</Links>
            </NavItem>
        </Navs>
    </Container>
  )
}

export default Navbar