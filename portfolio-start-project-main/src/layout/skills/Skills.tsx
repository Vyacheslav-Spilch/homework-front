import { type } from "os";
import React from "react";
import { text } from "stream/consumers";
import styled from "styled-components";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Icon } from "../../components/icon/icon";
import { SectionTitle } from "../../components/SectionTitle";
import { Skill } from "./Skill";




export const Skills = () => {
    return (
        <StyledSkills>
            <SectionTitle>My skills</SectionTitle>
            <FlexWrapper wrap={"wrap"}>
                <Skill IconId={"html"} 
                title={"HTML5"} 
                description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste dolores dicta inventore. Laudantium quis nostrum minus velit, est, omnis labore consequatur officia magnam tempore voluptatum corrupti."}/>
                <Skill IconId={"css"} 
                title={"CSS3"} 
                description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste dolores dicta inventore. Laudantium quis nostrum minus velit, est, omnis labore consequatur officia magnam tempore voluptatum corrupti."}/>
                <Skill IconId={"js"} 
                title={"JS"} 
                description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste dolores dicta inventore. Laudantium quis nostrum minus velit, est, omnis labore consequatur officia magnam tempore voluptatum corrupti."}/>
            </FlexWrapper>
        </StyledSkills>
    )
}

const StyledSkills = styled.section`
    min-height: 100vh;
    border-top: 1px solid #fff;
`



