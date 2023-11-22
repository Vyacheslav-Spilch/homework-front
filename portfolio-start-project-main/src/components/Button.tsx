import React from "react";
import styled from "styled-components";
import { theme } from "../styles/Theme";

type ButtonPropsType = {
    width?: string,
    background?: string,
} 

export const Button = styled.button<ButtonPropsType>`
    width: ${props => props.width || "30%"};
    min-height: 30px;
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