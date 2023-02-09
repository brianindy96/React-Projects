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
            <p className='text-white text-xl'>{weather.details}</p>
            <br />
            <p>{weather.desc}</p>
      </div>
    {/* TEMPERATURE DETAILS */}
      <div className="flex flex-row items-center justify-between text-white py-3">
        <img src={iconUrlFromCode(weather.icon)} alt="SUN" className="w-20" />
        <p className='text-5xl'>{weather.temp}°</p>
        <div className='flex flex-col space-y-2'>
            <div className="flex font-light text-sm items-center justify-center">
                <ThermostatIcon></ThermostatIcon>
                <span className='font-medium ml-1'>Feels Like: 50°</span>
            </div>
            <div className="flex font-light text-sm items-center justify-center">
                <InvertColorsIcon></InvertColorsIcon>
                <span className='font-medium ml-1'>Humidity: {weather.humidity} g/kg</span>
            </div>
            <div className="flex font-light text-sm items-center justify-center ">
                <AirIcon></AirIcon>
                <span className='font-medium ml-1'>Wind: {weather.speed} m/s</span>
            </div>
            <div className="flex font-light text-sm items-center justify-center ">
                <ExploreIcon></ExploreIcon>
                <span className='font-medium ml-1'>Wind Direction: </span>
            </div>
        </div>
      </div>
      {/*  */}
      <div className='flex flex-row items-centers justify-center space-x-2 text-white text-sm py-3'>
            <WbSunnyIcon></WbSunnyIcon>
            <p className="font-light">
                <span className='font-medium ml-1'>
                    Rise: {weather.sunrise} format
                </span>
            </p>
            <p className='font-light'>|</p>
            
            <WbTwilightIcon></WbTwilightIcon>
            <p className="font-light">
                <span className='font-medium ml-1'>
                    Sunset: {weather.sunset} 
                </span>
            </p>
            <p className='font-light'>|</p>

            <WhatshotIcon></WhatshotIcon>
            <p className="font-light">
                <span className='font-medium ml-1'>
                    Highest: {weather.temp_max}°
                </span>
            </p>
            <p className='font-light'>|</p>

            <AcUnitIcon></AcUnitIcon>
            <p className="font-light">
                <span className='font-medium ml-1'>
                    Lowest: {weather.temp_min}°
                </span>
            </p>
            <p className='font-light'>|</p>
        </div>
    </div>
  )
}

export default TemperatureAndDetails