import './App.css'
import styled from "styled-components"
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import Cities from './pages/Cities'
import Navbar from './components/Navbar'
import ChiangMai from "./pages/CityDetails"
import CityDetails from './pages/CityDetails'
// import Bangkok from "./pages/Bangkok"
// import Krabi from "./pages/Krabi"
// import Ayutthaya from "./pages/Ayutthaya"



const Container = styled.div`
  min-height: 100vh;
`


function App() {

  const cities = [
    {
        id: 1,
        name: "chiangmai",
        title: "Chiang Mai",
        explore: "Explore",
        image: "/img/cm.jpg",
        para1: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis nemo necessitatibus soluta quas doloremque earum ad beatae ut, molestias explicabo eius dicta facilis. Reiciendis ea dignissimos recusandae, nesciunt labore molestiae quos? Sequi fugit commodi tempore! Atque incidunt ullam illum vitae.",
    },
    {
        id: 2,
        name: "bangkok",
        title: "Bangkok",
        explore: "Explore",
        image: "/img/bangkok2.jpg",
        para1: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis nemo necessitatibus soluta quas doloremque earum ad beatae ut, molestias explicabo eius dicta facilis. Reiciendis ea dignissimos recusandae, nesciunt labore molestiae quos? Sequi fugit commodi tempore! Atque incidunt ullam illum vitae.",
        reverse: "reverse",

    },
    {
        id: 3,
        name: "krabi",
        title: "Krabi",
        explore: "Explore",
        image: "/img/krabi.jpg",
        para1: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis nemo necessitatibus soluta quas doloremque earum ad beatae ut, molestias explicabo eius dicta facilis. Reiciendis ea dignissimos recusandae, nesciunt labore molestiae quos? Sequi fugit commodi tempore! Atque incidunt ullam illum vitae.",
    },
    {
        id: 4,
        name: "ayutthhaya",
        title: "Ayutthaya",
        explore: "Explore",
        image: "/img/cm.jpg",
        para1: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis nemo necessitatibus soluta quas doloremque earum ad beatae ut, molestias explicabo eius dicta facilis. Reiciendis ea dignissimos recusandae, nesciunt labore molestiae quos? Sequi fugit commodi tempore! Atque incidunt ullam illum vitae.",
        reverse: "reverse",
    },
  ];

  return (
    <Container>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/cities" element={<Cities cities={cities} />} />
          <Route path="/cities/:cityId" element={<CityDetails cities={cities} />} />
        </Routes>
    </Container>
  )
}

export default App
