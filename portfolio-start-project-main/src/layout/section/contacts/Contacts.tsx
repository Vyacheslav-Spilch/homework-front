import React from "react";
import styled from "styled-components";
import { Button } from "../../../components/Button";
import { SectionTitle } from "../../../components/SectionTitle";

export const Contacts = () => {
    return (
        <StyledContacts>
            <SectionTitle>Contact</SectionTitle>
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
    min-height: 60vh;
`

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 500px;
    width: 100%;
    gap: 15px;
`

const Field = styled.input`
    outline: none;
    border-radius: 5px;
    width: 100%;
    height: 25px;
    background-color: #3b3b42;
    color: #fff;
    padding: 5px;
`