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
        min-width: 360px;
    }
    

    a {
        letter-spacing: 1.5px;
        color: rgb(255, 255, 255, 0.5);
        font-weight: bold;
        text-decoration: none;
        cursor: pointer;
        transition: all 0.2s ease-in;
    }
    a:hover {
        font-weight: 600;
        color: ${theme.colors.font};
        transition: all 0.3s ease-in;
    }

    ul {
        list-style-type: none;
        display: flex;
        justify-content: center;
        gap: 30px;
        list-style-type: none;
    }

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
        font-weight: 400;
        font-size: 14px;
        letter-spacing: 1.5px;
        line-height: 1.4;
    }
`