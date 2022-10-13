import React from 'react'
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const Forecast = ({ title }) => {
  return (
    <div>
        <div className="flex items-center justify-start mt-6 ">
            <span><AccessTimeIcon className="text-white mr-2"/></span>
            <p className='font-medium uppercase text-white'>
                {title}
            </p>
        </div>
        <hr className='my-2'/>

        <div className="flex flex-row items-center justify-between text-white">
            <div className="flex flex-col items-center justify-center">
                <p className="flex flex-col items-center justify-center">04:00</p>
                <img src="/img/sun.png" alt="" className='w-12 my-1' />
                <p className='font-medium'>18°</p>
            </div>
            <div className="flex flex-col items-center justify-center">
                <p className="flex flex-col items-center justify-center">05:00</p>
                <img src="/img/sun.png" alt="" className='w-12 my-1' />
                <p className='font-medium'>21°</p>
            </div>
            <div className="flex flex-col items-center justify-center">
                <p className="flex flex-col items-center justify-center">06:00</p>
                <img src="/img/sun.png" alt="" className='w-12 my-1' />
                <p className='font-medium'>24°</p>
            </div>
            <div className="flex flex-col items-center justify-center">
                <p className="flex flex-col items-center justify-center">07:00</p>
                <img src="/img/sun.png" alt="" className='w-12 my-1' />
                <p className='font-medium'>28°</p>
            </div>
            <div className="flex flex-col items-center justify-center">
                <p className="flex flex-col items-center justify-center">08:00</p>
                <img src="/img/sun.png" alt="" className='w-12 my-1' />
                <p className='font-medium'>30°</p>
            </div>
        </div>
    </div>
  )
}

export default Forecast