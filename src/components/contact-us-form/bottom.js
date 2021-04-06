// @flow
import React from "react";
import styled from "styled-components";
import { Colors, Typographies } from "../../constants";
import PhoneButton, { PhoneButtonSizes } from "../shared/phone-button";
import Text from "../text";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 36px;
    align-items: center;
    justify-content: center;
    padding-bottom: 65px;
`

export const Bottom = () => {
    return <Container>
        <Text $montserrat $uppercase $color={Colors.Blue} $typography={Typographies.SubHeaderBig} $lineHeight="73px">Hablamos Español</Text>
        <Text $montserrat $margin="0 0 20px 0" $color={Colors.Gray3} $typography={Typographies.TextMedium} $lineHeight="45px" $fontWeight="400">Give us a call today in English or Spanish.</Text>
        <PhoneButton size={PhoneButtonSizes.Big} color={Colors.Orange} textColor={Colors.White} phoneColor={Colors.White}/>
    </Container>
}

export default Bottom;