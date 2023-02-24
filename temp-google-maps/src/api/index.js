import axios from "axios"

const URL = import.meta.env.VITE_BASE_URL;
const API_KEY = import.meta.env.VITE_API_KEY;
const SEC_URL = import.meta.env.VITE_SEC_URL;

// Player to give lat, lng
// then return placeId
// export const getPlaceId = (lat, lng) => {
//     return new Promise((resolve, reject) => {
//       const geocoder = new window.google.maps.Geocoder();
//       const latlng = new window.google.maps.LatLng(lat, lng);
//       geocoder.geocode({ location: latlng }, (results, status) => {
//         if (status === "OK") {
//           const placeId = results[0].place_id;
//           console.log(placeId);
//           resolve(placeId);
//         } else {
//           console.error(`Geocode was not successful for the following reason: ${status}`);
//           reject(status);
//         }
//       });
//     });
//   };

//Then the returned placeId to be passed as queryPlaceValueCityId value for getPlacesData
// getPlacesData will return data places
  

export const getPlacesLocation = async () => {
    
    const options = {
        params: {text: 'paris'},
        headers: {
          'X-RapidAPI-Key': API_KEY,
          'X-RapidAPI-Host': 'the-fork-the-spoon.p.rapidapi.com'
        }
      };
    try{
        const { data: { data } } = await axios.get(SEC_URL, options);
        // returns coordinates, id_city
        console.log(data);
        return data;
    } catch(err) {
        console.log(err);
    }
}


export const getPlacesData = async ({ data }) => {
    
    const options = {
        params: {
            queryPlaceValueCityId: data,
            pageSize: '10', 
            pageNumber: '1'
        },
        headers: {
          'X-RapidAPI-Key': API_KEY,
          'X-RapidAPI-Host': 'the-fork-the-spoon.p.rapidapi.com'
        }
      };
    try{
        const { data: { data } } = await axios.get(URL, options);
        console.log(data);
        return data;
    } catch(err) {
        console.log(err);
    }
}  


 

// LONDON CITY CODE 665790
