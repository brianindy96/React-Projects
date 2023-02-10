import React from 'react'
import ExploreIcon from '@mui/icons-material/Explore';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import AirIcon from '@mui/icons-material/Air';
import InvertColorsIcon from '@mui/icons-material/InvertColors';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import WbTwilightIcon from '@mui/icons-material/WbTwilight';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import { iconUrlFromCode } from '../services/weatherService';

const TemperatureAndDetails = ({ weather}) => {
  return (
    <div>
        <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
            <p className='text-white text-xl'>{weather.data?.details}</p>
            <br />
            <p>{weather.data?.desc}</p>
      </div>
    {/* TEMPERATURE DETAILS */}
      <div className="flex flex-row items-center justify-between text-white py-3">
        <img src={iconUrlFromCode(weather.data?.icon)} alt="SUN" className="w-20" />
        <p className='text-5xl'>{weather.data?.temp}°</p>
        <div className='flex flex-col space-y-2'>
            <div className="flex font-light text-sm items-center justify-center">
                <ThermostatIcon></ThermostatIcon>
                <span className='font-medium ml-1'>Feels Like: {weather.data?.feels_like}°</span>
            </div>
            <div className="flex font-light text-sm items-center justify-center">
                <InvertColorsIcon></InvertColorsIcon>
                <span className='font-medium ml-1'>Humidity: {weather.data?.humidity} g/kg</span>
            </div>
            <div className="flex font-light text-sm items-center justify-center ">
                <AirIcon></AirIcon>
                <span className='font-medium ml-1'>Wind: {weather.data?.speed} m/s</span>
            </div>
            <div className="flex font-light text-sm items-center justify-center ">
                <ExploreIcon></ExploreIcon>
                <span className='font-medium ml-1'>Wind Direction: {weather.data?.deg}° </span>
            </div>
        </div>
      </div>
      {/*  */}
      <div className='flex flex-row items-centers justify-center space-x-2 text-white text-sm py-3'>
            <WbSunnyIcon></WbSunnyIcon>
            <p className="font-light">
                <span className='font-medium ml-1'>
                    Rise: {weather.data?.sunrise} FORMAT
                </span>
            </p>
            <p className='font-light'>|</p>
            
            <WbTwilightIcon></WbTwilightIcon>
            <p className="font-light">
                <span className='font-medium ml-1'>
                    Sunset: {weather.data?.sunset} FORMAT
                </span>
            </p>
            <p className='font-light'>|</p>

            <WhatshotIcon></WhatshotIcon>
            <p className="font-light">
                <span className='font-medium ml-1'>
                    Highest: {weather.data?.temp_max}°
                </span>
            </p>
            <p className='font-light'>|</p>

            <AcUnitIcon></AcUnitIcon>
            <p className="font-light">
                <span className='font-medium ml-1'>
                    Lowest: {weather.data?.temp_min}°
                </span>
            </p>
        </div>
    </div>
  )
}

export default TemperatureAndDetails