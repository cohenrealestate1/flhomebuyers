// @flow
import React from "react";
import styled from "styled-components";
import { Colors, Typographies } from "../../constants";
import Text from "../text";
import Item from "./item";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    padding-top: 52px;
    padding-bottom: 69px;
    width: 100%;
    background-color: ${Colors.Gray1};
`;

const ItemsContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 60px;
`

const VerticalSeparator = styled.div`
    width: 3px;
    height: 125px;
    background-color: ${Colors.Gray4};
`

export const WeCanBeatHero = () => {
    return <Container>
    <Text $typography={Typographies.SubHeaderBig} $color={Colors.Blue} $lineHeight={"73px"} $margin="0 0 54px 0" $uppercase>We Can Beat Other Offers</Text>
    <ItemsContainer>
        <Item number="25+" color={Colors.Orange} text="Years of Experience" />
        <VerticalSeparator />
        <Item number={12} color={Colors.Blue} text="Houses Purchased" />
        <VerticalSeparator />
        <Item number="14" color={Colors.Green} text="Average Days to Close" />
    </ItemsContainer>
    </Container>
}

export default WeCanBeatHero;
