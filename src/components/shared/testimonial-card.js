// @flow
import React from "react";
import styled from "styled-components";
import { Colors, makeMediaQueryMax, Typographies } from "../../constants";
import { TestimonialType } from "../../types";
import Text from "../text";
import { CardContainer, CardImg, CardRightContainer } from "./styled-components";

const LinkContainer = styled.div`
    margin-top: auto;
    ${makeMediaQueryMax(1000, `margin-top: 20px;`)}
`

type Props = {
    testimonial: TestimonialType,
    color: string,
}

export const TestimonialCard = (props: Props) => {
    const {testimonial: {imgHref, quote, name, city, url}, color} = props;
    const nameCityStr = `${name}, ${city}`;
    const readStoryStr = `Read ${name}'s Story`;
    return <CardContainer>
        <CardImg src={imgHref} />
        <CardRightContainer $color={color}>
            <Text $color={Colors.White} $margin="0 0 20px 0" $fontWeight="bold" $style={makeMediaQueryMax(1000, Typographies.SubHeaderMedium)} $typography={Typographies.SubHeaderSmall} $openSans>{"\""}{quote}{"\""}</Text>
            <Text $color={Colors.White} $margin="0 0 0 0" $uppercase $fontWeight="bold" $style={makeMediaQueryMax(1000, Typographies.FormSubmitButton)} $typography={Typographies.TextSmall} $openSans>{nameCityStr}</Text>
            <LinkContainer>
                <Text $color={Colors.White} $lineHeight="40px" $a $style={''} $href={url} $underline $typography={Typographies.TextMedium} $openSans>{readStoryStr}</Text>
            </LinkContainer>
        </CardRightContainer>
    </CardContainer>
}

export default TestimonialCard;