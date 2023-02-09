const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = import.meta.env.VITE_BASE_URL;
import { DateTime } from "luxon";

const api = {
    key: API_KEY,
    base: BASE_URL
};

// Call API based on infoType and query
const getWeatherData = (infoType, searchParams) => {
    // Access URL object
    const url = new URL(api.base+ "/" + infoType);
    url.search = new URLSearchParams({...searchParams, appid: api.key});
    
    return fetch(url)
        .then((res) => res.json())
}

// get formatted weather data 
const getFormattedWeatherData = async (searchParams) => {
    // Current Weather Forecast
    const formattedCurrentWeather = await getWeatherData('weather', searchParams)
        .then(data => formatCurrentWeather(data))

    // takes lat, lon from formattedCurrentWeather
    const { lat, lon, timezone } = formattedCurrentWeather
    
    // 5 days 3 hours Forecast
    const formattedForecastWeather = await getWeatherData("forecast", {
        // use lat, lon from formattedCurrentWeather as searchParams
        lat,
        lon,
        units: searchParams.units,
    })
        .then(data => formatForecastWeather(data))


    return { ...formattedForecastWeather, ...formattedCurrentWeather };
}

const formatForecastWeather = (data) =>{
    let { timezone, list, today, tmr, afterTmr } = data;
    // Go through first day (5 time intervals)
    today = list.slice(0,5).map((td) => {
        return{
            title: formatToLocalTime(td.dt, timezone, 'hh:mm a'),
            temp: td.main.temp,
            icon: td.weather[0].icon,

        }
    });

    // Go through second day (5 time invervals)
    tmr = list.slice(8,13).map((td) => {
        return{
            title: formatToLocalTime(td.dt, timezone, 'hh:mm a'),
            temp: td.main.temp,
            icon: td.weather[0].icon,
        }
    })
    // Go through after tomorrow (5 time intervals)
    afterTmr = list.slice(16,21).map((td) => {
        return{
            title: formatToLocalTime(td.dt, timezone, 'hh:mm a'),
            temp: td.main.temp,
            icon: td.weather[0].icon,
        }
    })

    return { timezone, today, tmr, afterTmr };

}

                        // parameters  =  (default Value, if no parameters passed through)
const formatToLocalTime = (secs, zone, format = "cccc, dd LLL, yyyy' | Local time: 'hh:mm a") => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

// Format data into what we want
const formatCurrentWeather = (data) => {
    const {
        coord: {lat, lon},
        main: {temp, feels_like, temp_min, temp_max, humidity},
        name,
        dt,
        sys: {country, sunrise, sunset},
        weather,
        wind: {speed},
        timezone,
    } = data

    const { main: details, description: desc, icon } = weather[0]
    
    return { timezone, desc, lat, lon, temp,feels_like, temp_min, temp_max, humidity, name, dt, country, sunrise, sunset, details, icon, speed  };
}

// IconUrl from code

const iconUrlFromCode = (code) => `
    http://openweathermap.org/img/wn/${code}@2x.png
`

export default getFormattedWeatherData

export {formatToLocalTime, iconUrlFromCode }
