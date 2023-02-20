import React from 'react'
import styled from 'styled-components'
import GoogleMapReact from 'google-map-react'
import { Paper, Typography } from "@mui/material"
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

const Map = () => {

    const API_KEY = import.meta.env.VITE_API_KEY;

    const coord = { lat: 18.7883, lng: 98.9853 }
  return (
    <div style={{ marginTop: "20px", height: '85vh', width: '100%' }}>
        <GoogleMapReact
        bootstrapURLKeys={{ key: API_KEY }}
        defaultCenter={coord}
        center={coord}
        defaultZoom={13}
        // Top Left Bottom Right
        margin={[50, 50, 50, 50]}
        options={''}
        // onChange={''}
        onChildClick={''}
        >

        </GoogleMapReact>
    </div>
  )
}

export default Map