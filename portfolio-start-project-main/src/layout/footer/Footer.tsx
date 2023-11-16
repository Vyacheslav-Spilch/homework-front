import React from "react";
import styled from "styled-components";
import { Icon } from "../../components/icon/icon";

export const Footer = () => {
    return (
        <StyledFooter>
            <Name>Vyacheslav</Name>
            <SocialIconsList>
                <SocialItem>
                    <SocialLink>
                        <Icon IconId={"telegram"} width={"30px"} height={"30px"}/>
                    </SocialLink>
                </SocialItem>
                <SocialItem>
                    <SocialLink>
                        <Icon IconId={"vk"} width={"30px"} height={"30px"}/>
                    </SocialLink>
                </SocialItem>
                <SocialItem>
                    <SocialLink>
                        <Icon IconId={"instagram"} width={"30px"} height={"30px"}/>
                    </SocialLink>
                </SocialItem>
                <SocialItem>
                    <SocialLink>
                        <Icon IconId={"whatsapp"} width={"30px"} height={"30px"}/>
                    </SocialLink>
                </SocialItem>
            </SocialIconsList>
            <Copyright>2023 Vycheslav Spilchevsky, all rights reserved</Copyright>
        </StyledFooter>
    )
}

const StyledFooter = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgb(32, 37, 40);
    padding: 20px;
    gap: 10px;
    min-height: 20vh;
    text-align: center;
`

const Name = styled.span`
    
`
const SocialIconsList = styled.ul`
    display: flex;
    justify-content: space-around;
    gap: 15px;
`

const SocialItem = styled.li`
    list-style-type: none;
`

const SocialLink= styled.a`
    cursor: pointer;
`

const Copyright = styled.p`
    font-size: 0.7rem;
    color: rgba(255, 255, 255, 0.5);
`

