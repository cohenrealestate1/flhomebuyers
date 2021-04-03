// @flow
import React from "react";
import styled from "styled-components";
import { Colors, Routes, Typographies } from "../../constants";

const Container = styled.a`
    text-decoration: none;
    background-color: ${Colors.Blue};
    ${Typographies.ButtonMedium}
    color: ${Colors.White};
    padding: 6px 28px;
    height: 53px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
`

const Text = styled.div`
    display: inline;
`
const Now = styled.div`
    display: inline;
    text-decoration: underline;
`;

export const LeadIntakeFormButton = () => {
    return <Container href={Routes.Form}><Text>Get Your Cash Offer&nbsp;</Text><Now>Now!</Now></Container>
}

export default LeadIntakeFormButton;