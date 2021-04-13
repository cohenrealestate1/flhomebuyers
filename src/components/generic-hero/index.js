// @flow
import React from "react";
import styled from "styled-components";
import { Colors, makeMediaQueryMax, Typographies } from "../../constants";
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
    box-sizing: border-box;
    ${makeMediaQueryMax(1000, `
        padding: 20px;
    `)}
`

export const GenericHero = (props: Props) => {
    const {pretitle, title, description, buttonText, href, buttonBackgroundColor, buttonTextColor, backgroundColor} = props;
    return <Container $color={backgroundColor}>
        {pretitle && <Text $color={Colors.White} $uppercase $fontWeight="bold" $typography={Typographies.TextXSmall} $lineHeight="22px">{pretitle}</Text>}
        <Text $uppercase $typography={Typographies.SubHeaderBig} $color={Colors.White} $margin="0 0 25px 0" $style={makeMediaQueryMax(1000, Typographies.ButtonBig)}>
            {title}
        </Text>
        <Text $typography={Typographies.TextMedium} $style={makeMediaQueryMax(1000, `${Typographies.TextSmall} font-weight: 500;`)} $lineHeight="40px" $color={Colors.White} $margin="0 0 40px 0">
            {description}
        </Text>
        <ButtonWithCaret buttonBackgroundColor={buttonBackgroundColor} href={href} buttonText={buttonText} buttonTextColor={buttonTextColor} />
    </Container>
}

export default GenericHero;