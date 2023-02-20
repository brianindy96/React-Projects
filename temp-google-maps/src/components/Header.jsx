import React, { useEffect, useState } from 'react'
import styled from "styled-components"
import { Autocomplete } from '@react-google-maps/api';
import { AppBar, Typography, InputBase, Box } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';

const Nav = styled.div`
    width: 100vw;
    height: 10vh;
    background-color: #e3e3e3;
    display: flex;
    padding: 20px;
    justify-content: space-between;
    align-items: center;
`
const Toolbar = styled.div`
    
`

const SearchCon = styled.div`
    display: flex;
    margin: 0 20px;
    border: 1px solid black;
`

const SearchIconCon = styled.div`
    
`


const Header = () => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // setTimeout(() => {
        //     setLoading(false);
        // }, 3000)
    }, [])
    
  return (
    <Nav position="static">
        <Toolbar>
            <Typography variant="h5">
                Travel Advisor
            </Typography>
        </Toolbar>
        <Box display="flex">
            <Typography variant="h6">
                Explore
            </Typography>
             
                {/* <Autocomplete> */}
                <SearchCon>
                    <SearchIconCon>
                        <SearchIcon />
                    </SearchIconCon>
                    <InputBase placeholder="Search...." />
                </SearchCon>
                {/* </Autocomplete> */}
        </Box>
    </Nav>
  )
}

export default Header