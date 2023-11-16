import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Icon } from "../../../components/icon/icon";
import { SectionTitle } from "../../../components/SectionTitle";
import { Slider } from "../../../components/slider/Slider";

export const Testimony = () => {
    return (
        <StyledTestimony>
            <SectionTitle>Testimony</SectionTitle>
            <FlexWrapper direction={"column"} align={"center"}>
                <Icon IconId={"home"}/>
                <Slider />
            </FlexWrapper>
            
        </StyledTestimony>
    )
}

const StyledTestimony = styled.section`
    margin: 10px 0;
    min-height: 60vh;
    border-top: 1px solid #fff;
`