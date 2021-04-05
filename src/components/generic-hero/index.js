// @flow
import React from "react";
import styled from "styled-components";
import { Colors, Typographies } from "../../constants";
import Caret from "../icons/caret";
import { ButtonContainer } from "../shared/styled-components";
import Text from "../text";

type Props = {
    pretitle: string,
    color: string,
    title: string,
    description: string,
    buttonText: string,
    href: string
}

const Container = styled.div`
    background-color: ${props => props.$color};
    padding-top: 80px;
    padding-bottom: 107px;
    padding-left: 10%;
    padding-right: 10%;
    width: 100%;
    box-sizing: border-box;
`

const StyledButtonContainer = styled(ButtonContainer)`
    padding: 34px 52px;
    ${props => props.$buttonColor ? `background-color: ${props.$buttonColor};` : ''}
    width: fit-content;
`

export const GenericHero = (props: Props) => {
    const {pretitle, color, title, description, buttonText, href, buttonColor} = props;
    return <Container $color={color}>
        {pretitle && <Text $color={Colors.White} $uppercase $fontWeight="bold" $typography={Typographies.TextXSmall} $lineHeight="22px">{pretitle}</Text>}
        <Text $uppercase $typography={Typographies.SubHeaderBig} $color={Colors.White} $margin="0 0 25px 0">
            {title}
        </Text>
        <Text $typography={Typographies.TextMedium} $lineHeight="40px" $color={Colors.White} $margin="0 0 40px 0">
            {description}
        </Text>
        <StyledButtonContainer $buttonColor={buttonColor} href={href}>
            <Text $margin="0 12px 0 0" $typography={Typographies.TextMedium} $lineHeight="30px" $fontWeight="bold" $color={buttonColor ? Colors.White : color} $uppercase>{buttonText}</Text>
            <Caret color={buttonColor ? Colors.White : color} />
        </StyledButtonContainer>
    </Container>
}

export default GenericHero;