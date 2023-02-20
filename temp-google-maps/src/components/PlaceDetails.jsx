import React from 'react'

const PlaceDetails = ({ place }) => {
  return (
    <div style={{border: "1px solid black", height: "100%", margin: "20px 10px", padding: "20px", borderRadius: "10px"}}>
        {place.name}
    </div>
  )
}

export default PlaceDetails