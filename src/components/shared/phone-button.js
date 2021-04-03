// @flow
import React from "react";
import styled from "styled-components";
import { Colors, PhoneNumber, PhoneNumberHref, Typographies } from "../../constants";
import PhoneOldFashioned from "../icons/phone-old-fashioned";

export const PhoneButtonSizes = {
    Big: "Big",
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
    height: ${props => props.$size === PhoneButtonSizes.Big ? "95px" : "53px"};
    padding: 6px 28px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
`

const StyledPhoneNumber = styled.div`
    margin-left: 22px;
    ${props => props.$underlined ? 'text-decoration: underline;' : ''}
    text-decoration-skip-ink: none;
`

export const PhoneButton = (props: Props) => {
    const {color, size, textColor, phoneColor, underlined} = props;
    return <Container $color={color} $size={size} $textColor={textColor} href={PhoneNumberHref} >
        <PhoneOldFashioned color={phoneColor || Colors.White} size={size} />
        <StyledPhoneNumber $underlined={underlined}>{PhoneNumber}</StyledPhoneNumber>
    </Container>
}

export default PhoneButton;