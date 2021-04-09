// @flow
import React, { ReactNode } from "react";
import styled from "styled-components";
import { Colors, Typographies } from "../../constants";
import Text from "../text";

type Props = {
    number: number,
    title: number,
    icon: number,
    text: ReactNode
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    padding-left: 18.75%;
    padding-right: 18.75%;
`
const Number = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 4px solid ${Colors.Green};
    position: relative;
    height: 103px;
    width: 103px;
    margin-bottom: 34px;
    box-sizing: border;
`
const IconContainer = styled.div`
    position: absolute;
    bottom: ${props => props.$bottom}px;
    right: ${props => props.$right}px;
    background-color: white;
`

export const Item = (props: Props) => {
    const {number, title, icon, text, bottom, right} = props;
    return <Container>
        <Number>
            <Text $uppercase $color={Colors.Blue} $fontWeight={700} $hasSpacing $typography={Typographies.SubHeaderBig} $lineHeight="73px">{number}</Text>
            <IconContainer $right={right} $bottom={bottom}>{icon}</IconContainer>
        </Number>
        <Text $center $margin="0 0 25px 0" $uppercase $color={Colors.Green} $typography={Typographies.SubHeaderBig} $lineHeight="53px">{title}</Text>
        <Text $center $color={Colors.Gray3} $typography={Typographies.TextMedium} $lineHeight="45px" $fontWeight={600}>{text}</Text>
    </Container>
}

export default Item;