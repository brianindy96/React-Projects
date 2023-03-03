import React from 'react'
import styled from 'styled-components'
import Project from './Project'

const Container = styled.div`
    min-height: 100vh;    
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
            summary: "E-Commerce store",
            technologies: 'React, Commerce.js, Material UI, styled-components, React Router',
            img: "/img/perfume.png",
            reverse: null,
            github: "https://github.com/brianindy96/React-Projects/tree/maine/perfume-shop",
            live: "",
        },
        {
            id: 2,
            title: "Weathering the Storm",
            subtitle: "Weather App",
            summary: "This is a clone of the Google homepage. It uses the Google API to search for images and the Google Custom Search API to search for websites. It also uses the Google Translate API to translate the page into different languages.",
            technologies: 'React, OpenWeatherMap API, React-Router, styled-components, Luxon3',
            img: "/img/weather.png",
            reverse: true,
            github: "https://github.com/brianindy96/React-Projects/tree/maine/weather-app",
            live: "",
        },
        {
            id: 3,
            title: "Die Bibliothek",
            subtitle: "CRUD Library App",
            summary: "",
            technologies: 'React, Tailwind CSS, Firebase, React-Router, MUI',
            img: "/img/library4.png",
            reverse: null,
            github: "https://github.com/brianindy96/React-Projects/tree/maine/crud-library",
            live: "",
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