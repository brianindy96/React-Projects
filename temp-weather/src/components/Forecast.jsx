import React from 'react'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { formatToLocalTime, iconUrlFromCode } from '../services/weatherService';
const Forecast = ({ weather }) => {
  return (
    <div>
        <div>
        <div className="flex items-center justify-start mt-6 ">
            <span><AccessTimeIcon className="text-white mr-2"/></span>
            <p className='font-medium uppercase text-white'>
            {formatToLocalTime(weather.data?.dt, weather.tz_min, "cccc, LL LLL")}
            </p>
        </div>
        <hr className='my-2'/>
        {console.log(weather.data?.today)}
        <div className="flex flex-row items-center justify-between text-white">
            {weather.data?.today.map((td) => (
                <div className="flex flex-col items-center justify-center">
                    <p className="flex flex-col items-center justify-center">{td.title}</p>
                    <img src={iconUrlFromCode(td.icon)} alt="icon" className='w-12 my-1' />
                    <p className='font-medium'>{td.temp.toFixed()}°</p>
                </div>
            ))}   
        </div>
    </div>
    </div>
  )
}

export default Forecast