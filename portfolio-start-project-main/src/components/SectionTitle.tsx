import React from "react";
import styled from "styled-components";
import { theme } from "../styles/Theme";

type SectionTitlePropsType = {
    margin?: string,
}

export const SectionTitle = styled.h2<SectionTitlePropsType>`
    color: #fff;
    text-align: center;
    font-size: 40px;
    font-weight: 600;
    letter-spacing: 5px;
    margin: ${props => props.margin || "0 0 90px"};

    position: relative;
    &::before {
        content: " ";
        display: inline-block;
        bottom: -30px;
        height: 2px;
        background-color: ${theme.colors.accent};
        left: 50%;
        transform: translateX(-50%);
        width: 55px;

        position: absolute;
    }
`