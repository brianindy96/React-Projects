import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { motion, useScroll, useTransform } from "framer-motion";

const Container = styled(motion.div)`
    min-height: 60vh;
    display: flex;
    flex-direction: ${props => props.reverse ? "row-reverse" : "row"};
`

const ImgContainer = styled(motion.div)`
    flex: 1;
    background-image: ${props => props.image && `url(${props.image})`};
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`

const DescContainer = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
    
`

const Para = styled.p`
    text-align: center;
    margin: 10px 4rem;
    font-family: 'Bodoni Moda', sans-serif;
    font-size: 1.1rem;
    line-height: 1.7rem;
    
`

const Title = styled.h3`
    font-family: 'Poppins', sans-serif;
    font-size: 3rem;

`

const Button = styled.button`
    margin-top: 0;
    padding: 5px 15px;
    background: transparent;
    border: 1px solid #eee;
    cursor: pointer;
    transition: transform 0.2s ease;
    border-radius: 10px;
    font-weight: 600;
    letter-spacing: 0.2rem;

    &:hover{
        transform: scale(1.05);
        padding: 5px 20px;
        border: 1px solid #b7b7b7;
        color: black;
    }
`

const Links = styled(Link)`
    text-decoration: none;
    color: #494949;
`
const DescDivider = ({ id, name, explore, image, para1, para2, para3, reverse, title}) => {
  let { scrollYProgress } = useScroll();
  let y = useTransform(scrollYProgress, [0,1], ["0%", "20%"]);
  
    return (
    <Container
    data-scroll-section  
    reverse={reverse}>
        <ImgContainer image={image} style= {{y}} >
            
        </ImgContainer>
        <DescContainer>
            <Title>{title}</Title>
            <Para>{para1}</Para>
            <Para>{para2 && para2}</Para>
            <Para>{para3 && para3}</Para>
            <Button name={name}><Links to={`/cities/${id}`}>{explore}</Links></Button>
        </DescContainer>
    </Container>
  )
}

export default DescDivider