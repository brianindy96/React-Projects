
// Safely importing API_KEY and BASE_URL
const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = import.meta.env.VITE_BASE_URL;

const api = {
    key: API_KEY,
    base: BASE_URL,
};

console.log(api.base);

const getWeatherData = (infoType, searchParams,) =>{
    const url = new URL(api.base + "/" + infoType);
    url.search = new URLSearchParams({...searchParams, appid: api.key});

    return fetch(url)
        .then((res) => res.json())
            .then((data) => data);
}

export default getWeatherData;