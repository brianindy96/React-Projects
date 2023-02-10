import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { toast } from 'react-toastify';

const Input = ({ setQuery, units, setUnits }) => {

  const [city, setCity] = useState("")

  const handleChange = (e) => {
    // console.log(e.target.value)
    setCity(e.target.value)
  }

  const handleSearchSubmit = () =>{
    if (city !== '') {
      setQuery({q: city})
    }
  }

  const handleLocation = () => {
    if(navigator.geolocation){
      toast.info(`Fetching users location..`)
      navigator.geolocation.getCurrentPosition((pos) => {
        toast.success(`Location fetched!`)
        let lat = pos.coords.latitude;
        let lon = pos.coords.latitude;

        setQuery({lat, lon})
      })
    }
  }

  const handleUnitsChange = (e) => {
    const selectedUnit = e.currentTarget.name

    if( units!== selectedUnit) setUnits(selectedUnit);
  }

  return (
    <div className='flex flex-row justify-center my-6'>
        <div className='flex flex-row w-3/4 items-center justify-center space-x-4'>
            <input value={city} onChange={handleChange} type="text" className='text-xl font-light p-2 w-full shadow-xl capitalize focus:outline-none placeholder:lowercase' placeholder='Search Here...' />
            <SearchIcon onClick={handleSearchSubmit} size={25} className='text-white cursor-pointer transition ease-out hover:scale-110' />
            <LocationOnIcon onClick={handleLocation} size={25} className='text-white cursor-pointer transition ease-out hover:scale-110' />
        </div>

        <div className='flex flex-row w-1/4 items-center justify-center'>
            <button onClick={handleUnitsChange} className="text-xl text-white font-light " name="metric">°C</button>
            <p className='text-white mx-3'>|</p>
            <button onClick={handleUnitsChange} className="text-xl text-white font-light" name="imperial">°F</button>
        </div>
    </div>
  )
}

export default Input