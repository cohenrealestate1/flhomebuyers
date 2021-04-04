// @flow
import React from "react";
import styled from "styled-components";
import { Colors, Typographies } from "../../constants";
import Form, { PaddingSizes } from "../form";
import Text from "../text";
import Bottom from "./bottom";

const TopContainer = styled.div`
    margin-bottom: 21px;
`

export const LeadIntakeFormThankYou = () => {
    return <Form additionalContent={<Bottom />} paddingSize={PaddingSizes.Small}>
        <TopContainer>
            <Text $inline $uppercase $color={Colors.Blue} $typography={Typographies.PageHeader}>
            YOUR INQUIRY HAS BEEN RECEIVED AND A <Text $inline $color={Colors.Green}>Cash</Text> OFFER IS ON THE WAY.
            </Text>
        </TopContainer>
        <Text $typography={Typographies.TextXLarge} $color={Colors.Gray3}>Our team will be in touch in the next 30 minutes to make you a CASH OFFER on your home.</Text>
    </Form>
};

export default LeadIntakeFormThankYou;