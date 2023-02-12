import React from 'react'
import styled from 'styled-components'
import { formatToLocalTime } from '../services/weatherServices'
import { iconUrlFromCode } from '../services/weatherServices'
const Container = styled.div`
    flex: 1;
    border-top: 1px solid lightgrey;
`

const DateCon = styled.div`
    margin: 0;
`

const Day = styled.p`
    margin: 0;
    font-size: 0.8rem;
    font-weight: 800;
`

const WeatherCon = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0 20px;
    padding: 0;
`

const Weather = styled.div`
    margin: 0;
    padding: 0;
`

const Time = styled.p`
    margin: 0;
    font-size: 0.8rem;
`

const Icon = styled.img`
    height: 40px;
    width: 40px;
`

const Temp = styled.p`
    margin: 0;
    font-size: 0.8rem;

`
const Forecast = ({ weather, forecast}) => {
  return (
    <Container>
            <DateCon>
                    {/* <span><AccessTimeIcon className="text-white mr-2"/></span> */}
                <Day>
                    {formatToLocalTime(forecast[0].title, weather.tz_min, "cccc, LLL dd")}
                </Day>
            </DateCon>
            <WeatherCon>  
                {forecast.map((td, index) => (
                    <Weather key={index}>
                        <Time>{formatToLocalTime(td.title, weather.tz_min, 'hh:mm a')}</Time>
                        <Icon src={iconUrlFromCode(td.icon)} alt="icon" />
                        <Temp>{td.temp.toFixed()}°</Temp>
                    </Weather>
                ))}   
            </WeatherCon>
    </Container>
  )
}

export default Forecast