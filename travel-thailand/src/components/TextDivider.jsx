import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    min-height: 70vh;
    text-align: center;
    display: flex;
    justify-content :center;
    align-items: center;
    flex-direction: column;
    padding: 2rem 4rem;
`

const Title = styled.h1`
    font-size: 4rem;
`
const Desc = styled.p`
    font-size: 2rem;
    line-height: 4rem;
    font-family: 'Bodoni Moda', sans-serif;
`

const TextDivider = ({ title, desc}) => {
  return (
    <Container
    data-scroll-section  
    >
        <Title>{title}</Title>
        <Desc>{desc}</Desc>
    </Container>
  )
}

export default TextDivider