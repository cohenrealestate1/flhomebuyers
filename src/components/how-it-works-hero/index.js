// @flow
import React from "react";
import styled from "styled-components";
import { Centered, Colors, Inline, Typographies, Underline, Uppercase } from "../../constants";

const HereToHelp = styled.div`
    ${Inline}
    ${Uppercase}
    color: ${Colors.Blue};
    ${Typographies.TextLarge}
    margin-bottom: 107px;
    ${Centered}
`
const Any = styled.div`
    ${Inline}
    ${Uppercase}
    color: ${Colors.Green};
    ${Underline}
    
`
const HowItWorks = styled.div`
    ${Typographies.SubHeaderBig}
    color: ${Colors.Blue};
    font-weight: 700;
    margin-bottom: 4px;
    ${Centered}
    ${Uppercase}
`
const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

export const HowItWorksHero = () => {
    return <Container>
        <HereToHelp>We ARE HERE TO HELP IN&nbsp;<Any>ANY</Any>&nbsp;Situation!</HereToHelp>
        <HowItWorks>How It Works</HowItWorks>
        We provide a simple, 3-step process to get your house sold for CASH.
    </Container>
}

export default HowItWorksHero;