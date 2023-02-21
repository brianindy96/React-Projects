import axios from "axios"

const URL = import.meta.env.VITE_BASE_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

const options = {
    params: {
        queryPlaceValueCityId: '665790',
        pageSize: '10', 
        pageNumber: '1'
    },
    headers: {
      'X-RapidAPI-Key': API_KEY,
      'X-RapidAPI-Host': 'the-fork-the-spoon.p.rapidapi.com'
    }
  };

// LONDON CITY CODE 665790

// axios.request(options).then(function (response) {
//     console.log(response.data);
//     }).catch(function (error) {
//     console.log(error);
// });

export const getPlacesData = async () => {
    try{
        const { data: { data } } = await axios.get(URL, options);
        
        return data;
    } catch(err) {
        console.log(err);
    }
}

