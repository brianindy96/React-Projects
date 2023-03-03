import React, { useEffect, useState } from 'react'
import styled from "styled-components"
import { xs, sm, md, lg, xl} from "../responsive"
import { motion } from "framer-motion"

const Container = styled(motion.div)`
    min-height: 3vh;
    padding: 0;
    position: fixed;
    width: 100%;
    z-index: 10000;
    background:transparent;
    transition: 0.1s ease;
    
    mix-blend-mode: exclusion;

    &.hidden {
    display: none;
  }
`

const Wrapper = styled.div`
    max-width: 1280px;
    margin: 0 auto;
    text-align: center;
    display: flex;
    
    background: transparent;

    justify-content: space-between;
    align-items: center;

    ${(props) =>
    props.hasBorder &&
    `
      border-bottom: 0.05px solid #797979;
    `}


    ${xs({padding: "1rem 1.2rem"})};
    ${sm({padding: "1rem 1.2rem"})};
`

// Left Nav

const Left = styled.div`
        background: transparent;

`

const Logo = styled.h1`
    margin: 0px;
    background: transparent;

    transition: 0.2s ease;

    ${xs({fontSize: "1.4rem"})};

`

// Right Nav

const Right = styled.div`
    display: flex;
    background: transparent;

`
const NavLink = styled.a`
    text-decoration: none;
    background: transparent;

    margin: 0 20px;
    font-size: 1.2rem;
    color: white;
    font-weight: 300;

    transition: 0.2s ease;

    ${xs({margin: "0 0.4rem", fontSize: "1rem"})};
    ${lg({margin: "0 0.4rem", fontSize: "1.3rem"})};

    
`

// Framer Motion

const navVariants = {
  hidden: {
    opacity: 0,
    y: -50,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 140,
    },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 80,
    },
  },
};


const Nav = () => {

    const [hasBorder, setHasBorder] = useState(false);


  useEffect(() => {
    const nav = document.querySelector("#nav");

    let lastScrollY = window.scrollY;
    window.addEventListener("scroll", () => {
        if (lastScrollY < window.scrollY) {
            console.log("going down");
            setHasBorder(false);
            nav.classList.add("hidden");
          } else {
            console.log("going up");
            if (window.scrollY === 0) {
              setHasBorder(false);
            } else {
              setHasBorder(true);
              nav.classList.remove("hidden");
            }
          }

      lastScrollY= window.scrollY;
      
    });
  }, [])
  return (
    <Container 
    id="nav"
    variants={navVariants}
    whileInView="show"
    initial="hidden"
    >
        <Wrapper hasBorder>
            <Left>
                <Logo>BRIAN.</Logo>
            </Left>
            <Right>
                <NavLink href="#project">Projects</NavLink>
                <NavLink href="#about">About</NavLink>
                <NavLink href="#footer">Contact</NavLink>
                <NavLink href="#resume">Resume </NavLink>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Nav