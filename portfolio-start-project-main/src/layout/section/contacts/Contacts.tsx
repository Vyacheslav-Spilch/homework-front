import React from "react";
import styled from "styled-components";
import { Button } from "../../../components/Button";
import { SectionTitle } from "../../../components/SectionTitle";
import { theme } from "../../../styles/Theme";

export const Contacts = () => {
    return (
        <StyledContacts>
            <SectionTitle >Contact</SectionTitle>
            <StyledForm>
                <Field placeholder={"Name"} />
                <Field placeholder={"Subject"} />
                <Field placeholder={"Message"} as={"textarea"}/>
                <Button type={"submit"} >Send message</Button>
            </StyledForm>
        </StyledContacts>
    )
}

const StyledContacts = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 540px;
    width: 100%;
    gap: 15px;
    textarea {
        resize: none;
        height: 150px;
    }
`

const Field = styled.input`
    font-family: 'Playfair Display', serif;
    font-weight: bold;
    letter-spacing: 1.2px;
    outline: none;
    border-radius: 2px;
    width: 100%;
    padding: 7px 15px;
    background-color: ${theme.colors.secondaryBg};
    color: ${theme.colors.font};
    border: 1px solid ${theme.colors.borderColor};
    &::placeholder {
        text-transform: capitalize;
        color: ${theme.colors.placeholderColor};
    }
    &:focus-visible {
        outline: 1px solid ${theme.colors.font};
    }
`