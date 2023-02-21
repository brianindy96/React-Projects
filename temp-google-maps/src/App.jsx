import './App.css'
import { CssBaseline, Grid } from "@mui/material"
import Header from './components/Header'
import List from './components/List'
import Map from './components/Map'
import { useEffect, useState } from 'react'
import { getPlacesData } from './api'

function App() {
  
  const [coordinates, setCoordinates] = useState({lat: 18.7883, lng: 98.9853});
  const [bounds, setBounds] = useState(null);
  const [loading, setLoading] = useState(true);
  const [restaurant, setRestaurant] = useState([]);

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

        // GOT 10 RESTAURANT
        // getPlacesData()
        //   .then((data) => {
        //     setRestaurant(data);

        //   })
        
    }, [])

    // console.log(restaurant);

  return (
    <>
      <CssBaseline />
      <Header />
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
