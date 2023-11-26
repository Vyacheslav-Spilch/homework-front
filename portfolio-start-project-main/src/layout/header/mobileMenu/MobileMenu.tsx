
import styled, { css } from "styled-components";
import { theme } from "../../../styles/Theme";



export const MobileMenu = (props: {
    menuItems: Array <string>,
    projectsItems?: Array <string>,
}) => {
    return (
        <StyledMobileMenu>
            <BurgerButton isOpen = {true}>
                <span></span>
            </BurgerButton>

            <MobileMenuPopup isOpen = {true}>
                <ul>
                    {
                        props.menuItems.map((el, index) =>{
                            return <li key={index}>
                                <a href="">{el}</a>
                            </li>
                        })
                    }
                </ul>
            </MobileMenuPopup>
        </StyledMobileMenu>
    )
}



const StyledMobileMenu = styled.nav`
    display: none;
    li {
        transition: all 0.1s ease-in;
    }
    a {
        position: relative;

        &::before {
            content: "";
            display: inline-block;
            left: 50%;
            transform: translate(-50%);
            width: 100%;
            bottom: -10px;
            height: 2px;
            position: absolute;
        } 
        &:active {
            &::before {
                background-color: ${theme.colors.accent};
                transition: all 0.1s ease-in;
            }
        }
    }
    
    @media ${theme.media.tablet} {
        display: block;
    }
`

const MobileMenuPopup = styled.div<{isOpen: boolean}>`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgb(44, 44, 49, 0.9);
    z-index: 99999;
    display: none;

    ul {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 50px;
    }

    /* ${props => props.isOpen && css<{isOpen: boolean}>`
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
    `} */
    
`

const BurgerButton = styled.button<{isOpen: boolean}>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0px;
    right: 0px;
    height: 80px;
    width: 80px;

    z-index: 999999;

    span {
        display: flex;
        flex-direction: column;
        display: block;
        width: 36px;
        height: 2px;
        background-color: ${theme.colors.font};
        position: relative;

        /* ${props => props.isOpen && css<{isOpen: boolean}>`
            background-color: rgba(0, 0, 0, 0.0);
        `} */

        &::before {
            content: "";
            display: block;
            width: 36px;
            height: 2px;
            background-color: ${theme.colors.font};
            left: 0px;
            bottom: 0px;

            transform: translateY(-10px);
            position: absolute;

            /* ${props => props.isOpen && css<{isOpen: boolean}>`
                transform: rotate(-45deg) translateY(0);
            `} */
        }
        &::after {
            content: "";
            display: block;
            width: 36px;
            height: 2px;
            background-color: ${theme.colors.font};
            left: 0px;
            bottom: 0px;

            transform: translateY(10px);
            position: absolute;

            /* ${props => props.isOpen && css<{isOpen: boolean}>`
                transform: rotate(45deg) translateY(0);
            `} */
        }
    }
`

