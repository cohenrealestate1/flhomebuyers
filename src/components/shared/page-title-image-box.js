// @flow
import React from "react";
import { Colors, makeMediaQueryMax, Typographies } from "../../constants";
import Text from "../text";

type Props = {
    title: string,
    text: string
}

export const PageTitleImageBox = (props: Props) => {
    const {title, text} = props;
    return <>
            <Text $margin="0 0 27px 0" $color={Colors.White} $uppercase $montserrat $fontWeight={800} $center $typography={Typographies.SubHeaderBig} $style={makeMediaQueryMax(1000, Typographies.ButtonBig)} $lineHeight="90px">
                {title}
            </Text>
            <Text $color={Colors.White} $montserrat $fontWeight={600} $center $typography={Typographies.TextXLarge} $style={makeMediaQueryMax(1000, Typographies.EmailButton)}>
                {text}
            </Text>
    </>
}

export default PageTitleImageBox;