import { css } from "styled-components"

export const smallDesktop = (props) => {
    return css`
        @media only screen and (max-width: 940px) {
            ${props}
        }
    `;
}

export const tablet = (props) => {
    return css`
        @media only screen and (max-width: 768px) {
            ${props}
        }
    `;
}

export const mobile = (props) => {
    return css`
        @media only screen and (max-width: 480px) {
            ${props}
        }
    `;
}