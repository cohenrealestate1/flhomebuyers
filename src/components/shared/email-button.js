// @flow
import React from "react";
import styled from "styled-components";
import { Colors, Email, EmailHref, Typographies } from "../../constants";
import Envelope from "../icons/envelope";
import Text from "../text";

const Container = styled.a`
    text-decoration: none;
    background-color: ${Colors.Green}};
    color: ${Colors.White};
    ${Typographies.EmailButton}
    height: 67px;
    padding: 6px 28px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
`

export const EmailButton = () => {
    return <Container href={EmailHref} >
        <Envelope footer size="90px" color={Colors.White}/>
        <Text $openSans $margin="0 0 0 22px" $color={Colors.White} $typography={Typographies.EmailButton}>{Email}</Text>
    </Container>
}

export default EmailButton;