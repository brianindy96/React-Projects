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

export default getWeatherData;
