import React from "react";
import styled from "styled-components";
import { theme } from "../../styles/Theme";




export const Menu = (props: {
    menuItems: Array <string>,
    projectsItems?: Array <string>,
}) => {
    return (
        <StyledTabMenu >
                <ul>
                    {
                        props.menuItems.map((el, index) => {
                            return <StyledList key={index}>
                                <StyledLink href="">{el}</StyledLink>
                                    </StyledList>
                        })
                    }
                </ul>
            </StyledTabMenu>
    )
}



const StyledTabMenu = styled.nav`
    ul {
        margin: 40px 0;
    }
    li {
        position: relative;
        z-index: 1;
    }

`

const StyledList = styled.li`
    &:hover {
        
    } 
`

const StyledLink = styled.a`
    padding: 10px;
    letter-spacing: 1px;
    font-weight: 400;
    text-transform: uppercase;
    transition: 0.3s;
    &:hover {
        &::before {
            height: 10px;
            width: 100%;
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
        /* height: 10px; */

        position: absolute;
        z-index: -1;
    }
`
