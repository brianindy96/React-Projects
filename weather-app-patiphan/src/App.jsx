import './App.css'
import { useState } from "react";
// import keys from "./keys";

// const api = {
//   key: keys.API_KEY,
//   base: keys.BASE_URL,
// };

function App() {

 const dataBuild = (d) => {
  let date = String(new window.Date());
  // "Wed Oct 12 2022 12:49:24 GMT+0200 (Central European Summer Time)"
  date = date.slice(3, 15);
  // Oct 12 2022 :: STILL STRING
  return date;
}

  return (
    <div className="App cloudy">
      <main>
        <div className="search-container">
          <input 
          type="text" 
          placeholder='Search...'
          className='search-bar'
          />
        </div>
        <div>
          <div className="location-container">
            <div className="location">
              Bangkok, Thailand
            </div>
            <div className="date">
              Oct 12 2022
            </div>
            <div className='weather-container'>
              <div className="temperature">
                30 °C
              </div>
              <div className="weather">
                Sunny
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
