// @flow
import React from "react";
import styled from "styled-components";
import { Colors, PhoneNumber, PhoneNumberHref, Typographies } from "../../constants";
import PhoneOldFashioned from "../icons/phone-old-fashioned";
import Text from "../text";

export const PhoneButtonSizes = {
    Big: "Big",
    Medium: "Medium",
    Small: "Small"
}

type Props = {
    color: string,
    size: string,
    textColor?: string,
    phoneColor?: boolean,
    underlined?: boolean
}

const Container = styled.a`
    text-decoration: none;
    background-color: ${props => props.$color};
    color: ${props => props.$textColor || Colors.White};
    ${props => props.$size === PhoneButtonSizes.Big ? Typographies.ButtonBig : Typographies.ButtonMedium}
    height: ${props => props.$size === PhoneButtonSizes.Big ? "95px" : props.$size === PhoneButtonSizes.Medium ? "67px" : "53px"};
    padding: 6px 28px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
`

export const PhoneButton = (props: Props) => {
    const {color, size, textColor, phoneColor, underlined} = props;
    return <Container $color={color} $size={size} $textColor={textColor} href={PhoneNumberHref} >
        <PhoneOldFashioned color={phoneColor || Colors.White} size={size} />
        <Text $openSans $margin="0 0 0 22px" $underline={underlined}>{PhoneNumber}</Text>
    </Container>
}

export default PhoneButton;