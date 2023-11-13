import React from "react";
import styled from "styled-components";
import photo from '../../../assets/images/photo.jpg1.jpeg'
import { FlexWrapper } from "../../../components/FlexWrapper";



export const Main = () => {
    return (
        <div>
            <FlexWrapper justify={"space-around"} align={"center"}>
                <div>
                    <span>Hi there!</span>
                    <h2>I am Vyacheslav Spilchevsky</h2>
                    <h1>A web developer</h1>
                </div>
                <Photo src={photo} alt="" />
            </FlexWrapper>
        </div>
    )
}


const Photo = styled.img`
    width: 350px;
    height: 430px;
    object-fit: cover;
`


