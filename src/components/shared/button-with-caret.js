// @flow
import React from "react";
import styled from "styled-components";
import { makeMediaQueryMax, Typographies } from "../../constants";
import Caret from "../icons/caret";
import Text from "../text";
import { ButtonContainer } from "./styled-components";

const StyledButtonContainer = styled(ButtonContainer)`
    padding-top: 34px;
    padding-right: 52px;
    padding-bottom: 34px;
    ${props => props.$noLeftPadding ? `padding-left: 0px;` : `padding-left: 52px;`}
    ${props => props.$buttonColor ? `background-color: ${props.$buttonBackgroundColor};` : ''}
    width: fit-content;
    ${makeMediaQueryMax(1000, `
        padding-top: 10px;
        padding-right: 10px;
        padding-bottom: 10px;
        ${props => props.$noLeftPadding ? `padding-left: 0px;` : `padding-left: 10px;`}
        width: fit-content;
    `)}
    `

type Props = {
    buttonBackgroundColor: string,
    buttonTextColor: string,
    href: string,
    buttonText: string,
    noLeftPadding: boolean
}

export const ButtonWithCaret = (props: Props) => {
    const {buttonBackgroundColor, buttonTextColor, href, buttonText, noLeftPadding} = props;
    return <StyledButtonContainer $noLeftPadding={noLeftPadding} $buttonBackgroundColor={buttonBackgroundColor} href={href}>
    <Text $margin="0 12px 0 0" $typography={Typographies.TextMedium} $lineHeight="30px" $fontWeight="bold" $color={buttonTextColor} $uppercase>{buttonText}</Text>
    <Caret color={buttonTextColor} />
</StyledButtonContainer>
}

export default ButtonWithCaret;