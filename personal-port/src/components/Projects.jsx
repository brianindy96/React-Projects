import React from 'react'
import styled from 'styled-components'
import Project from './Project'

const Container = styled.div`
    min-height: 100vh;
    border-top: 1px solid #4e4e4e;
`

const Wrapper = styled.div`
    max-width: 1280px;
    margin: 0 auto;
`
const Projects = () => {

    const projects = [
        {
            title: "Parfume",
            subtitle: "Ecommerce Website",
            summary: "E-Commerce store",
            technologies: 'React, Commerce.js, Material UI, styled-components, React Router',
            img: "/img/google.png",
        },
        {
            title: "Weathering the Storm",
            subtitle: "Weather App",
            summary: "This is a clone of the Google homepage. It uses the Google API to search for images and the Google Custom Search API to search for websites. It also uses the Google Translate API to translate the page into different languages.",
            technologies: 'React, OpenWeatherMap API, React-Router, styled-components, Luxon3',
            img: "/img/project-two.png",
        },
        {
            title: "Die Bibliothek",
            subtitle: "CRUD Library App",
            summary: "",
            technologies: 'React, Tailwind CSS, Firebase, React-Router, MUI',
            img: "/img/project-three.png",
        },
    ]
  return (
    <Container id='project'>
        <Wrapper>
            <Project img="/img/google.png" />
            <Project img="/img/project-two.png" reverse/>
            <Project img="/img/project-three.png" />
        </Wrapper>
    </Container>
  )
}

export default Projects