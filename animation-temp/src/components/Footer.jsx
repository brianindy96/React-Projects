import React from 'react'
import styled from 'styled-components'
import SectionHeader from './SectionHeader'

const Section = styled.div`
  text-align: center;
  padding-top: 25px;
  padding-bottom: 100px;
`
const Location = styled.h1`
  font-size: 18vw;
  text-transform: uppercase;
  font-family: 'Bodoni Moda', sans-serif;
  margin: 0;
`
const Footer = () => {
  return (
    <Section className='footer'>
      
      <SectionHeader title="Made in" />
      <Location className='location' id='location-text'>
        Chiang Mai
      </Location>
    </Section>
  )
}

export default Footer