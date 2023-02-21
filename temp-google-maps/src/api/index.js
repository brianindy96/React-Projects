import axios from "axios"

const URL = import.meta.env.VITE_BASE_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

const options = {
  // SINCE WE ARE USING AXIOS, the two objects (GET and URL) we do not need
    // ACTION
    // method: 'GET',
    // FROM WHERE
    // url: URL,
    // PARAMETERS
    params: {
    bl_latitude: 11.847676,
    tr_latitude: 12.838442,
    bl_longitude: 109.095887,
    tr_longitude: 109.149359,
    // restaurant_tagcategory_standalone: '10591',
    // restaurant_tagcategory: '10591',
    // // LIMIT OF RESTAURANT
    // limit: '30',
    // // CURRENCY
    // currency: 'USD',
    // open_now: 'false',
    // // UNITS
    // lunit: 'km',
    // // LANGUAGE
    // lang: 'en_US'
    },
    headers: {
        'X-RapidAPI-Key': API_KEY,
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
    }
};

// axios.request(options).then(function (response) {
//     console.log(response.data);
//     }).catch(function (error) {
//     console.log(error);
// });

export const getPlacesData = async () => {
    try{
        const data = await axios.get(URL, options);
        
        console.log(data);
        return data;
    } catch(err) {
        console.log(err);
    }
}

