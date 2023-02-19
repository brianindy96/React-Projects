import React from 'react'
import styled from 'styled-components'
import { motion } from "framer-motion";

const Container = styled(motion.div)`
    /* background-color: #f0eff1; */
`

const Intro = styled.section`
    display: flex;
    flex-direction: column;
    padding: 6rem 6rem;
    min-height: 80vh;
    align-items: center;
`

const HeaderDiv = styled(motion.div)`
`

const Header = styled(motion.span)`
    font-family: "Bodoni Moda", sans-serif;
    font-size: 10vw;

`


const Desc = styled(motion.p)`
    font-size: 2rem;
    font-style: "Poppins", sans-serif;
`

// Framer motion variants

const containerVariants = {
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            delayChildren: 0.1,
            staggerChildren: 0.05,
            duration: 1,
        },
    },
    initial: {
        y: 200,
        opacity: 0,
    }
}



const animatedLetters = {
    initial: { 
        y: 100,
        opacity: 0,
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            ease: [0.2, 0.65, 0.3, 0.9],
            duration: 1,
      },
    },
}

const descVariant = {
    initial:{
        x: -1500,
        
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1.5,
            delay: 0.5,
        }

    }
}

const Title = ({ title, desc}) => {
  return (
    <Container
    data-scroll-section  
    >
        <Intro>
            {/* Animates each letter */}
                <HeaderDiv 
                    variants={containerVariants}
                    animate="animate"
                    initial="initial"
                    data-scroll 
                    >
                        {[...title].map((letter, index) => (
                            <Header 
                            keys={index}
                            variants={animatedLetters}
                            >
                                {letter}
                            </Header>
                        ))}
                </HeaderDiv>
                <Desc
                variants={descVariant}
                animate="animate"
                initial="initial"
                >{desc}</Desc>
        </Intro>
                
    </Container>
  )
}

export default Title