import './App.css'
import Forecast from './components/Forecast'
import Inputs from './components/Inputs'
import TemperatureAndDetails from './components/TemperatureAndDetails'
import TimeAndLocation from './components/TimeAndLocation'
import TopButtons from './components/TopButtons'
import { getWeatherData, getFormattedWeatherData } from "./services/weatherService"
import { useEffect } from "react";

function App() {

  const fetchWeather = async () =>{
    const data = await getFormattedWeatherData({ q: "london"});
    
    // IF getWeatherData
    // console.log(data);
    // Object { coord: {…}, weather: (1) […], base: "stations", main: {…}
    
    // IF getFormattedWeatherData
    console.log(data);
    //Object { lat: 51.5085, lon: -0.1257, temp: 284.23, feels_like: 283.87, temp_min: 282.58, details: "Clouds", icon: "04d", temp_max: 285.35, humidity: 95, name: "London", 
    // MORE BEAUTIFUL
    return data;
  }

  useEffect(() => {
    fetchWeather();
  }, [])
  

  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400">
      <TopButtons />
      <Inputs />
      <TimeAndLocation />
      <TemperatureAndDetails />
      <Forecast title={"Hourly Forecast"} />
      <Forecast title={"Daily Forecast"} />
    </div>
  )
}

export default App
