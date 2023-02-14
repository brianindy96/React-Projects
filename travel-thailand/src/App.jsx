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
        img1: "/img/cm2.jpg",
        img2: "/img/cm6.jpg",
        img3: "/img/cm7.jpg",
        img4: "/img/cm5.jpg",
        img5: "/img/cm8.jpg",
        img6: "/img/cm4.jpg",
        img7: "/img/cm9.jpg",
      },
    {
        id: 2,
        name: "bangkok",
        title: "Bangkok",
        explore: "Explore",
        image: "/img/bk4.jpg",
        para1: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis nemo necessitatibus soluta quas doloremque earum ad beatae ut, molestias explicabo eius dicta facilis. Reiciendis ea dignissimos recusandae, nesciunt labore molestiae quos? Sequi fugit commodi tempore! Atque incidunt ullam illum vitae.",
        img1: "/img/bk3.jpg",
        img2: "/img/bk2.jpg",
        img3: "/img/bangkok2.jpg",
        img4: "/img/bk1.jpg",
        img5: "/img/bk6.jpg",
        img6: "/img/bk7.jpg",
        img7: "/img/bk8.jpg",
        reverse: "reverse",
    },
    {
        id: 3,
        name: "krabi",
        title: "Krabi",
        explore: "Explore",
        image: "/img/krabi.jpg",
        para1: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis nemo necessitatibus soluta quas doloremque earum ad beatae ut, molestias explicabo eius dicta facilis. Reiciendis ea dignissimos recusandae, nesciunt labore molestiae quos? Sequi fugit commodi tempore! Atque incidunt ullam illum vitae.",
        img1: "/img/cm2.jpg",
        img2: "/img/cm3.jpg",
        img3: "/img/cm7.jpg",
        img4: "/img/cm5.jpg",
        img5: "/img/cm6.jpg",
        img6: "/img/cm4.jpg",
        img7: "/img/cm8.jpg",
    },
    {
        id: 4,
        name: "ayutthhaya",
        title: "Ayutthaya",
        explore: "Explore",
        image: "/img/cm.jpg",
        para1: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis nemo necessitatibus soluta quas doloremque earum ad beatae ut, molestias explicabo eius dicta facilis. Reiciendis ea dignissimos recusandae, nesciunt labore molestiae quos? Sequi fugit commodi tempore! Atque incidunt ullam illum vitae.",
        reverse: "reverse",
        img1: "/img/cm2.jpg",
        img2: "/img/cm3.jpg",
        img3: "/img/cm7.jpg",
        img4: "/img/cm5.jpg",
        img5: "/img/cm6.jpg",
        img6: "/img/cm4.jpg",
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
