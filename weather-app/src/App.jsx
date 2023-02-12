import './App.css'
import styled from "styled-components"
import Navbar from './components/Navbar'
import Input from './components/Input'
import Humid from './components/TemperatureDetails'
import Wind from './components/Wind'
import React, { useEffect, useState } from 'react'
import getFormattedWeatherData from './services/weatherServices'
import TimeAndLocation from './components/TimeAndLocation'
import { CircularProgress } from '@mui/material'
import getWeatherData from './services/weatherServices'
import Forecasts from './components/Forecasts'

// const Overlay = styled.div`
//   position: fixed; /* Sit on top of the page content */ /* Hidden by default */
//   width: 100%; /* Full width (cover the whole page) */
//   height: 100%; /* Full height (cover the whole page) */
//   top: 0;
//   left: 0;
//   right: 0;
//   bottom: 0;
//   background-color: rgba(0,0,0,0.5); /* Black background with opacity */
//   z-index: -2; /* Specify a stack order in case you're using a different order for other elements */
//   cursor: pointer; /* Add a pointer on hover */
// `

const Wrapper = styled.div`
    height: 80vh;
    max-width: 1280px;
    background-color: rgba(0, 0, 0, 0.3);
    border: solid 2px transparent;
    background-clip: padding-box;
    z-index: 2;
    margin: 5em auto;
    border-radius: 3em;
    backdrop-filter: blur(40px);
    background-clip: padding-box;
    color: white;
    overflow: hidden;
    box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1); 
`

const Info = styled.div`
  width: 100%;
  z-index: 3;
  padding: 0 20px;
  height: 40vh;
  display: flex;
  justify-content: center;
`
// 






function App() {

  // States
  const [weather, setWeather] = useState([])
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState({q: 'bangkok'})
  const [units, setUnits] = useState('metric');
    // Functions

    // FetchWeather from weatherServices.jsx
  const fetchWeather = async () => {
    const data = await getFormattedWeatherData({...query, units});

    setWeather(data);
    
  }

  // console.log(test)
  console.log(weather);

  // UseEffect rendering
  useEffect(() => {
    fetchWeather();
    
    setTimeout(()=>{
      setLoading(true);
    }, 1000)
}, [query, units])

  return (
    <>
      {/* <Overlay outside></Overlay> */}
        
          <Wrapper> 
            <Navbar setQuery={setQuery} weather={weather} />
            <Input units={units} setUnits={setUnits} setQuery={setQuery} weather={weather} />
            {(weather && loading) &&(
            <>
            <Info>
              <Humid weather={weather} />
              <TimeAndLocation weather={weather} />
              <Wind weather={weather} />
            </Info>
            <Forecasts weather={weather} />
            </>
            )}
          </Wrapper>
          
    </>
  )
}

export default App
