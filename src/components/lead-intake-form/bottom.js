// @flow
import React from "react";
import styled from "styled-components";
import { Colors, FontFamilies, Typographies, Uppercase } from "../../constants";
import PhoneButton, { PhoneButtonSizes } from "../shared/phone-button";

const OrCallUs = styled.div`
    ${FontFamilies.M}
    color: ${Colors.Blue};
    ${Typographies.ButtonBig}
    ${Uppercase}
`;
const Container = styled.div`
    display: flex;
    gap: 20px;
`
const PhoneButtonContainer = styled.div`
    flex: 1;
`

export const Bottom = () => {
    return <Container>
        <OrCallUs>Or Call Us Today</OrCallUs>
        <PhoneButtonContainer><PhoneButton size={PhoneButtonSizes.Small} color={Colors.White} textColor={Colors.Green} phoneColor={Colors.Green} /></PhoneButtonContainer>
    </Container>
}

export default Bottom;