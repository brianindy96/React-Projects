import React from 'react'
import styled from 'styled-components'
import TimeAndLocation from './TimeAndLocation'

const Container = styled.div`
    flex: 2;
    border-left: 1px solid black;
    border-right: 1px solid black;
`

const Weather = () => {
  return (
    <Container>
      <TimeAndLocation />
    </Container>
  )
}

export default Weather