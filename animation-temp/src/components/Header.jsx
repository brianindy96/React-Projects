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

const ListItem = styled(motion.li)`
    margin: 10px 0;
    list-style: none;
    font-weight: 600;
`

const Title = styled(motion.h1)`
    text-transform: uppercase;
    text-align: center;
    font-family: "Bai Jamjuree", sans-serif;
    font-weight: 600;
`

const Letter = styled(motion.span)`
    margin-right: 10px;
    font-size: 18vw;
`

// Framer Motion

const titleVariants = {
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            staggerChildren: 0.1,
            duration: 0.8,
            delayChildren: 0.1,
        }
    },
    initial: {
        opacity: 0,
        y: 100,
    }
}

const letterVariants = {
    animate: {
        opacity: 1,
        transition: {
            type: "spring", 
            damping: 12,
            stiffness: 100,
        },
    },
    initial: {
        opacity: 0,
        transition: {
            type: "spring", 
            damping: 12,
            stiffness: 100,
        },
    }
}

const navVariants = {
    animate: {
        opacity: 1,
        x: 0,
        transition: {
            type: "spring", 
            damping: 12,
            stiffness: 100,
            staggerChildren: 0.3,
        },
    },
    initial: {
        opacity: 0,
        x: -200,
    },
    hover: {
        cursor: "pointer",
        scale: 1.1,
        transition: "ease 0.1s",
    }
}



const Header = ({ title }) => {

    const letters = Array.from(title);

  return (
    <Section className='header-container' data-scroll-section >
        <ListItems 
        className='header-menu'
        variants={navVariants}
        animate="animate"
        initial="initial"
        >
            <ListItem variants={navVariants} whileHover="hover">Intro</ListItem>
            <ListItem variants={navVariants} whileHover="hover">About</ListItem>
            <ListItem variants={navVariants} whileHover="hover">Featured</ListItem>
        </ListItems>
        <Title 
        id="header-text"
        style={{overflow: "hidden"}}
        variants={titleVariants}
        animate="animate"
        initial="initial"
        >{letters.map((letter, index) => (
            <Letter keys={index} variants={letterVariants}>
                {letter}
            </Letter>
        ))}</Title>
    </Section>
  )
}

export default Header