import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Menu } from "../../components/menu/Menu";
import { SectionTitle } from "../../components/SectionTitle";
import { Work } from "./work/Work";
import picture_1 from '../../assets/images/picture_1.jpg'
import picture_2 from '../../assets/images/picture_2.jpg'

const menuProjects = ["WebSite", "ToDo list", "Game App"]

export const Works = () => {
    return (
        <StyledWorks>
            <SectionTitle>My Works</SectionTitle>
            <Menu menuItems={menuProjects}/>
            <FlexWrapper justify={"space-around"}>
                <Work title={"Check list"} text={"ALLallallalal"} src={picture_1}/>
                <Work title={"Interface testing"} text={"ALLallallalalTrallalla"} src={picture_2}/>
            </FlexWrapper>
        </StyledWorks>
    )
}

const StyledWorks = styled.section`
`