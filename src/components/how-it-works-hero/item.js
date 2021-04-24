// @flow
import React, { ReactNode } from "react";
import styled from "styled-components";
import { Colors, makeMediaQueryMax, Typographies } from "../../constants";
import Text from "../text";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 25px;
    max-width: 308px;
    align-items: center;
    ${makeMediaQueryMax(1000, `max-width: unset; margin-bottom: 20px;`)}
`;

const Number = styled.div`
    border-radius: 50%;
    border: 4px solid ${Colors.Green};
    display: flex;
    align-items: center;
    justify-content: center;
    height: 103px;
    width: 103px;
    ${makeMediaQueryMax(1000, `
        height: 200px;
        width: 200px;
    `)}
`

type Props = {
    number: number,
    text: ReactNode
}

export const Item = (props: Props) => {
    const {number, text} = props;
    return <Container>
        <Number><Text $typography={Typographies.SubHeaderBig} $style={makeMediaQueryMax(1000, Typographies.LargeNumber)} $color={Colors.Blue} $uppercase>{number}</Text></Number>
        <Text $center $typography={Typographies.TextSmall} $style={makeMediaQueryMax(1000, Typographies.ButtonBig)} $uppercase $color={Colors.Blue} $fontWeight={800}>{text}</Text>
    </Container>
}

export default Item;