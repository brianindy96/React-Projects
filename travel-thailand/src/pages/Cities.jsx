import React from 'react'
import styled from 'styled-components'
import City from '../components/City'

const Container = styled.div`
    min-height: 90vh;
    
`
const Cities = () => {
  return (
    <Container>
        <City />
    </Container>
  )
}

export default Cities