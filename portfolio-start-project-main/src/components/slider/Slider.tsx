import React from "react";
import styled from "styled-components";
import { theme } from "../../styles/Theme";
import { FlexWrapper } from "../FlexWrapper";

export const Slider = () => {
    return (
        <StyledSlider>
            <FlexWrapper direction={"column"} align={"center"} gap={"30px"}>
                <Slide>
                    <Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium laudantium quae adipisci perspiciatis, saepe repellendus sit itaque eius similique, possimus neque accusamus eveniet eaque, blanditiis iste nam? Ipsam, similique soluta.</Text>
                    <Name>@Jack Sparrow</Name>
                </Slide>
            </FlexWrapper>
            <Pagination>
                <span></span>
                <span className="active"></span>
                <span></span>
            </Pagination>
        </StyledSlider>
    )
}

const StyledSlider = styled.div`
    max-width: 500px;
    text-align: center;
    /* border: 1px solid #fff; */
`

const Slide = styled.div`
    width: 100%;
`

const Text = styled.p`
`

const Name = styled.span`
    display: inline-block;
    text-transform: uppercase;
    letter-spacing: 1.2px;
    margin: 10px 0 35px;
`

const Pagination = styled.div`
    display: flex;
    justify-content: center;
    span {
        display: inline-block;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: ${theme.colors.primaryBg};
        transition: all 0.2s ease-in;
        cursor: pointer;
        & + span {
            margin-left: 10px;
        }
        &.active {
            width: 30px;
            height: 10px;
            border-radius: 10px;
            background-color: ${theme.colors.accent};
        }
    }
`

