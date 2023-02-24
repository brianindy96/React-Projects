import './App.css'
import { CssBaseline, Grid } from "@mui/material"
import Header from './components/Header'
import List from './components/List'
import Map from './components/Map'
import { useEffect, useState } from 'react'
import { getPlacesData, getPlacesLocation } from './api'

function App() {
  
  const [coordinates, setCoordinates] = useState({lat: 18.7883, lng: 98.9853});
  const [bounds, setBounds] = useState(null);
  const [loading, setLoading] = useState(true);
  const [restaurant, setRestaurant] = useState([]);
  const [suggestions, setSuggestions] = useState({});

  // Get current Location
  // useEffect(() => {
  //   navigator.geolocation.getCurrentPosition(() => {
  //     setCoordinates({ lat: latitude, lng: longitude});
  //   })
  // }, [])

  
  
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000)

        // getPlacesLocation()
        //   .then(data => {
        //     setSuggestions(data);
        //   })

        // getPlacesData(suggestions)
        //   .then(data => {
        //     console.log(data);
        //   })

        // getPlacesList()
        //   .then((data) => {
        //     setRestaurant(data);
        //     console.log(data);
        //   })

        // GOT 10 RESTAURANT
        // getPlacesData()
        //   .then((data) => {
        //     setRestaurant(data);
        //     console.log(data);
        //     getPlaceId(coordinates);
        //   })
        

        
    }, [coordinates])

    useEffect(() => {
      // async function fetchData() {
      //   try {
      //     const placesLocationData = await getPlacesLocation();
      //     const placesData = await getPlacesData({ data: placesLocationData[0].id });
      //     console.log(placesData);
      //   } catch (err) {
      //     console.error(err);
      //   }
      // }
    
      // fetchData();
    }, []);

    // console.log(restaurant);

  return (
    <>
      <CssBaseline />
      <Header suggestions={suggestions}/>
      {!loading && (
        <Grid container spacing={3} style={{ display: "flex", width: '100vw' }}>
          <Grid item xs={12} md={8}>
              <List />
          </Grid>
          <Grid item xs={12} md={4}>
            <Map 
              setBounds={setBounds}
              setCoordinates={setCoordinates}
              coordinates={coordinates}
            />
          </Grid>
        </Grid>
      )}
    </>
  )
}

export default App
