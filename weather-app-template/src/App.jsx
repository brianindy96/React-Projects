import { useEffect, useState } from 'react'
import './App.css'
import Forecast from './components/Forecast'
import Inputs from './components/Inputs'
import TemperatureAndDetails from './components/TemperatureAndDetails'
import TimeAndLocation from './components/TimeAndLocation'
import TopButtons from './components/TopButtons'
import { getFormattedWeatherData } from "./services/weatherServices"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {

  const [query, setQuery ] = useState({q: 'paris'});
  const [units, setUnits ] = useState('metric');
  const [weather, setWeather] = useState(null);

  const fetchCurrentWeather = async () =>{
    const data = await getFormattedWeatherData({...query, units});
    
    const message = query.q ? query.q : 'current location.';
    toast('🦄 Fetching weather for ' + message.toUpperCase(), {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
      });

    // setWeather(data);
    // console.log(data);
    setWeather(data);
  }

  console.log(weather);

  useEffect(()=>{
    fetchCurrentWeather();
  },[query, units])

  
  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400">
      <TopButtons setQuery={setQuery} />
      <Inputs setQuery={setQuery} units={units} setUnits={setUnits}/>

      {weather && (
        <div>
          <TimeAndLocation weather={weather}/>
          <TemperatureAndDetails weather={weather} />
        </div>
      )}
      {/* <Forecast title={"Hourly Forecast"} />
      <Forecast title={"Daily Forecast"} /> */}

      <ToastContainer
        position="top-right"
        autoClose={5000}
        newestOnTop={true}
        theme="colored"
        />
    </div>

    
  )
}

export default App
