import { type } from "os";
import React from "react";
import { text } from "stream/consumers";
import styled from "styled-components";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Icon } from "../../components/icon/icon";
import { SectionTitle } from "../../components/SectionTitle";
import { theme } from "../../styles/Theme";
import { Skill } from "./Skill";




export const Skills = () => {
    return (
        <StyledSkills id="Skills">
            <Container>
                <SectionTitle>My skills</SectionTitle>
                    <FlexWrapper wrap={"wrap"} gap={"50px"} justify={"space-evenly"}>
                        <Skill IconId={"html"} 
                        title={"HTML5"} 
                        description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste dolores dicta inventore. Laudantium quis nostrum minus velit, est, omnis labore consequatur officia magnam tempore voluptatum corrupti."}/>
                        <Skill IconId={"css"} 
                        title={"CSS3"} 
                        description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste dolores dicta inventore. Laudantium quis nostrum minus velit, est, omnis labore consequatur officia magnam tempore voluptatum corrupti."}/>
                        <Skill IconId={"js"} 
                        title={"JavaScript"} 
                        description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste dolores dicta inventore. Laudantium quis nostrum minus velit, est, omnis labore consequatur officia magnam tempore voluptatum corrupti."}/>
                        <Skill IconId={"typescript"} 
                        title={"TypeScript"} 
                        description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste dolores dicta inventore. Laudantium quis nostrum minus velit, est, omnis labore consequatur officia magnam tempore voluptatum corrupti."}/>
                        <Skill IconId={"react"} 
                        title={"React JS"} 
                        description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste dolores dicta inventore. Laudantium quis nostrum minus velit, est, omnis labore consequatur officia magnam tempore voluptatum corrupti."}/>
                </FlexWrapper>
                </Container>
            </StyledSkills>
    )
}

const StyledSkills = styled.section`
    
`





