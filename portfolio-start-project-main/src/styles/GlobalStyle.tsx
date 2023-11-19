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

    body {
        color: ${theme.colors.font};
        font-family: 'Playfair Display', serif;
        line-height: 1.2;
    }

    a {
        text-decoration: none;
    }

    ul {
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
`