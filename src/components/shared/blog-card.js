// @flow
import React from "react";
import styled from "styled-components";
import { Colors, makeMediaQueryMax, Typographies } from "../../constants";
import { BlogType } from "../../types";
import Text from "../text";
import { CardContainer, CardImg, CardRightContainer } from "./styled-components";

const Container = styled.div`
    margin-bottom: 53px;
`

type Props = {
    blog: BlogType,
    color: string,
}

export const BlogCard = (props: Props) => {
    const {blog: {imgHref, quote, title, url}, color} = props;
    return <Container><CardContainer>
        <CardImg src={imgHref} />
        <CardRightContainer $color={color}>
            <Text $color={Colors.White} $margin="0 0 40px 0" $uppercase $fontWeight={700} $typography={Typographies.SubHeaderSmall} $style={makeMediaQueryMax(1000, Typographies.SubHeaderMedium)} $openSans>{title}</Text>
            <Text $color={Colors.White} $margin="0 0 40px 0" $fontWeight={700} $lineHeight="40px" $typography={Typographies.TextSmall} $style={makeMediaQueryMax(1000, Typographies.FormSubmitButton)} $openSans>{quote}</Text>
            <Text $color={Colors.White} $lineHeight="40px" $a $href={url} $underline $fontWeight="normal" $typography={Typographies.TextSmall} $openSans>Read Post</Text>
        </CardRightContainer>
    </CardContainer>
    </Container>
}

export default BlogCard;