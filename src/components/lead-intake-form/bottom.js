// @flow
import React from "react";
import styled from "styled-components";
import { Colors, Typographies } from "../../constants";
import PhoneButton, { PhoneButtonSizes } from "../shared/phone-button";
import Text from "../text";

const Container = styled.div`
    display: flex;
    gap: 20px;
    align-items: center;
`
const PhoneButtonContainer = styled.div`
    flex: 1;
`

export const Bottom = () => {
    return <Container>
        <Text $montserrat $color={Colors.Blue} $typography={Typographies.ButtonBig} $uppercase>Or Call Us Today</Text>
        <PhoneButtonContainer><PhoneButton size={PhoneButtonSizes.Big} color={Colors.White} textColor={Colors.Green} phoneColor={Colors.Green} underlined={true} /></PhoneButtonContainer>
    </Container>
}

export default Bottom;