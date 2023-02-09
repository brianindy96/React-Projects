import React from 'react'
import { formatToLocalTime } from '../services/weatherService'

const TimeAndLocation = ({ weather }) => {
  return (
    <div>
        <div className="flex items-center justify-center my-6">
        <p className="text-white text-xl font-extralight">
          "Date/ TIME and TIMEZONE LOCAL TIME: sdfasdf""
        </p>
      </div>

      <div className="flex items-center justify-center my-3">
        <p className="text-white text-3xl font-medium">
        {weather.name}, {weather.country}
        </p>
      </div>
    </div>
  )
}

export default TimeAndLocation