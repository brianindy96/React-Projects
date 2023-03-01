import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    min-height: 8vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Text = styled.p`
    font-size: 1.1rem;
`
const Footer = () => {
  return (
    <Container>
        <div>
            <Text>© Copyright 2023, Brian Garton</Text>
        </div>
    </Container>
  )
}

export default Footer