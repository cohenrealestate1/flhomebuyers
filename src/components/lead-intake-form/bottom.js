// @flow
import React from "react";
import styled from "styled-components";
import { Colors, makeMediaQueryMax, Typographies } from "../../constants";
import PhoneButton, { PhoneButtonSizes } from "../shared/phone-button";
import Text from "../text";

const Container = styled.div`
    display: flex;
    gap: 10%;
    align-items: center;
    justify-content: center;
    ${makeMediaQueryMax(1000, 'flex-direction: column; gap: 10px;')}
`

export const Bottom = () => {
    return <Container>
        <Text $montserrat $color={Colors.Blue} $style={makeMediaQueryMax(1000, Typographies.SubHeaderBig)} $typography={Typographies.SubHeaderSmall} $uppercase>Or Call Us Today</Text>
        <PhoneButton size={PhoneButtonSizes.Big} textStyle={makeMediaQueryMax(1000, Typographies.SubHeaderBig)} color={Colors.White} textColor={Colors.Green} phoneColor={Colors.Green} underlined={true} />
    </Container>
}

export default Bottom;