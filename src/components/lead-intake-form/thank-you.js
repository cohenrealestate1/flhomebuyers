// @flow
import React from "react";
import styled from "styled-components";
import { Colors, Inline, Typographies, Uppercase } from "../../constants";
import Form, { PaddingSizes } from "../form";
import Bottom from "./bottom";

const TopContainer = styled.div`
    ${Inline}
    color: ${Colors.Blue};
    ${Typographies.PageHeader}
    margin-bottom: 21px;
    ${Uppercase}
`
const Cash = styled.div`
    ${Inline}
    color: ${Colors.Green};
`
const BottomContainer = styled.div`
    ${Typographies.TextXLarge}
    color: ${Colors.Gray3};
    padding-left: 10%;
    padding-right: 10%;
    text-align: center;
`

export const LeadIntakeFormThankYou = () => {
    return <Form additionalContent={<Bottom />} paddingSize={PaddingSizes.Small}>
        <TopContainer>
        YOUR INQUIRY HAS BEEN RECEIVED AND A <Cash>CASH</Cash> OFFER IS ON THE WAY.
        </TopContainer>
        <BottomContainer>Our team will be in touch in the next 30 minutes to make you a CASH OFFER on your home.</BottomContainer>
    </Form>
};

export default LeadIntakeFormThankYou;