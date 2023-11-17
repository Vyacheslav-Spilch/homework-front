import React from "react";
import styled from "styled-components";
import { Icon } from "../../components/icon/icon";

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
            <Icon IconId={props.IconId}/>
            <SkillsTitle>{props.title}</SkillsTitle>
            <SkillText>{props.description}</SkillText>
        </StyledSkill>
    )
}

const StyledSkill = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    padding: 10px;
    width: calc(100% / 3);
`

const SkillsTitle = styled.div`
    
`

const SkillText = styled.div`
    
`