// @flow
import React from "react";
import { Colors, Typographies } from "../../constants";
import Text from "../text";
import { CardContainer, CardImg, CardRightContainer } from "./styled-components";

type Props = {
    imgHref: string,
    quote: string,
    name: string,
    city: string,
    color: string,
}

export const TestimonialCard = (props: Props) => {
    const {imgHref, quote, name, city, color} = props;
    const nameCityStr = `${name}, ${city}`;
    const readStoryStr = `Read ${name}'s Story`;
    return <CardContainer>
        <CardImg src={imgHref} />
        <CardRightContainer $color={color}>
            <Text $color={Colors.White} $margin="0 0 40px 0" $fontWeight="bold" $typography={Typographies.SubHeaderSmall} $openSans>{quote}</Text>
            <Text $color={Colors.White} $margin="0 0 40px 0" $uppercase $fontWeight="bold" $typography={Typographies.TextSmall} $openSans>{nameCityStr}</Text>
            <Text $color={Colors.White} $lineHeight="40px"   $underline $typography={Typographies.TextMedium} $openSans>{readStoryStr}</Text>
        </CardRightContainer>
    </CardContainer>
}

export default TestimonialCard;