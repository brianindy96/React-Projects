import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    background-image: ${props => props.image && `url(${props.image})`};
    min-height: 70vh;
    width: 100%;
    color: black;
    background-size: cover;
    background-position: center;
`


const LargeDivider = ({ image }) => {
  return (
    <Container
    data-scroll-section  
    image={image}>
        
    </Container>
  )
}

export default LargeDivider