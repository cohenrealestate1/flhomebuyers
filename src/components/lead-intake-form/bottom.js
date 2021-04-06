// @flow
import React from "react";
import styled from "styled-components";
import { Colors, Typographies } from "../../constants";
import PhoneButton, { PhoneButtonSizes } from "../shared/phone-button";
import Text from "../text";

const Container = styled.div`
    display: flex;
    gap: 10%;
    align-items: center;
    justify-content: center;
`

export const Bottom = () => {
    return <Container>
        <Text $montserrat $color={Colors.Blue} $typography={Typographies.ButtonBig} $uppercase>Or Call Us Today</Text>
        <PhoneButton size={PhoneButtonSizes.Big} color={Colors.White} textColor={Colors.Green} phoneColor={Colors.Green} underlined={true} />
    </Container>
}

export default Bottom;