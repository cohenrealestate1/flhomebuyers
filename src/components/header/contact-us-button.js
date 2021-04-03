// @flow
import React from "react";
import styled from "styled-components";
import { Colors, Routes, Typographies } from "../../constants";

const Container = styled.a`
    text-decoration: none;
    background-color: ${Colors.Blue};
    ${Typographies.ButtonMedium}
    color: ${Colors.White};
    padding: 6px 28px;
    height: 53px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const ContactUsButton = () => {
    return <Container href={Routes.ContactUs}>Contact Us</Container>
}

export default ContactUsButton;