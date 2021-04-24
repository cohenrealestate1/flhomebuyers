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
    underlined?: boolean,
    style?: string,
    textStyle?: string;
}

const Container = styled.a`
    text-decoration: none;
    background-color: ${props => props.$color};
    color: ${props => props.$textColor || Colors.White};
    ${props => props.$size === PhoneButtonSizes.Big ? Typographies.ButtonBig : Typographies.ButtonMedium}
    padding: 6px 28px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    ${props => props.$style || ''}
`

export const PhoneButton = (props: Props) => {
    const {color, size, textColor, phoneColor, underlined, style, textStyle} = props;
    return <Container $color={color} $size={size} $textColor={textColor} href={PhoneNumberHref} $style={style} >
        <PhoneOldFashioned color={phoneColor || Colors.White} size={size} />
        <Text $openSans $margin="0 0 0 22px" $underline={underlined} $style={textStyle || ""}>{PhoneNumber}</Text>
    </Container>
}

export default PhoneButton;