// @flow
import { assetUrl } from "fusion-core";
import React from "react";
import styled from "styled-components";
import { Colors, PhoneNumber, PhoneNumberHref, Typographies } from "../../constants";

export const PhoneButtonSizes = {
    Big: "Big",
    Small: "Small"
}

type Props = {
    color: string,
    size: string
}

const Container = styled.a`
    text-decoration: none;
    background-color: ${props => props.$color};
    color: ${Colors.White};
    ${props => props.$size === PhoneButtonSizes.Big ? Typographies.ButtonBig : Typographies.ButtonMedium}
    height: ${props => props.$size === PhoneButtonSizes.Big ? "95px" : "53px"};
    padding: 6px 28px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const PhoneContainer = styled.img`
    height: ${props => props.$size === PhoneButtonSizes.Big ? "58px" : "35px"};
    width: ${props => props.$size === PhoneButtonSizes.Big ? "54px" : "34px"};
    margin-right: 22px;
`

export const PhoneButton = (props: Props) => {
    const {color, size} = props;
    return <Container $color={color} $size={size} href={PhoneNumberHref}>
        <PhoneContainer $size={size} src={assetUrl("../../static/phone.svg")}/>
        <div>{PhoneNumber}</div>
    </Container>
}

export default PhoneButton;