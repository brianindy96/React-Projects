import React from 'react'
import styled from 'styled-components'
import { motion } from "framer-motion";
const Section = styled.section`
    position: relative;
    padding-top: 0;
    height: 100vh;
`

const ListItems = styled(motion.ul)`
    position: absolute;
    left: 0;
    top: 100px;

    letter-spacing: 1px;
    font-family: "Syncopate", sans-serif;
    color: #626262;
    text-transform: uppercase;
`

const ListItem = styled.li`
    margin: 10px 0;
    list-style: none;
    font-weight: 600;
`

const Title = styled(motion.h1)`
    font-size: 18vw;
    text-transform: uppercase;
    text-align: center;
    font-family: "Bai Jamjuree", sans-serif;
    font-weight: 600;
`

// Framer Motion

const titleVariants = {
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            delay: 0.1,
            ease: [0, 0.71, 0.2, 1.01],
        }

    },
    initial: {
        opacity: 0,
        y: 200,
    }
}

const navVariants = {
    animate: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.8,
            ease: [0, 0.71, 0.2, 1.01],
        }
    },
    initial: {
        opacity: 0,
        x: -200,
    }
}


const Header = () => {
  return (
    <Section className='header-container' data-scroll-section >
        <ListItems 
        className='header-menu'
        variants={navVariants}
        animate="animate"
        initial="initial"
        >
            <ListItem>Intro</ListItem>
            <ListItem>About</ListItem>
            <ListItem>Featured</ListItem>
        </ListItems>
        <Title 
        id="header-text"
        variants={titleVariants}
        animate="animate"
        initial="initial"
        >Art Objects</Title>
    </Section>
  )
}

export default Header