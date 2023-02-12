import { DateTime } from "luxon";

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = import.meta.env.VITE_BASE_URL;

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
        .then(formatCurrentWeather)

    // takes lat, lon from formattedCurrentWeather
    const { lat, lon } = formattedCurrentWeather
    
    // 5 days 3 hours Forecast
    const formattedForecastWeather = await getWeatherData("forecast", {
        // use lat, lon from formattedCurrentWeather as searchParams
        lat,
        lon,
        units: searchParams.units,
    })
        .then(formatForecastWeather)


    return { ...formattedForecastWeather, ...formattedCurrentWeather };
}

const formatForecastWeather = (data) =>{
    let { city, list, today, tmr, afterTmr } = data;

    // Go through first day (5 time intervals)
    today = list.slice(0,5).map((td) => {
        return{
            title: td.dt,
            temp: td.main.temp,
            icon: td.weather[0].icon,
            date: td.dt_txt,
        }
    });

    // Go through second day (5 time invervals)
    tmr = list.slice(8,13).map((td) => {
        return{
            title: td.dt,
            temp: td.main.temp,
            icon: td.weather[0].icon,
            date: td.dt_txt,
        }
    })
    // Go through after tomorrow (5 time intervals)
    afterTmr = list.slice(16,21).map((td) => {
        return{
            title: td.dt,
            temp: td.main.temp,
            icon: td.weather[0].icon,
            date: td.dt_txt,
        }
    })

    return { today, tmr, afterTmr };

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
        wind: {speed, deg},
        timezone,
    } = data

    const { main: details, description: desc, icon } = weather[0]

    const tz_min = (timezone/60);
    
    return { deg, tz_min, desc, lat, lon, temp,feels_like, temp_min, temp_max, humidity, name, dt, country, sunrise, sunset, details, icon, speed  };
}

// IconUrl from code

// const iconUrlFromCode = (code) => `
//    url()../${code}@2x.png
// `

export default getFormattedWeatherData

export {formatToLocalTime }
