// @flow
import React from "react";
import styled from "styled-components";
import { Colors, Typographies } from "../../constants";
import Text from "../text";

const Container = styled.div`
    display: flex;
    gap: 19px;
    justify-content: center;
    align-items: center;
`;

type Props = {
    number: string,
    color: string,
    text: string
}

export const Item = (props: Props) => {
    const {number, color, text} = props;
    return <Container>
        <Text $color={color} $typography={Typographies.LargeNumber}>{number}</Text>
        <Text $wrap $color={Colors.Gray3} $fontWeight={800} $typography={Typographies.TextSmall} $lineHeight="24px" $uppercase $maxWidth="135px">{text}</Text>
    </Container>
}

export default Item;