import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../FlexWrapper";

export const Slider = () => {
    return (
        <StyledSlider>
            <FlexWrapper>
                <Slide>
                    <Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium laudantium quae adipisci perspiciatis, saepe repellendus sit itaque eius similique, possimus neque accusamus eveniet eaque, blanditiis iste nam? Ipsam, similique soluta.</Text>
                    <Name>Jack Sparrow</Name>
                </Slide>
            </FlexWrapper>
            <Pagination>
                <span></span>
                <span></span>
                <span></span>
            </Pagination>
        </StyledSlider>
    )
}

const StyledSlider = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 500px;
    border: 1px solid #fff;
`

const Slide = styled.div`
    width: 100%;
    text-align: center;
`

const Text = styled.p`

`

const Name = styled.span`
    
`

const Pagination = styled.div`
    display: flex;
    justify-content: center;
    span {
        display: inline-block;
        width: 20px;
        height: 20px;
        margin: 5px;
        border-radius: 50%;
        background-color: #236767;
        transition: all 0.2s ease-in;
        cursor: pointer;
        
    }
`

