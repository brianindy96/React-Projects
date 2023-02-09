import './App.css'
import Forecast from './components/Forecast'
import Input from './components/Input'
import Nav from './components/Nav'
import TemperatureAndDetails from './components/TemperatureAndDetails'
import TimeAndLocation from './components/TimeAndLocation'
import { useEffect } from 'react'
import getWeatherData from './services/weatherService'

function App() {

  // Fetch Weather
  const fetchWeather = async () => {
    const data = await getWeatherData("weather", {q: "london"});
    console.log(data);
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
