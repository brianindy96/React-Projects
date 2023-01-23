import React from 'react'
import styled from "styled-components"
import SectionHeader from './SectionHeader'

const Container = styled.section`
  text-align: center;
  padding-bottom: 200px;
`

const Title = styled.h1`
  font-size: 18vw;
  text-transform: uppercase; 
  font-family: "Bodoni Moda", sans-serif;
  margin: 0;
`


const Footer = () => {
  return (
    <Container className='footer' data-scroll-section>
        <SectionHeader title="Made in"/>
        <Title className='location' id='location=text'>Chiang Mai</Title>
    </Container>
  )
}

export default Footer