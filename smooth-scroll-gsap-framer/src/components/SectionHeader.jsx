import React from 'react'
import styled from 'styled-components'

const Header = styled.h6`
    text-transform: uppercase;
    font-weight: 600;
    font-size: 16px;
    letter-spacing: 1px;
    font-family: "Syncopate", sans-serif;
    color: #626262;
`

const SectionHeader = ({ title }) => {
  return (
    <>
        <Header>{title}</Header>
    </>
  )
}

export default SectionHeader