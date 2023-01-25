import {css} from "styled-components"

// Mobile


export const mobileL = (props) => {
    return css`
        @media only screen and (max-width: 430px){
            ${props}
        }
    `
}

// Tablet

export const tablet = (props) => {
    return css`
        @media only screen and (max-width: 768px){
            ${props}
        }
    `
}

// Laptop


export const laptopL = (props) => {
    return css`
        @media only screen and (max-width: 1440px){
            ${props}
        }
    `
}

// Desktop

export const desktopL = (props) => {
    return css`
        @media only screen and (max-width: 2560px){
            ${props}
        }
    `
}


