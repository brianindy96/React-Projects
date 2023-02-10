import './App.css'
import Forecast from './components/Forecast'
import Input from './components/Input'
import Nav from './components/Nav'
import TemperatureAndDetails from './components/TemperatureAndDetails'
import TimeAndLocation from './components/TimeAndLocation'
import { useEffect, useState } from 'react'
import getFormattedWeatherData from './services/weatherService'
import { DateTime } from 'luxon'

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

    // console.log(data.timezone);
    // mutate the data.timezone into "Europe/Central European Time" format
    
    const tz_min = data.timezone/60;
    // console.log(tz_min)
    // const tz = data.timezone.toFormat("z")
    
    setWeather({data, tz_min});

    // data.timezone = local*60
   

    // console.log(tz);

    const local = DateTime.local().setZone("America/Winnipeg").toFormat("z")
    // console.log(local); //480


  }
  
  // Console.log tests
  console.log(weather.data);
  
  const [loading, setLoading] = useState(false);

  // useEffect
  useEffect(() => {
    fetchWeather();
    
    setTimeout(()=>{
      setLoading(true);
    }, 1000)


  }, [query, units])
  
  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-28 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl">
      <Nav />
      <Input />
      {(weather && loading) && (
        <>
          <TimeAndLocation weather={weather} />
          <TemperatureAndDetails weather={weather} />
          <Forecast attribute="today" weather={weather} />
          <Forecast attribute="tmr" weather={weather} />
          <Forecast attribute="afterTmr" weather={weather} />
        </>
      )}
    </div>
  )
}

export default App
