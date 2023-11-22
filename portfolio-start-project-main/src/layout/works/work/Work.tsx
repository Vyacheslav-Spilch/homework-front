import React from "react";
import styled from "styled-components";
import { Button } from "../../../components/Button";
import { StyledLink } from "../../../components/StyledLink";
import { theme } from "../../../styles/Theme";

type WorkPropsType = {
    title: string,
    text: string,
    src: string
}

export const Work = (props: WorkPropsType) => {
    return (
        <StyledWork>
            <ImgWrapper>
                <Image src={props.src} alt=""/>
                <Button background={`${theme.colors.accent}`}>View Project</Button>
            </ImgWrapper>

            <WorkWrapper>
                <Title>{props.title}</Title>
                <Text>{props.text}</Text>
                <StyledLink>Demo</StyledLink>
                <StyledLink>Code</StyledLink>
            </WorkWrapper>
        </StyledWork>
    )
}

const StyledWork = styled.div`
    background-color: ${theme.colors.secondaryBg};
    max-width: 540px;
    width: 100%;
    padding: 15px;
    border-radius: 5px;
    ${StyledLink} {
        padding: 10px 0;
        & + ${StyledLink} {
            margin-left: 20px;
        }
    }
    ${Button} {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        transition: all 0.2s ease;
        opacity: 0;
    }
`

const ImgWrapper = styled.div`
    position: relative;
    z-index: 1;
    &:hover {
        &::before {
        content: "";
        display: inline-block;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0 , 0.3);
        backdrop-filter: blur(4px);
        position: absolute;
        }
        ${Button} {
            opacity: 1;
            transition: all 0.3s ease;
        }
    }

`

const Image = styled.img`
    width: 100%;
    height: 260px;
    object-fit: cover;
    border-radius: 5px;
`

const Title = styled.h3`
    letter-spacing: 2px;
    text-transform: capitalize;
`
const Text = styled.p`
    margin: 15px 0 14px;
`

const WorkWrapper = styled.div`
    padding: 25px 20px;
`