import React, { useEffect, useState } from 'react'
import styled from "styled-components"
import { xs, sm, md, lg, xl} from "../responsive"
import { motion } from "framer-motion"
import { navVariants } from '../utils/motion'

const Container = styled(motion.div)`
    height: 10vh;
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

    border-bottom: ${(props) => props.hasBorder ? '0.05px solid #393838' : 'none'};


    ${xs({padding: "1rem 1.2rem"})};
    ${sm({padding: "1rem 1.2rem"})};
`

// Left Nav

const Left = styled.div`
        background: transparent;

`

const Logo = styled.a`
    margin: 0px;
    background: transparent;
    transition: 0.2s ease;
    font-size: 1.8rem;
    font-weight: 800;
    text-decoration: none;
    ${xs({fontSize: "1.6rem"})};
    ${md({fontSize: "1.8rem"})};

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

    ${xs({margin: "0 0.2rem", fontSize: "0.9rem"})};
    ${lg({margin: "0 0.5rem", fontSize: "1.3rem"})};

    
`

// Framer Motion




const Nav = () => {

  const [hasBorder, setHasBorder] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const homeHeight = document.getElementById('home').clientHeight;

      if (scrollTop >= homeHeight) {
        setHasBorder(true);
      } else {
        setHasBorder(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const nav = document.querySelector("#nav");

    let lastScrollY = window.scrollY;
    window.addEventListener("scroll", () => {
      if(lastScrollY < window.scrollY) {
        console.log("going down")
        nav.classList.add("hidden")
      } else{
        console.log("going up")
        nav.classList.remove("hidden");
      }

      lastScrollY= window.scrollY;
    });

  
  return (
    <Container 
    id="nav"
    variants={navVariants}
    whileInView="show"
    initial="hidden"
    >
        <Wrapper hasBorder={hasBorder}>
            <Left>
                <Logo href="#">BG.</Logo>
            </Left>
            <Right>
                <NavLink href="#project">Projects</NavLink>
                <NavLink href="#about">About</NavLink>
                <NavLink href="#footer">Contact</NavLink>
                <NavLink href="/resume/brianGartonResume.pdf" target="_blank">Resume </NavLink>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Nav