import React from "react";
import styled from "styled-components";




export const HeaderMenu = (props: {
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
    li {
        transition: all 0.2s ease-in;
    }
    li:hover {
        transform: scale(1.1);
        transition: all 0.2s ease-in;
    }
`