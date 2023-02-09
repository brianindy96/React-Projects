import './App.css'
import Forecast from './components/Forecast'
import Input from './components/Input'
import Nav from './components/Nav'
import TemperatureAndDetails from './components/TemperatureAndDetails'
import TimeAndLocation from './components/TimeAndLocation'
import { useEffect, useState } from 'react'
import getWeatherData from './services/weatherService'

function App() {

  // Today NOW -> Everythree (x5)
  // console.log(weather.list[0]);
  // Tomorrow NOW -> Every three hour (x5)
  // console.log(weather.list[8])
  // Day after Tomorrow NOW -> every three hour (x5)
  // console.log(weather.list[16])
  
  const [weather, setWeather] = useState([]);
  // Fetch Weather
  const fetchWeather = async () => {
    const data = await getWeatherData('forecast', {q: "london"});

    setWeather(data) ;
  }

 


  // useEffect
  useEffect(() => {
    fetchWeather();

  }, [])
  
  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-28 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl">
      <Nav />
      <Input />
      <TimeAndLocation />
      <TemperatureAndDetails />
      <Forecast />
    </div>
  )
}

export default App
