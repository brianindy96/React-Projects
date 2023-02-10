import './App.css'
import Forecast from './components/Forecast'
import Input from './components/Input'
import Nav from './components/Nav'
import TemperatureAndDetails from './components/TemperatureAndDetails'
import TimeAndLocation from './components/TimeAndLocation'
import { useEffect, useState } from 'react'
import getFormattedWeatherData from './services/weatherService'
import { DateTime } from 'luxon'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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
  const [query, setQuery] = useState({q: 'bangkok'});
  const [units, setUnits] = useState('metric');
  
  // // Fetch Weather to global
  const fetchWeather = async () => {
    const data = await getFormattedWeatherData({...query, units});

    toast.success(`Weather fetched for ${data.name}, ${data.country}!`)
    // console.log(data.timezone);
    // mutate the data.timezone into "Europe/Central European Time" format
    
    // const tz_min = data.timezone/60;
    // console.log(tz_min)
    // const tz = data.timezone.toFormat("z")
    
    setWeather(data);

    // data.timezone = local*60
   

    // console.log(tz);

    const local = DateTime.local().setZone("America/New_York").toFormat("s")
    // console.log(local); //480
  

  }

  // Format Background 

  const formatBackground = () =>{
    if (!weather) return 'from-cyan-700 to-blue-700'
    const threshold = units === 'metric' ? 20 : 60
    if(weather.temp <= threshold) return 'from-cyan-700 to-blue-700'

    return 'from-yellow-700 to-orange-700'
  }
  
  // Console.log tests
  // console.log(weather);
  
  const [loading, setLoading] = useState(false);

  // useEffect
  useEffect(() => {
    const message = query.q ? query.q : "current location."

    toast.info('Fetching weather for ' + message)
    
    
    
    setTimeout(()=>{
      setLoading(true);
    }, 1000)
    fetchWeather();

  }, [query, units])
  
  return (
    <div className={`mx-auto max-w-screen-md mt-4 py-5 px-28 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl ${formatBackground()}`}>
      <Nav setQuery={setQuery} />
      <Input setQuery={setQuery} units={units} setUnits={setUnits} />
      {(weather && loading) && (
        <>
          <TimeAndLocation weather={weather} />
          <TemperatureAndDetails weather={weather} />
          <Forecast forecast={weather.today} weather={weather} />
          <Forecast forecast={weather.tmr} weather={weather}  />
          <Forecast forecast={weather.afterTmr} weather={weather} />
        </>
      )}


      <ToastContainer autoClose={2000} theme="colored" newestOnTop={true} />
    </div>
  )
}

export default App
