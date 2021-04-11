// @flow
import React from "react";
import { Colors, Typographies } from "../../constants";
import Text from "../text";
import ButtonWithCaret from "./button-with-caret";
import { ParagraphsContainer } from "./styled-components";

type Props = {
    title: string,
    subtitle: string,
    paragraphs: string,
    buttonText: string,
    buttonHref: string
}

export const DetailPageInfo = (props: Props) => {
    const {title, subtitle, paragraphs, buttonText, buttonHref} = props;
    return <>
        <Text $margin="0 0 31px 0" $color={Colors.Blue} $uppercase $typography={Typographies.PageHeader} $fontWeight={700} $hasSpacing>{title}</Text>
        <Text $margin="0 0 100px 0" $color={Colors.Blue} $uppercase $typography={Typographies.TextLarge} $fontWeight={800} $hasSpacing>{subtitle}</Text>
        <ParagraphsContainer>
            {paragraphs.map((paragraph, index) => <Text $typography={Typographies.TextMedium} $fontWeight={600} $lineHeight="40px" $color={Colors.Gray3} key={`paragraph_${index}`}>{paragraph}</Text>)}
        </ParagraphsContainer>
        <ButtonWithCaret noLeftPadding buttonBackgroundColor={Colors.White} buttonTextColor={Colors.Blue} caretColor={Colors.Blue} href={buttonHref} buttonText={buttonText} />
    </>
}

export default DetailPageInfo;