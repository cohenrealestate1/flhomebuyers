// @flow
import React from "react";
import styled from "styled-components";
import { Colors, Typographies } from "../../constants";
import Text from "../text";

type Props = {
    name: string,
    title: string,
    email: string,
    favoriteBook: string,
    imgHref: string
}

const Container = styled.div`
    display: flex;
    gap: 67px;
`
const Image = styled.img`
    height: 350px;
    width: 350px;
`
const RightContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 67px;
    padding-bottom: 67px;
`

export const Item = (props: Props) => {
    const {name, title, email, favoriteBook, imgHref} = props;
    return <Container>
        <Image src={imgHref} />
        <RightContainer>
            <Text $inline>
                <Text $openSans $uppercase $color={Colors.Blue} $typography={Typographies.ButtonBig} $lineHeight="42px" $inline>{name}{", "}</Text>
                <Text $openSans $color={Colors.Gray3} $italic $fontWeight={400} $typography={Typographies.TextMedium} $montserrat $inline>{title}</Text>
            </Text>
            <Text $margin="0 0 80px 0" $color={Colors.Blue} $typography={Typographies.TextMedium} $fontWeight={400} $openSans>{email}</Text>
            <Text $uppercase $color={Colors.Green} $typography={Typographies.TextSmall} $fontWeight={700} $lineHeight="24px" $openSans>Favorite Book:</Text>
            <Text $color={Colors.Gray3} $typography={Typographies.SubHeaderSmall} $fontWeight={400} $montserrat>{favoriteBook}</Text>
        </RightContainer>
    </Container>
}

export default Item;