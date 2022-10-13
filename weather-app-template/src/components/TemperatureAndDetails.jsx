import React from 'react'
import ThermostatIcon from '@mui/icons-material/Thermostat';
import InvertColorsIcon from '@mui/icons-material/InvertColors';
import AirIcon from '@mui/icons-material/Air';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import WbTwilightIcon from '@mui/icons-material/WbTwilight';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WhatshotIcon from '@mui/icons-material/Whatshot';

const TemperatureAndDetails = () => {
  return (
    <div>
      <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
        <p>Cloudy</p>
      </div>
    {/* TEMPERATURE DETAILS */}
      <div className="flex flex-row items-center justify-between text-white py-3">
        <img src="/img/sun.png" alt="" className="w-20" />
        <p className='text-5xl'>34°</p>
        <div className='flex flex-col space-y-2'>
            <div className="flex font-light text-sm items-center justify-center">
                <ThermostatIcon></ThermostatIcon>
                <span className='font-medium ml-1'>Real Feel: 32°</span>
            </div>
            <div className="flex font-light text-sm items-center justify-center">
                <InvertColorsIcon></InvertColorsIcon>
                <span className='font-medium ml-1'>Humidity: 32°</span>
            </div>
            <div className="flex font-light text-sm items-center justify-center ">
                <AirIcon></AirIcon>
                <span className='font-medium ml-1'>Wind: 32°</span>
            </div>
        </div>
      </div>
      {/*  */}
      <div className='flex flex-row items-centers justify-center space-x-2 text-white text-sm py-3'>
            <WbSunnyIcon></WbSunnyIcon>
            <p className="font-light">
                <span className='font-medium ml-1'>
                    Rise: 06:45
                </span>
            </p>
            <p className='font-light'>|</p>
            
            <WbTwilightIcon></WbTwilightIcon>
            <p className="font-light">
                <span className='font-medium ml-1'>
                    Sunset: 18:00 PM
                </span>
            </p>
            <p className='font-light'>|</p>

            <WhatshotIcon></WhatshotIcon>
            <p className="font-light">
                <span className='font-medium ml-1'>
                    Highest: 40°
                </span>
            </p>
            <p className='font-light'>|</p>

            <AcUnitIcon></AcUnitIcon>
            <p className="font-light">
                <span className='font-medium ml-1'>
                    Lowest: 18°
                </span>
            </p>
            <p className='font-light'>|</p>
        </div>
    </div>
  )
}

export default TemperatureAndDetails