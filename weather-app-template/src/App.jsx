import { useEffect } from 'react'
import './App.css'
import Forecast from './components/Forecast'
import Inputs from './components/Inputs'
import TemperatureAndDetails from './components/TemperatureAndDetails'
import TimeAndLocation from './components/TimeAndLocation'
import TopButtons from './components/TopButtons'
import { getFormattedWeatherData } from "./services/weatherServices"
function App() {


  const fetchCurrentWeather = async () =>{
    const data = await getFormattedWeatherData({q: "london"});
    console.log(data);
  }

  useEffect(()=>{
    fetchCurrentWeather();
  },[])

  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400">
      <TopButtons />
      <Inputs />
      <TimeAndLocation />
      <TemperatureAndDetails />
      {/* <Forecast title={"Hourly Forecast"} />
      <Forecast title={"Daily Forecast"} /> */}
    </div>
  )
}

export default App
