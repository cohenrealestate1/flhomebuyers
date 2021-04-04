// @flow
import React from "react";
import styled from "styled-components";
import { Colors, Routes, Typographies } from "../../constants";
import Text from "../text";

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

export const LeadIntakeFormButton = () => {
    return <Container href={Routes.Form}>
        <Text $inline $color={Colors.White} $typography={Typographies.ButtonMedium}>Get Your Cash Offer&nbsp;</Text>
        <Text $inline $color={Colors.White} $typography={Typographies.ButtonMedium} $underline>Now!</Text>
    </Container>
}

export default LeadIntakeFormButton;