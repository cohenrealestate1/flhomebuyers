// @flow
import React from "react";
import styled from "styled-components";
import { Colors, Typographies } from "../../constants";
import Form, { PaddingSizes } from "../form";
import Text from "../text";
import Bottom from "./bottom";

const TopContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
`

export const LeadIntakeFormThankYou = () => {
    return <Form additionalContent={<Bottom />} paddingSize={PaddingSizes.Small}>
        <TopContainer>
            <Text $inline $uppercase $color={Colors.Blue} $typography={Typographies.PageHeader}>
            YOUR INQUIRY HAS BEEN RECEIVED AND A <Text $inline $color={Colors.Green}>Cash</Text> OFFER IS ON THE WAY.
            </Text>
            <Text $margin="21px 0 0 0" $typography={Typographies.TextXLarge} $color={Colors.Gray3}>Our team will be in touch in the next 30 minutes to make you a CASH OFFER on your home.</Text>
        </TopContainer>
    </Form>
};

export default LeadIntakeFormThankYou;