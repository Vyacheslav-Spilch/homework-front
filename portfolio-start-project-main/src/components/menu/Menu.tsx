import React from "react";
import styled from "styled-components";




export const Menu = (props: {menuItems: Array <string>}) => {
    return (
        <StyledMenu>
                <ul>
                    {
                        props.menuItems.map(el => <li>
                            <a href="">{el}</a>
                        </li>)
                    }
                    {/* <li>
                        <a href="">Skills</a>
                    </li>
                    <li>
                        <a href="">Works</a>
                    </li>
                    <li>
                        <a href="">Testimony</a>
                    </li>
                    <li>
                        <a href="">Contact</a>
                    </li> */}
                </ul>
            </StyledMenu>
    )
}

const StyledMenu = styled.nav`
    width: 50%;
    padding: 30px;
    ul {
        display: flex;
        justify-content: space-between;
        list-style-type: none;
        
    }
    a {
        text-decoration: none;
        color: rgb(61, 67, 131);
        font-weight: bold;
        &:hover {
            color: green;
        }
    }
`
