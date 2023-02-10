import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    
`
const Input = () => {
  return (
    <Container>
        <div className='flex flex-row w-3/4 items-center justify-center space-x-4'>
            <input placeholder='Search Here...'></input>
            <SearchIcon />
            <LocationOnIcon/>
        </div>

        <div className='flex flex-row w-1/4 items-center justify-center'>
            <button name="metric">°C</button>
            <p>|</p>
            <button name="imperial">°F</button>
        </div>
    </Container>
  )
}

export default Input