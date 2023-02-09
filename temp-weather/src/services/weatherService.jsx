import { useEffect } from "react";

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = import.meta.env.VITE_BASE_URL;

const api = {
    api: API_KEY,
    base_url: BASE_URL,
}

const getWeatherData = (infoType, searchParams) => {
    // Access URL object
    const url = new URL(api.base_url + "/" + infoType);
    console.log(url);

    url.search = new URLSearchParams({...searchParams, appid: api.api});
    console.log(url.search);

    return fetch(url).then((res) => res.json())
}


export default getWeatherData;
