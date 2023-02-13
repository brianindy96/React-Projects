import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    min-height: 60vh;
    background-color: #ddd;
    display: flex;

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
    padding: 10px 4rem;
    font-family: 'Bodoni Moda', sans-serif;
    font-style: italic;
    line-height: 1.5rem;
`

const Para = styled.p`
    margin: 10px 0;
`
const DescDivider = ({ image, para1, para2, para3}) => {
  return (
    <Container>
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