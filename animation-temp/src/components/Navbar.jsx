import React from 'react'
import styled from 'styled-components'

const Section = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 50px 0;
  font-size: 1.2rem;
  letter-spacing: 1px;
  font-family: "Syncopate", sans-serif;
  color: #464646;
  font-weight: 600;
  text-transform: uppercase;
`
const Navbar = () => {
  return (
    <Section className='navbar'>
      <div>Menu</div>
      <div>Flirty Flowers</div>
      <div>Card</div>
    </Section>
  )
}

export default Navbar