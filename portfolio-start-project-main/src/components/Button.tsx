import React from "react";
import styled from "styled-components";

type ButtonPropsType = {
    width?: string,
} 

export const Button = styled.button<ButtonPropsType>`
    width: ${props => props.width || "30%"};
    min-height: 30px;
    border: 1px solid #fff;
    border-radius: 5px;
    background-color: #3b3b42;
    color: #fff;
    transition: all 0.2s ease-in;
    cursor: pointer;
    &:hover {
        background-color: #fff;
        color: #3b3b42;
        transition: all 0.2s ease-in;
    }
`