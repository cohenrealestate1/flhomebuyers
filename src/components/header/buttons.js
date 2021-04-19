// @flow
import React from "react";
import styled from "styled-components";
import { Colors, makeMediaQueryMax } from "../../constants";
import PhoneButton, { PhoneButtonSizes } from "../shared/phone-button";
import LeadIntakeFormButton from "./lead-intake-form-button";

const Container = styled.div`
    display: flex;
    gap: 19px;
    margin-left: auto;
    margin-bottom: 28px;
    ${makeMediaQueryMax(1175, 'flex-direction: column;')}
`

export const Buttons = () => {
    return <Container>
        <LeadIntakeFormButton/>
        <PhoneButton color={Colors.Green} size={PhoneButtonSizes.Small} />
    </Container>
}

export default Buttons;