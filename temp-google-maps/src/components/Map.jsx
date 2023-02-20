import React from 'react'
import styled from 'styled-components'
import googleMapReact from 'google-map-react'
import { Paper, Typography } from "@mui/material"
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import Rating from '@mui/material';
const Map = () => {

    const coord = { lat: 0, lng: 0 }
  return (
    <div>
        <googleMapReact
        bootstrapURLKeys={{ key: '' }}
        defaultCenter={''}
        center={coord}
        defaultZoom={14}
        // Top Left Bottom Right
        margin={[50, 50, 50, 50]}
        options={''}
        onChange={''}
        onChildClick={''}
        >

        </googleMapReact>
    </div>
  )
}

export default Map