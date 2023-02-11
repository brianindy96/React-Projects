import React from 'react'
import styled from 'styled-components'
import Forecast from './Forecast'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const Container = styled.div`
    background-color: #e6e6e6;
    color: black;
    height: 60vh;
    /* when show, Y(-170px), when hide Y(180px) */
    transform: translateY(-160px);
`

const Arrow = styled(KeyboardArrowUpIcon)`
  cursor: pointer;
  margin: 0;
`



const ForecastCon = styled.div`
  display: flex;
  flex-direction: column;
`

const Title = styled.div`
  margin: 0;
`
const Forecasts = ({ weather }) => {
  return (
    <Container>
        <Title>
          <Arrow />
        </Title>
        <ForecastCon>
          <Forecast weather={weather} forecast={weather.today}/>
          <Forecast weather={weather} forecast={weather.tmr}/>
          <Forecast weather={weather} forecast={weather.afterTmr}/>
        </ForecastCon>
        
    </Container>
  )
}

export default Forecasts