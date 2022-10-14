import React from 'react'
import ThermostatIcon from '@mui/icons-material/Thermostat';
import InvertColorsIcon from '@mui/icons-material/InvertColors';
import AirIcon from '@mui/icons-material/Air';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import WbTwilightIcon from '@mui/icons-material/WbTwilight';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import ExploreIcon from '@mui/icons-material/Explore';
import { formatToLocalTime, iconUrlFromCode } from '../services/weatherServices';

const TemperatureAndDetails = ({ weather: {deg, feels_like, humidity, icon, main, speed, sunrise, sunset, temp, temp_max, temp_min, timezone, dt}}) => {
  return (
    <div>
      <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
        <p>{`${main}`}</p>
      </div>
    {/* TEMPERATURE DETAILS */}
      <div className="flex flex-row items-center justify-between text-white py-3">
        <img src={iconUrlFromCode(icon)} alt="" className="w-20" />
        <p className='text-5xl'>{`${temp.toFixed()}°`}</p>
        <div className='flex flex-col space-y-2'>
            <div className="flex font-light text-sm items-center justify-center">
                <ThermostatIcon></ThermostatIcon>
                <span className='font-medium ml-1'>Feels Like: {`${feels_like.toFixed()}°`}</span>
            </div>
            <div className="flex font-light text-sm items-center justify-center">
                <InvertColorsIcon></InvertColorsIcon>
                <span className='font-medium ml-1'>Humidity: {`${humidity} g/kg`}</span>
            </div>
            <div className="flex font-light text-sm items-center justify-center ">
                <AirIcon></AirIcon>
                <span className='font-medium ml-1'>Wind: {`${speed} miles/hr`}</span>
            </div>
            <div className="flex font-light text-sm items-center justify-center ">
                <ExploreIcon></ExploreIcon>
                <span className='font-medium ml-1'>Wind Direction: {`${deg}°`}</span>
            </div>
        </div>
      </div>
      {/*  */}
      <div className='flex flex-row items-centers justify-center space-x-2 text-white text-sm py-3'>
            <WbSunnyIcon></WbSunnyIcon>
            <p className="font-light">
                <span className='font-medium ml-1'>
                    Rise: {formatToLocalTime(sunrise, timezone, "hh:mm a")}
                </span>
            </p>
            <p className='font-light'>|</p>
            
            <WbTwilightIcon></WbTwilightIcon>
            <p className="font-light">
                <span className='font-medium ml-1'>
                    Sunset: {formatToLocalTime(sunset, timezone, "hh:mm a")}
                </span>
            </p>
            <p className='font-light'>|</p>

            <WhatshotIcon></WhatshotIcon>
            <p className="font-light">
                <span className='font-medium ml-1'>
                    Highest: {`${temp_max.toFixed()}°`}
                </span>
            </p>
            <p className='font-light'>|</p>

            <AcUnitIcon></AcUnitIcon>
            <p className="font-light">
                <span className='font-medium ml-1'>
                    Lowest: {`${temp_min.toFixed()}°`}
                </span>
            </p>
            <p className='font-light'>|</p>
        </div>
    </div>
  )
}

export default TemperatureAndDetails