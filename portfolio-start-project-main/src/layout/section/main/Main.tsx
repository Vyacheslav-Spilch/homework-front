import React from "react";
import styled from "styled-components";
import photo from '../../../assets/images/photo.jpg1.jpeg'
import { Container } from "../../../components/Container";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { theme } from "../../../styles/Theme";



export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper justify={"space-around"} align={"center"} wrap={"wrap"}>
                    <div>
                        <SmallText>Hi there!</SmallText>
                        <Name>I am <span>Vyacheslav Spilchevsky</span></Name>
                        <MainTitle>A web developer</MainTitle>
                    </div>
                    <PhotoWrapper>
                        <Photo src={photo} alt="" />
                    </PhotoWrapper>
                </FlexWrapper>
            </Container>
        </StyledMain>
    )
}

const StyledMain = styled.section`
    display: flex;
    min-height: 100vh;
`

const PhotoWrapper = styled.div`
    position: relative;
    z-index: 1;
    &::before {
        content: "";
        display: inline-block;
        width: 350px;
        height: 470px;
        border: 5px solid ${theme.colors.accent};
        left: 35px;
        top: -20px;
        z-index: -1;
        position: absolute;
    }
`

const Photo = styled.img`
    width: 350px;
    height: 430px;
    object-fit: cover;
    /* margin: 10px; */
`
const SmallText = styled.span`
    
`

const Name = styled.h2`
    position: relative;
    letter-spacing: 2px;
    font-size: 40px;
    font-weight: 700;
    margin: 10px 0;
    span {
        position: relative;
        z-index: 1;
        &::before {
            content: "";
            display: inline-block;
            width: 100%;
            height: 10px;
            bottom: -3px;
            background-color: rgb(44, 54, 115, 0.8);
            position: absolute;
            z-index: -1;
        }
    }
`

const MainTitle = styled.h1`
    font-weight: 400;
    font-size: 27px;
`

