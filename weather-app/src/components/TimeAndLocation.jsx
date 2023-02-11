import React from 'react'
import styled from 'styled-components'
import { formatToLocalTime } from '../services/weatherServices'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1.5;
    border-left: 1px solid grey;
    border-right: 1px solid grey;
`

const LocalTimeCon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
`

const LocalTime = styled.p`
    font-size: 1.2rem;
`

const CityCon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 3;
`

const CityName = styled.h3`
    font-size: 3.6rem;
    margin: 0;
    font-weight: 800;
`

const CityTempCon = styled.div`
    
`

const CityTemp = styled.span`
    font-size: 6rem;
    font-weight: 600;
    color: #eee;
`

const Symbol = styled.span`
    
`
const TimeAndLocation = ({ weather }) => {
  return (
    <Container>
          <LocalTimeCon>
            <LocalTime>
                {formatToLocalTime(weather.dt, weather.tz_min)}
            </LocalTime>
          </LocalTimeCon>

          <CityCon >
            <CityName>
                {weather.name}, {weather.country}
            </CityName>
          </CityCon>

          <CityTempCon>
            <CityTemp>
                {weather.temp.toFixed()}°C
            </CityTemp>
          </CityTempCon>
          
    </Container>
  )
}

export default TimeAndLocation