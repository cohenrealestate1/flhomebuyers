// @flow
import React from "react";
import styled from "styled-components";
import { Colors, makeMediaQueryMax, Typographies } from "../../constants";
import PhoneButton, { PhoneButtonSizes } from "../shared/phone-button";
import LeadIntakeFormButton from "./lead-intake-form-button";

const Container = styled.div`
    display: flex;
    gap: 19px;
    margin-left: auto;
    margin-bottom: 28px;
    ${makeMediaQueryMax(1235, 'flex-direction: column;')}
`

type Props = {
    isMobile: Boolean;
}
export const Buttons = (props: Props) => {
    const {isMobile} = props;
    return <Container>
        <LeadIntakeFormButton isMobile={isMobile}/>
        <PhoneButton textStyle={isMobile ? "" : makeMediaQueryMax(1235, Typographies.TextSmall)} justifyContent="flex-start" color={Colors.Green} size={PhoneButtonSizes.Small} />
    </Container>
}

export default Buttons;