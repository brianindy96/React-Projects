import {css} from "styled-components"

// Mobile

export const xs = (props) => {
    return css`
        
        @media only screen and (min-width: 450px){
            ${props}
        }
    `
}

export const sm = (props) => {
    return css`
        @media only screen and (min-width: 768px){
            ${props}
        }
    `
}

export const tablet = (props) => {
    return css`
        @media only screen and (max-width: 820px){
            ${props}
        }
    `
}

