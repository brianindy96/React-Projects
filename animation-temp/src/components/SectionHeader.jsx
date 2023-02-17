import React from 'react'
import styled from 'styled-components'

const Title = styled.h4`
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 1px;
    font-family: "Syncopate", sans-serif;
    color: #626262;
`
const SectionHeader = ({ title }) => {
  return (
    <>
        <Title className='section-header'>{title}</Title>
    </>
  )
}

export default SectionHeader