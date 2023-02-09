const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = import.meta.env.VITE_BASE_URL;

const api = {
    key: API_KEY,
    base: BASE_URL
};


const getWeatherData = (infoType, searchParams) => {
    // Access URL object
    const url = new URL(api.base+ "/" + infoType);
    url.search = new URLSearchParams({...searchParams, appid: api.key});
    
    return fetch(url)
        .then((res) => res.json())
}

const formatCurrentWeather = (data) => {
    const {
        coord: {lat, lon},
        main: {temp, feels_like, temp_min, temp_max, humidity},
        name,
        dt,
        sys: {country, sunrise, sunset},
        weather,
        wind: {speed}
    } = data

    const { main: details, icon } = weather[0]
    
    return {lat, lon, temp,feels_like, temp_min, temp_max, humidity, name, dt, country, sunrise, sunset, details, icon, speed  };
}

const getFormattedWeatherData = async (searchParams) => {
    const formattedCurrentWeather = await getWeatherData('weather', searchParams)
        .then(data => formatCurrentWeather(data))

    return formattedCurrentWeather;
}

export default getFormattedWeatherData
