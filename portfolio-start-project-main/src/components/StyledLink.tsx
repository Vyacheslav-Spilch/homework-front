import styled from "styled-components"
import { theme } from "../styles/Theme"

export const StyledLink = styled.a`
    padding: 10px;
    letter-spacing: 1px;
    font-weight: 400;
    text-transform: uppercase;
    transition: 0.3s;
    position: relative;
    z-index: 1;
    &:hover {
        &::before {
            width: 120%;
            background-color: ${theme.colors.accent};
            transition: width 0.3s ease;
        }
    }
    &::before {
        content: "";
        display: inline-block;
        width: 10%;
        left: 50%;
        bottom: -5px;
        transform: translate(-50%, 0px);
        height: 10px;

        position: absolute;
        z-index: -1;
    }
    `
