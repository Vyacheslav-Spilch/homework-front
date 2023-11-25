import React from "react";
import styled from "styled-components";
import { theme } from "../../../styles/Theme";




export const HeaderMenu = (props: {
    menuItems: Array <string>,
    projectsItems?: Array <string>,
}) => {
    return (
        <StyledHeaderMenu >
                <ul>
                    {
                        props.menuItems.map((el, index) =>{
                            return <li key={index}>
                                <a href="">{el}</a>
                            </li>
                        })
                    }
                </ul>
            </StyledHeaderMenu>
    )
}



const StyledHeaderMenu = styled.nav`
    padding: 30px;
    ul {
        display: flex;
        justify-content: center;
        gap: 30px;
    }
    li {
        transition: all 0.2s ease-in;
    }
    li:hover {
        transform: scale(1.1);
        transition: all 0.2s ease-in;
    }
    a {
        position: relative;

        &::before {
            content: "";
            display: inline-block;
            left: 50%;
            transform: translate(-50%);
            width: 10%;
            bottom: -10px;
            height: 2px;
            position: absolute;
        } 
        &:hover {
            &::before {
                width: 120%;
                background-color: ${theme.colors.accent};
                transition: all 0.3s ease-in;
            }
        }
    }
    
    @media ${theme.media.tablet} {
        display: none;
    }
`