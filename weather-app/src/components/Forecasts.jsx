import React from 'react'
import styled from 'styled-components'
import Forecast from './Forecast'

const Container = styled.div`
    background-color: white;
    color: black;
    height: 60vh;
    /* when show, Y(-170px), when hide Y(110px) */
    transform: translateY(-170px);
`


const ForecastCon = styled.div`
  display: flex;
  flex-direction: column;
`

const Title = styled.h3`
  margin: 0;
`
const Forecasts = ({ weather }) => {
  return (
    <Container>
        <Title>Title</Title>
        <ForecastCon>
          <Forecast weather={weather} forecast={weather.today}/>
          <Forecast weather={weather} forecast={weather.tmr}/>
          <Forecast weather={weather} forecast={weather.afterTmr}/>
        </ForecastCon>
        
    </Container>
  )
}

export default Forecasts