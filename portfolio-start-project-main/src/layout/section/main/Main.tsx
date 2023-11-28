import React from "react";
import styled from "styled-components";
import photo from '../../../assets/images/photo.jpg1.jpeg'
import { Container } from "../../../components/Container";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { font } from "../../../styles/Common";
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
        top: -24px;
        left: 32px;
        z-index: -1;
        position: absolute;

        @media ${theme.media.mobile} {
            width: 314px;
            height: 414px;
            top: -17px;
            left: 27px;
        }
    }

    @media ${theme.media.mobile} {
        margin: 65px 0;

    }
`

const Photo = styled.img`
    width: 350px;
    height: 430px;
    object-fit: cover;
    margin-left: 20px;
    
    @media ${theme.media.mobile} {
        width: 310px;
        height: 380px;
    }
`
const SmallText = styled.h2`
    letter-spacing: 1px;
    font-weight: 400;
    font-size: 16px;
`

const Name = styled.h2`
    ${font({weight: 700, Fmax: 45, Fmin: 28})};
    position: relative;
    margin: 10px 0;

    span {
        position: relative;
        white-space: nowrap;
        text-align: center;
        z-index: 1;
        &::before {
            content: "";
            display: inline-block;
            width: 100%;
            height: 10px;
            bottom: -3px;
            background-color: ${theme.colors.accent};
            position: absolute;
            z-index: -1;
        }
    }

    @media ${theme.media.mobile} {
        margin: 15px 0 22px;
    }
`

const MainTitle = styled.h1`
    /* font-weight: 400;
    font-size: 27px; */

    ${font({weight: 400, Fmax: 27, Fmin: 20})}
`

