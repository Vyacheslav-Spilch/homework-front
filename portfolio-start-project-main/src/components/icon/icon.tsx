import React from "react";
import styled from "styled-components";
import IconSprite from '../../assets/images/icon-sprite.svg'

type IconPropsType = {
    IconId: string,
    width?: string,
    height?: string,
    viewBox?: string,
}

export const Icon = (props: IconPropsType) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={props.width || "50px"} height={props.height || "50px"} viewBox={props.viewBox || "0,0,256,256"}>
            <use xlinkHref={`${IconSprite}#${props.IconId}`}></use>
        </svg>
    )
}






