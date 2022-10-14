
// Safely importing API_KEY and BASE_URL
const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = import.meta.env.VITE_BASE_URL;

const api = {
    key: API_KEY,
    base: BASE_URL,
};

export const getWeatherData = (infoType, searchParams,) =>{
    const url = new URL(api.base + "/" + infoType);
    url.search = new URLSearchParams({...searchParams, appid: api.key});

    return fetch(url)
        .then((res) => res.json())
            .then((data) => data);
}

export const formatCurrentWeather = (data) => {
    // here the data is the JSON that we want
    const {
        coord: {lat,lon},
        main: {
            temp,
            feels_like,
            temp_min,
            temp_max,
            humidity,
        },
        name,
        dt,
        sys: {
            country,
            sunrise,
            sunset,
        },
        weather,
        wind: {speed} 
    } = data

    const {main: details, icon} = weather[0];

    return {lat, lon, temp, feels_like, temp_min, details, icon, temp_max, humidity, name, dt, sunrise, country, sunset, weather, speed};
};

export const getFormattedWeatherData = async (searchParams) => {
    const formattedCurrentWeather = await getWeatherData('weather', searchParams)
        // when there's only one parameter, just put like this
        .then(formatCurrentWeather)

        return formattedCurrentWeather;
}


