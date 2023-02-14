import React from 'react'
import styled from 'styled-components'
import City from '../components/City'
import Navbar from '../components/Navbar'

const Container = styled.div`
    min-height: 90vh;
    
`
const Cities = ({ cities }) => {
  return (
    <Container>
        <Navbar />
        <City cities={cities} />
    </Container>
  )
}

export default Cities