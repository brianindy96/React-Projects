import './App.css'
import { CssBaseline, Grid } from "@mui/material"
import Header from './components/Header'
import List from './components/List'
import Map from './components/Map'
import { useEffect, useState } from 'react'

function App() {
  
  const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000)
    }, [])

  return (
    <>
      <CssBaseline />
      <Header />
        <Grid container spacing={3} style={{ display: "flex", width: '100vw' }}>
          <Grid item xs={12} md={8}>
              <List />
          </Grid>
          <Grid item xs={12} md={4}>
            <Map />
          </Grid>
      </Grid>
    </>
  )
}

export default App
