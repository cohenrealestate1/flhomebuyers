// @flow
import React from "react";
import styled from "styled-components";
import { Colors, FontFamilies, makeMediaQueryMax, Typographies } from "../../constants";
import ButtonWithCaret from "../shared/button-with-caret";
import Text from "../text";

type Props = {
    pretitle: string,
    title: string,
    description: string,
    buttonText: string,
    href: string,
    buttonBackgroundColor: string,
    buttonTextColor: string,
    backgroundColor: string
}

const Container = styled.div`
    background-color: ${props => props.$color};
    padding-top: 80px;
    padding-bottom: 107px;
    padding-left: 10%;
    padding-right: 10%;
    width: 100%;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    ${makeMediaQueryMax(1000, `
        padding-bottom: 50px;
    `)}
    `
    const ButtonContainer = styled.div`
    margin-top: auto;
    `

export const GenericHero = (props: Props) => {
    const {pretitle, title, description, buttonText, href, buttonBackgroundColor, buttonTextColor, backgroundColor} = props;
    return <Container $color={backgroundColor}>
        {pretitle && <Text $color={Colors.White} $uppercase $fontWeight="bold" $typography={Typographies.TextXSmall} $style={makeMediaQueryMax(1000, `margin-bottom: 20px;`)} $lineHeight="22px">{pretitle}</Text>}
        <Text $uppercase $typography={Typographies.SubHeaderBig} $style={makeMediaQueryMax(1000, Typographies.PageHeader)} $color={Colors.White} $margin="0 0 25px 0">
            {title}
        </Text>
        <Text $typography={Typographies.TextMedium} $style={`
            ${FontFamilies.OS}
            font-size: 40px;
            font-weight: 700;
            line-height: 55px; font-weight: 400;`} 
            $lineHeight="40px" $color={Colors.White} $margin="0 0 40px 0">
            {description}
        </Text>
        <ButtonContainer>

        <ButtonWithCaret buttonBackgroundColor={buttonBackgroundColor} href={href} buttonText={buttonText} buttonTextColor={buttonTextColor} textStyle={makeMediaQueryMax(1000, Typographies.ButtonBig)} />
        </ButtonContainer>
    </Container>
}

export default GenericHero;