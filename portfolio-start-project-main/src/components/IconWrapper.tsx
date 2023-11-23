import styled from "styled-components";
import { theme } from "../styles/Theme";

export const IconWrapper = styled.div`
    z-index: 1;

    position: relative;
    &::before {
    content: "";
    display: inline-block;
    left: 50%;
    top: 50%;
    transform: rotate(45deg) translate(-50%, -50%);
    transform-origin: left top;
    width: 80px;
    height: 80px;
    background-color: ${theme.colors.primaryBg};
    z-index: -1;

    position: absolute;
}
`