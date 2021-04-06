// @flow
import React from "react";
import styled from "styled-components";
import { Colors, Typographies } from "../../constants";
import Text from "../text";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    padding-bottom: 80px;
    box-sizing: border-box;
`;

export const HereToHelpHero = () => {
    const props = {
        $color: Colors.Gray3,
        $typography: Typographies.TextLarge,
        lineHeight: "45px",
    }
    return <Container>
        <Text {...props} $margin="0 0 10px 0" $fontWeight={800}>ARE YOU . . .</Text> 
        <Text {...props} $margin="0 0 10px 0" $fontWeight={400}>Unable to keep up with your mortgage payments?</Text>
        <Text {...props} $margin="0 0 10px 0" $fontWeight={400}>Tired of maintaining your property?</Text>
        <Text {...props} $margin="0 0 10px 0" $fontWeight={400}>Out of time or money to renovate before selling?</Text>
        <Text {...props} $margin="0 0 60px 0" $fontWeight={400}>Do you need to sell quickly to relocate?</Text>
        <Text {...props} $color={Colors.Blue} $fontWeight={800}>WE ARE HERE TO HELP IN <Text $inline $color={Colors.Green} $underline>ANY</Text> SITUATION!</Text>
    </Container>
}

export default HereToHelpHero;
