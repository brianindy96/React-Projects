import './App.css'
import Forecast from './components/Forecast'
import Input from './components/Input'
import Nav from './components/Nav'
import TemperatureAndDetails from './components/TemperatureAndDetails'
import TimeAndLocation from './components/TimeAndLocation'
import { useEffect, useState } from 'react'
import getFormattedWeatherData from './services/weatherService'

function App() {

  // Ideas
  // Today NOW -> Everythree (x5)
  // console.log(weather.list[0]);
  // Tomorrow NOW -> Every three hour (x5)
  // console.log(weather.list[8])
  // Day after Tomorrow NOW -> every three hour (x5)
  // console.log(weather.list[16])


  // State
  const [weather, setWeather] = useState([]);
  const [query, setQuery] = useState({q: 'berlin'});
  const [units, setUnits] = useState('metric');
  
  // Fetch Weather to global
  const fetchWeather = async () => {
    const data = await getFormattedWeatherData({...query, units});

    setWeather(data);
  }

  // Console.log tests
  console.log(weather);


  // useEffect
  useEffect(() => {
    fetchWeather();

  }, [query, units])
  
  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-28 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl">
      <Nav />
      <Input />
      {weather && (
        <>
          <TimeAndLocation weather={weather} />
          <TemperatureAndDetails weather={weather} />
          <Forecast weather={weather} />
          <Forecast weather={weather} />
          <Forecast weather={weather} />
        </>
      )}
      
    </div>
  )
}

export default App
