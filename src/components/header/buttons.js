// @flow
import React from "react";
import styled from "styled-components";
import { Colors } from "../../constants";
import PhoneButton, { PhoneButtonSizes } from "../shared/phone-button";
import ContactUsButton from "./contact-us-button";

const Container = styled.div`
    display: flex;
    gap: 19px;
`

export const Buttons = () => {
    return <Container><PhoneButton color={Colors.Green} size={PhoneButtonSizes.Small} /><ContactUsButton/></Container>
}

export default Buttons;