// @flow
import React from "react";
import styled from "styled-components";
import { Colors, makeMediaQueryMax, Routes, Typographies } from "../../constants";
import Text from "../text";

const Container = styled.a`
    text-decoration: none;
    background-color: ${Colors.Blue};
    ${Typographies.ButtonMedium}
    color: ${Colors.White};
    padding: 6px 28px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
`

type Props = {
    isMobile: true
}
export const LeadIntakeFormButton = (props: Props) => {
    const {isMobile} = props;
    const textProps = {
        $typography: Typographies.ButtonMedium,
        $inline: true,
        $color: Colors.White,
        ...(isMobile ? {} : {$style: makeMediaQueryMax(1235, Typographies.TextSmall)})
        
    };
    return <Container href={Routes.GetCashOffer}>
        <Text {...textProps}>
            <Text {...textProps}>Get Your Cash Offer&nbsp;</Text>
            <Text {...textProps} $underline>Now!</Text>
        </Text>
    </Container>
}

export default LeadIntakeFormButton;