import React from "react";
import styled from "styled-components";
import { Container } from "../../../components/Container";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Icon } from "../../../components/icon/icon";
import { IconWrapper } from "../../../components/IconWrapper";
import { Logo } from "../../../components/logo/Logo";
import { SectionTitle } from "../../../components/SectionTitle";
import { Slider } from "../../../components/slider/Slider";

export const Testimony = () => {
    return (
        <StyledTestimony id="Testimony">
            <Container>
                <SectionTitle>Testimony</SectionTitle>
                <FlexWrapper direction={"column"} align={"center"} gap={"50px"}>
                    <IconWrapper>
                        <Icon IconId="testimony"/>
                    </IconWrapper>
                    <Slider />
                </FlexWrapper>
            </Container>
        </StyledTestimony>
    )
}

const StyledTestimony = styled.section``