import Header from './components/Header'
import List from './components/List'
import Map from './components/Map'
import { CssBaseline, Grid } from "@mui/material";

function App() {

  return (
    <>
       <CssBaseline />
        <Header />
        <Grid container spacing={3} style={{width: '100%'}}>
          <Grid xs={12} md={4}>
            <List />
          </Grid>
          <Grid xs={12} md={8}>
            <Map />
          </Grid>
        </Grid>
        
    </>
  )
}

export default App
