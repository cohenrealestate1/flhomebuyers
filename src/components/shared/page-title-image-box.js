// @flow
import React from "react";
import { Colors, Typographies } from "../../constants";
import Text from "../text";

type Props = {
    title: string,
    text: string
}

export const PageTitleImageBox = (props: Props) => {
    const {title, text} = props;
    return <>
            <Text $margin="0 0 27px 0" $color={Colors.White} $uppercase $montserrat $fontWeight={800} $center $typography={Typographies.SubHeaderBig} $lineHeight="90px">
                {title}
            </Text>
            <Text $color={Colors.White} $montserrat $fontWeight={600} $center $typography={Typographies.TextXLarge} >
                {text}
            </Text>
    </>
}

export default PageTitleImageBox;