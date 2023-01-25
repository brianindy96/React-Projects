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
        @media only screen and (max-width: 810px){
            ${props}
        }
    `
}



