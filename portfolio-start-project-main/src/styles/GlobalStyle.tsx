import { createGlobalStyle } from "styled-components";
import { theme } from "./Theme";

export const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    *::selection {
        color: ${theme.colors.font};
        background-color: ${theme.colors.fontLink};
    }

    body {
        color: ${theme.colors.font};
        font-family: 'Playfair Display', serif;
        line-height: 1.2;
    }
    

    a {
        color: rgb(255, 255, 255, 0.5);
        font-weight: bold;
        text-decoration: none;
        cursor: pointer;
        transition: all 0.2s ease-in;
    }
    a:hover {
        color: ${theme.colors.font};
        transition: all 0.4s ease-in;
    }

    ul {
        list-style-type: none;
        display: flex;
        justify-content: center;
        gap: 30px;
        list-style-type: none;
    }

    /* li {
        transition: all 0.2s ease-in;
    }
    li:hover {
        transform: scale(1.1);
        transition: all 0.2s ease-in;
    } */

    button {
        background-color: unset;
        border: none;
    }

    section:nth-of-type(odd) {
        background-color: ${theme.colors.primaryBg};
    }
    
    section:nth-of-type(even) {
        background-color: ${theme.colors.secondaryBg};
    }

    section {
        padding: 100px 0;
    }

    p {
        letter-spacing: 1.5px;
    }
`