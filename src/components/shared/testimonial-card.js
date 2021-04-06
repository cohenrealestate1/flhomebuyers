// @flow
import React from "react";
import styled from "styled-components";
import { Colors, Typographies } from "../../constants";
import Text from "../text";

type Props = {
    imgHref: string,
    quote: string,
    name: string,
    city: string,
    color: string,
}

const Container = styled.div`
    display: flex;
    box-sizing: border-box;
`
const Img = styled.img`
    flex: 1;
`
const RightContainer = styled.div`
    background-color: ${props => props.$color};
    padding: 64px 28px 64px 64px;
    display: flex;
    flex-direction: column;
    flex: 1;
`

export const TestimonialCard = (props: Props) => {
    const {imgHref, quote, name, city, color} = props;
    const nameCityStr = `${name}, ${city}`;
    const readStoryStr = `Read ${name}'s Story`;
    return <Container>
        <Img src={imgHref} />
        <RightContainer $color={color}>
            <Text $color={Colors.White} $margin="0 0 40px 0" $fontWeight="bold" $typography={Typographies.SubHeaderSmall} $openSans>{quote}</Text>
            <Text $color={Colors.White} $margin="0 0 40px 0" $uppercase $fontWeight="bold" $typography={Typographies.TextSmall} $openSans>{nameCityStr}</Text>
            <Text $color={Colors.White} $lineHeight="40px"   $underline $typography={Typographies.TextMedium} $openSans>{readStoryStr}</Text>
        </RightContainer>
    </Container>
}

export default TestimonialCard;