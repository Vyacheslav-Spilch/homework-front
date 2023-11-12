import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../components/SectionTitle";

export const Works = () => {
    return (
        <StyledWorks>
            <SectionTitle>My projects</SectionTitle>
        </StyledWorks>
    )
}

const StyledWorks = styled.section`
    min-height: 100vh;
    border-top: 1px solid #fff;
`