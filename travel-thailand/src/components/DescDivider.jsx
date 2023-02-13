import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    min-height: 60vh;
    display: flex;
    flex-direction: ${props => props.reverse ? "row-reverse" : "row"};

`

const ImgContainer = styled.div`
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
const DescDivider = ({ image, para1, para2, para3, reverse}) => {
  return (
    <Container reverse={reverse}>
        <ImgContainer image={image}>
            
        </ImgContainer>
        <DescContainer>
            <Para>{para1}</Para>
            <Para>{para2 && para2}</Para>
            <Para>{para3 && para3}</Para>
        </DescContainer>
    </Container>
  )
}

export default DescDivider