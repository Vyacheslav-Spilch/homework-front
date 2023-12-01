import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Menu } from "../../components/menu/Menu";
import { SectionTitle } from "../../components/SectionTitle";
import { Work } from "./work/Work";
import picture_1 from '../../assets/images/picture_1.jpg'
import picture_2 from '../../assets/images/picture_2.jpg'
import { Container } from "../../components/Container";

const menuProjects = ["WebSite", "ToDo list", "Portfolio"]

export const Works = () => {
    return (
        <StyledWorks id="Works">
            <Container>
                <SectionTitle>My Works</SectionTitle>
                <Menu menuItems={menuProjects}/>
                <FlexWrapper justify={"space-between"} >
                    <Work title={"Check list"} 
                    text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. A earum, magnam nihil, possimus repudiandae cupiditate alias doloremque esse nesciunt laudantium, quos molestiae rerum ipsum nostrum? Fugiat sed ducimus eligendi id!"} 
                    src={picture_1}/>
                    <Work title={"Interface testing"} 
                    text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. A earum, magnam nihil, possimus repudiandae cupiditate alias doloremque esse nesciunt laudantium, quos molestiae rerum ipsum nostrum? Fugiat sed ducimus eligendi id!"} 
                    src={picture_2}/>
                </FlexWrapper>
            </Container>
        </StyledWorks>
    )
}

const StyledWorks = styled.section`
`