import React from "react";
import styled from "styled-components";
import { font } from "../styles/Common";
import { theme } from "../styles/Theme";

type ButtonPropsType = {
    width?: string,
    background?: string,
} 

export const Button = styled.button<ButtonPropsType>`
    ${font({Fmax: 16, Fmin: 12, lineHeight: 1.1})}
    font-family: 'Playfair Display', serif;
    /* font-size: 16px; */
    width: ${props => props.width || "30%"};
    min-height: 30px;
    padding: 7px 10px;
    border: 1px solid #fff;
    border-radius: 5px;
    text-transform: uppercase;
    background-color: ${props => props.background || `${theme.colors.secondaryBg}`};
    color: ${theme.colors.font};
    transition: all 0.2s ease-in;
    cursor: pointer;
    &:hover {
        background-color: ${theme.colors.font};
        color: ${theme.colors.accent};
        transition: all 0.2s ease-in;
    }
`