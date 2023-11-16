import React from "react";
import styled from "styled-components";




export const Menu = (props: {
    menuItems: Array <string>,
    projectsItems?: Array <string>,
}) => {
    return (
        <StyledMenu >
                <ul>
                    {
                        props.menuItems.map((el, index) =>{
                            return <li key={index}>
                                <a href="">{el}</a>
                            </li>
                        })
                    }
                </ul>
            </StyledMenu>
    )
}



const StyledMenu = styled.nav`
    padding: 30px;
    ul {
        display: flex;
        justify-content: center;
        gap: 30px;
        list-style-type: none;
        
    }
    a {
        text-decoration: none;
        color: rgb(255, 255, 255, 0.6);
        font-weight: bold;
        transition: all 0.2s ease-in;
        cursor: pointer;
        &:hover {
            color: #fff;
            font-size: 1.1rem;
            transition: all 0.2s ease-in;
        }
    }
`
