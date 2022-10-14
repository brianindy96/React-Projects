const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = import.meta.env.VITE_BASE_URL;

const api = {
    key: API_KEY,
    base: BASE_URL
};

export const getWeatherData = (infoType, searchParams) => {
    const url = new URL(api.base + "/" + infoType);
    url.search = new URLSearchParams({...searchParams, appid: api.key});

    return fetch(url)
        .then((res) => res.json())
};

const formatCurrentWeather = (data) => {
    const {
        coord: {lat, lon},
        main: {temp, feels_like, temp_min, temp_max, humidity},
        wind: {speed, deg},
        name,
        dt,
        sys: {
            country,
            sunrise,
            sunset,
        },
        weather,
    } = data;

    // weather is an array
    const {main, icon} = weather[0];

    return {lat, 
            lon, 
            temp, 
            feels_like, 
            temp_min, 
            temp_max, 
            humidity, 
            speed, 
            name, 
            dt,
            country,
            sunrise,
            sunset,
            weather,
            deg,
            main,
            icon,
        }
}

export const getFormattedWeatherData = async (searchParams) => {
    const formattedCurrentWeather = await getWeatherData("weather", searchParams)
        .then((formatCurrentWeather))

        return formattedCurrentWeather;
};


