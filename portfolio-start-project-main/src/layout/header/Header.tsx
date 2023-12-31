import { access } from "fs";
import React from "react";
import styled from "styled-components";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Logo } from "../../components/logo/Logo";
import { Menu } from "../../components/menu/Menu";
import { theme } from "../../styles/Theme";
import { HeaderMenu } from "./headerMenu/HeaderMenu";
import { MobileMenu } from "./mobileMenu/MobileMenu";

const menuHeader = ["Home", "Skills", "Works", "Testimony", "Contact"]
// const menuHeader = [
//     {
//         id: "Home"
//     },
//     {
//         id: "Skills"
//     },
//     {
//         id: "Works"
//     },
//     {
//         id: "Testimony"
//     },
//     {
//         id: "Contact"
//     },
// ]

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify={"flex-end"} align={"center"}>
                    <HeaderMenu menuItems={menuHeader}/>
                    <MobileMenu menuItems={menuHeader}/>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    )
}

const StyledHeader = styled.header`
    width: 100%;
    min-height: 10vh;
    background-color: #202528;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9999;
    border-bottom: 1px solid ${theme.colors.accent};
`

