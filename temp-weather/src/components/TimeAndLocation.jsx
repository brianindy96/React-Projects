import React from 'react'
import { formatToLocalTime } from '../services/weatherService'

const TimeAndLocation = ({ weather }) => {
  return (
        <div>
          <div className="flex items-center justify-center my-6">
          <div className="text-white text-xl font-extralight">
            {formatToLocalTime(weather.data?.dt, weather.tz_min)}
          </div>
        </div>

        <div className="flex items-center justify-center my-3">
          <p className="text-white text-3xl font-medium">
          {`${weather.data?.name}, ${weather.data?.country}`}
          </p>
        </div>
      </div>
  )
}

export default TimeAndLocation