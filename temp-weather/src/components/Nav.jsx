import React from 'react'

const Nav = ({ setQuery }) => {

    const cities = [
        {
            id: 1,
            title: 'London',
        },
        {
            id: 2,
            title: "Berlin",
        },
        {
            id: 3,
            title: "Chiang Mai",
        },
        {
            id: 4,
            title: "New York",
        },
        {
            id: 5,
            title: "Sydney",
        },
    ];


  return (
    <div className='flex items-center justify-center my-6'>
        {cities.map((city) =>(
            <button onClick={() => setQuery({ q: city.title})} key={city.id} className='text-white text-lg font-medium px-5'>{city.title}</button>
        ))}
    </div>
  )
}

export default Nav