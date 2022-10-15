import React, { useState } from 'react'
import PlaceIcon from '@mui/icons-material/Place';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from '@mui/material';

const Inputs = ({ setQuery, units, setUnits}) => {

  const [city, setCity] = useState('');
  
  const handleSearch = (e) =>{
    e.preventDefault();

    if(city !== '') setQuery({q: city})
    
    setCity("");
  }

  const handleLocationClick = () =>{
    // if we have permission to user's location
    if(navigator.geolocation){
      
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        setQuery({
          lat,
          lon
        })
      })
    }
  }

  const handleUnitsChange = (e) =>{
    const selectedUnit = e.target.name;
    console.log(selectedUnit);
    if( units !== selectedUnit) setUnits(selectedUnit);
  }

  return (
    <div className='flex flex-row justify-center my-6'>
        <div className="flex flex-row w-3/4 items-center justify-center space-x-4" >
            <input 
            value={city}
            onChange={(e) => setCity(e.target.value)}
            type="text"
            placeholder='Search your City here..' 
            className='text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize'
            />
            {console.log(city)}
            <IconButton>
              <SearchIcon 
              onClick={handleSearch}
              style={{color: "white", cursor: "pointer"}}
              className="text-white cursor-pointer transition ease-out hover:scale-110"
              />
            </IconButton>
            <PlaceIcon 
            onClick={handleLocationClick}
            style={{color: "white", cursor: "pointer"}}
            className="text-white cursor-pointer transition ease-out hover:scale-110"
            />
        </div>
        <div className="flex flex-row w-1/4 items-center justify-center">
            <button
            name="metric"
            className="text-xl text-white font-light transition ease-out hover:scale-110"
            onClick={handleUnitsChange}
            >
            °C
            </button>
            <p className="text-xl text-white mx-1">|</p>
            <button
            name="imperial"
            onClick={handleUnitsChange}
            className="text-xl text-white font-light transition ease-out hover:scale-110"
            >
            °F
            </button>
        </div>
    </div>
  )
}

export default Inputs