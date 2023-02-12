import React from 'react'
import styled from 'styled-components'
import { formatToLocalTime, iconUrlFromCode } from '../services/weatherServices'
import { tablet } from '../responsive'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex: 2;
    border-left: 1px solid grey;
    border-right: 1px solid grey;
    padding: 0 20px;

    ${tablet({border: "none", flex: 1, borderBottom: "1px solid #b0b0b0"})};

`

const LocalTimeCon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
`

const LocalTime = styled.p`
    font-size: 1.2rem;

    ${tablet({fontSize: "1rem"})};

`

const CityCon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 3;

    ${tablet({padding: "0", flex: "2"})};



`

const CityName = styled.h3`
    font-size: 3.6rem;
    margin: 0;
    font-weight: 800;

    ${tablet({fontSize: "2rem"})};

`

const CityTempCon = styled.div`
    
`

const CityTemp = styled.span`
    font-size: 6rem;
    font-weight: 600;
    color: #eee;

    ${tablet({fontSize: "3rem"})};

`

const Symbol = styled.span`
    
`

const WeatherDescCon = styled.div`
  
`

const WeatherDetails = styled.p`
  font-size: 2rem;

  ${tablet({fontSize: "1.5rem"})};

  margin: 0;
`
const WeatherDesc = styled.p`
    margin: 0;
    text-transform: capitalize;
    font-style: italic;
    ${tablet({fontSize: "0.9rem"})};

`

const Icon = styled.img`
  
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
                {weather.temp.toFixed()}°
            </CityTemp>
          </CityTempCon>

          <WeatherDescCon>
            <WeatherDetails>{weather.details}</WeatherDetails>
            <WeatherDesc>{weather.desc}</WeatherDesc>
            <Icon src={iconUrlFromCode(weather.icon)}></Icon>
          </WeatherDescCon>
          
    </Container>
  )
}

export default TimeAndLocation