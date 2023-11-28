import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Icon } from "../../components/icon/icon";
import { IconWrapper } from "../../components/IconWrapper";
import { theme } from "../../styles/Theme";

type SkillPropsType = {
    IconId: string
    title: string,
    width?: string,
    height?: string,
    description: string,
}


export const Skill = (props: SkillPropsType) => {
    return(
        <StyledSkill>
            <FlexWrapper direction={"column"} align={"center"} gap={"20px"}>
                <IconWrapper>
                    <Icon IconId={props.IconId}/>
                </IconWrapper>
                <SkillsTitle>{props.title}</SkillsTitle>
                <SkillText>{props.description}</SkillText>
            </FlexWrapper>
        </StyledSkill>
    )
}

const StyledSkill = styled.div`
    padding: 10px;
    width: 30%;

    @media ${theme.media.mobile} {
        width: 80%;
    }
`

const SkillsTitle = styled.h3`
margin: 40px 0 0;
    
`

const SkillText = styled.p`
    text-align: center;
    font-weight: 400;
    line-height: 1.4;
`

// const IconWrapper = styled.div`
//         z-index: 1;

//         position: relative;
//         span::before {
//             content: "";
//             display: inline-block;
//             left: 50%;
//             top: 50%;
//             transform: rotate(45deg) translate(-50%, -50%);
//             transform-origin: left top;
//             width: 80px;
//             height: 80px;
//             background-color: ${theme.colors.primaryBg};
//             z-index: -1;

//             position: absolute;
//         }
// `