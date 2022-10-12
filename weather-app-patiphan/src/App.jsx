import './App.css'
import { useState } from "react";
import { keys }  from "./keys";


const api = {
  keys: keys.API_KEY,
  base: keys.BASE_URL,
};

function App() {

 const dataBuild = (d) => {
  let date = String(new window.Date());
  // "Wed Oct 12 2022 12:49:24 GMT+0200 (Central European Summer Time)"
  date = date.slice(3, 15);
  // Oct 12 2022 :: STILL STRING
  return date;
}


  // Hooks
  // the city you want to search
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});


  const search = (e)=>{
    // when we press enter, fetch data and setWeather(results)
    if(e.key === "Enter"){
      fetch(`${api.base}weather?q=${query}&units=metric&appid=${api.keys}`)
        .then((response) => response.json())
          .then((results) => {
            setQuery("");
            setWeather(results);
          })
        };
    }

    console.log(query);
    console.log(weather);
  
  return (
    <div className={
      typeof weather.main !== "undefined"
       ? weather.main.temp < 18 
       ? "App cold" 
       : "App sunny"
        :"App"
      }>
      <main>
        <div className="search-container">
          <input 
          type="text" 
          placeholder='Search...'
          className='search-bar'
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          onKeyPress={search}
          />
        </div>
        {typeof weather.main != "undefined" ? (
          <div>
          <div className="location-container">
            <div className="location">
              {weather.name}, {weather.sys.country}
            </div>
            <div className="date">
              {dataBuild(new Date())}
            </div>
            <div className='weather-container'>
              <div className="temperature">
                {Math.round(weather.main.temp)} °C
              </div>
              <div className="weather">
                {weather.weather[0].main}
              </div>
            </div>
          </div>
        </div>
        ) : (
            ""
        )};
      </main>
    </div>
  )
}

export default App
