import React from 'react'
import styled from 'styled-components'
import GoogleMapReact from 'google-map-react'
import { Paper, Typography } from "@mui/material"
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

const Map = ({  coordinates, setBounds, setCoordinates }) => {

    const MAP_API_KEY = import.meta.env.VITE_MAP_API_KEY;

    // CHIANG MAI const coord = { lat: 18.7883, lng: 98.9853 }
    // const coordinates = { lat: 0, lng: 0 }

  return (
    <div style={{ marginTop: "20px", height: '85vh', width: '100%' }}>
        <GoogleMapReact
        bootstrapURLKeys={{ key: MAP_API_KEY }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={13}
        // Top Left Bottom Right
        margin={[50, 50, 50, 50]}
        options={''}
        onChange={(e) => {
          console.log(e);
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ne: e.marginBounds.ne, 
                     sw: e.marginBounds.sw, 
                    })
        }}
        // onChildClick={''}
        >

        </GoogleMapReact>
    </div>
  )
}

// GOOGLE MAP API
// requires: USER's inputs
//gives: coord, bounds

// LIST OF CITY
// requires: google_place_id 
// gives: city list gives coors, id_city, place_id

// Restaurants list
// requires : place_id
// gives: array of restaurant 

export default Map