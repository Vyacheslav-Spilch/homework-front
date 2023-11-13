import React from "react";
import styled from "styled-components";

type WorkPropsType = {
    title: string,
    text: string,
    src: string
}

export const Work = (props: WorkPropsType) => {
    return (
        <StyledWork>
            <Image src={props.src} alt=""/>
            <Title>{props.title}</Title>
            <Text>{props.text}</Text>
            <Link>Demo</Link>
            <Link>Code</Link>
        </StyledWork>
    )
}

const StyledWork = styled.div`
    background-color: #38383f;
    max-width: 540px;
    width: 100%;
    padding: 15px;
    border-radius: 5px;
`

const Image = styled.img`
    width: 100%;
    height: 260px;
    object-fit: cover;
    border-radius: 5px;
`

const Title = styled.h3`
    letter-spacing: 2px;
`
const Text = styled.p`
    
`

const Link = styled.a`
    
`