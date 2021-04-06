// @flow
import React from "react";
import { Colors, Typographies } from "../../constants";
import Text from "../text";
import { CardContainer, CardImg, CardRightContainer } from "./styled-components";

type Props = {
    imgHref: string,
    quote: string,
    title: string,
    color: string,
}

export const TestimonialCard = (props: Props) => {
    const {imgHref, quote, title, color} = props;
    return <CardContainer>
        <CardImg src={imgHref} />
        <CardRightContainer $color={color}>
            <Text $color={Colors.White} $margin="0 0 40px 0" $uppercase $fontWeight={700} $typography={Typographies.SubHeaderSmall} $openSans>{title}</Text>
            <Text $color={Colors.White} $margin="0 0 40px 0" $fontWeight={700} $lineHeight="40px" $typography={Typographies.TextSmall} $openSans>{quote}</Text>
            <Text $color={Colors.White} $lineHeight="40px"   $underline $fontWeight="normal" $typography={Typographies.TextSmall} $openSans>Read Post</Text>
        </CardRightContainer>
    </CardContainer>
}

export default TestimonialCard;