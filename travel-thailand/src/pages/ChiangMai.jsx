import React from 'react'
import styled from "styled-components"
import CityLanding from '../components/CityLanding'

const Container = styled.div`
    min-height: 100vh;
    background-color: #fff;
`

const ChiangMai = () => {
  return (
    <Container>
        <CityLanding />
    </Container>
  )
}

export default ChiangMai