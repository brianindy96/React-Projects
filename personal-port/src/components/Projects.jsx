import React from 'react'
import styled from 'styled-components'
import Project from './Project'
import { xs, sm, md, lg, xl } from '../responsive'
const Container = styled.div`
    min-height: 100vh; 

    ${md({padding: "2rem"})};
`

const Wrapper = styled.div`
    max-width: 1280px;
    margin: 0 auto;
`
const Projects = () => {

    const projects = [
        {
            id: 1,
            title: "LA FRAGILITE",
            subtitle: "Perfume E-commerce Website",
            summary: "La Fragilité is an e-commerce store designed to provide a realistic and functional shopping experience. The site includes a shopping cart, checkout process, and payment integration with Stripe. Customers can also sort products and filter by price and recommendations.",
            summary2: "",
            technologies: 'React, Commerce.js, Material UI, styled-components, React Router',
            img: "/img/perfume.png",
            reverse: null,
            github: "https://github.com/brianindy96/React-Projects/tree/maine/perfume-shop",
            live: "https://la-fragilite.netlify.app/",
        },
        {
            id: 2,
            title: "Weathering the Storm",
            subtitle: "Weather App",
            summary: "Weathering the Storm is a weather app developed using React that allows users to easily access up-to-date weather information for their location. The app integrates various APIs from OpenWeatherMap services to gather real-time weather data, including temperature, humidity, and precipitation, to provide accurate and detailed forecasts.",
            summary2: "NOTE: This website prioritizes showcasing APIs and their functionalities over mobile responsiveness. As a result, no responsiveness was implemented in the project.",
            technologies: 'React, OpenWeatherMap API, React-Router, styled-components, Luxon3',
            img: "/img/weather.png",
            reverse: true,
            github: "https://github.com/brianindy96/React-Projects/tree/maine/weather-app",
            live: "https://weathering-the-storm.netlify.app/",
        },
        {
            id: 3,
            title: "Die Bibliothek",
            subtitle: "CRUD Library App",
            summary: "Die Bibliothek- a library CRUD App is an application that allows users to create, read, update, and delete library books. The application uses Firebase's Realtime Database to store and retrieve data.",
            summary2: "The user interface is built with Tailwind CSS to create a responsive and accessible experience. React Router is integrated to enable smooth navigation and user interactions.",
            technologies: 'React, Tailwind CSS, Firebase, React-Router, MUI',
            img: "/img/library4.png",
            reverse: null,
            github: "https://github.com/brianindy96/React-Projects/tree/maine/crud-library",
            live: "https://library-crud-portfolio.web.app/",
        },
    ]
  return (
    <Container id='project'>
        <Wrapper>
            {projects.map((project) => (
                <>
                    <Project key={project.id} project={project} />
                </>
            ))}
        </Wrapper>
    </Container>
  )
}

export default Projects