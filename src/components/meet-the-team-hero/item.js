// @flow
import React from "react";
import styled from "styled-components";
import { Colors, makeMediaQueryMax, Typographies } from "../../constants";
import Text from "../text";

type Props = {
    name: string,
    title: string,
    email: string,
    favoriteBook: string,
    imgHref: string,
    imgRatioWidthToHeight: number,
    responsibilites: string
}

const Container = styled.div`
    display: flex;
    gap: 67px;
`
const Image = styled.img`
    width: 350px;
    height: ${props => props.$imgRatioWidthToHeight * 350}px;
`
const RightContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
`

export const Item = (props: Props) => {
    const {name, title, email, favoriteBook, imgHref, imgRatioWidthToHeight, responsibilites} = props;
    return <Container>
        <Image src={imgHref} $imgRatioWidthToHeight={imgRatioWidthToHeight} />
        <RightContainer>
            <Text $inline>
                <Text $openSans $uppercase $color={Colors.Blue} $typography={Typographies.ButtonBig} $style={makeMediaQueryMax(1000, Typographies.SubHeaderBig)} $lineHeight="42px" $inline>{name}{", "}</Text>
                <Text $openSans $color={Colors.Gray3} $italic $fontWeight={400} $typography={Typographies.TextMedium} $style={makeMediaQueryMax(1000, Typographies.TextXLarge)} $montserrat $inline>{title}</Text>
            </Text>
            <Text $margin="0 0 20px 0"  $color={Colors.Blue} $a $href={`mailto: ${email}`} $typography={Typographies.TextMedium} $fontWeight={400} $openSans>{email}</Text>
            <Text $uppercase $color={Colors.Green} $typography={Typographies.TextSmall} $fontWeight={700} $lineHeight="24px" $openSans>Responsibilities:</Text>
            <Text $margin="0 0 20px 0" $color={Colors.Gray3} $typography={Typographies.SubHeaderSmall} $fontWeight={400} $montserrat>{responsibilites}</Text>
            <Text $uppercase $color={Colors.Green} $typography={Typographies.TextSmall} $fontWeight={700} $lineHeight="24px" $openSans>Favorite Book:</Text>
            <Text $color={Colors.Gray3} $typography={Typographies.SubHeaderSmall} $fontWeight={400} $montserrat>{favoriteBook}</Text>
        </RightContainer>
    </Container>
}

export default Item;