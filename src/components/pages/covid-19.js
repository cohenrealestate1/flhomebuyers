// @flow
import React from "react";
import styled from "styled-components";
import { Colors, Covid19Href, Typographies } from "../../constants";
import CallFormHero from "../call-form-hero";
import HereToHelpHero from "../here-to-help-hero";
import HowItWorksHero from "../how-it-works-hero";
import Page from "../page";
import { BlueDivider } from "../shared/styled-components";
import Text from "../text";
import WeCanBeatHero from "../we-can-beat-hero";

const TopOffset = '60px';

const Container = styled.div`
    color: ${Colors.White};
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: calc(422px + ${TopOffset});
    padding-bottom: 0px;
    box-sizing: border-box;
    z-index: 1;
    font-weight: 800;
    position: relative;
    margin-top: -${TopOffset};
    max-width: 1440px;
    margin-left: auto;
    margin-right: auto;
    ::before {
        z-index: -1;
        content: "";
        top: 0;
        left: 0;
        width: 100%;
        height: 86%;
        position: absolute;
        background-image: url('${Covid19Href}');
        background-size: cover;
        transform: translateY(-${TopOffset});
    }
`

const Covid19Info = styled.div`
    background-color: ${Colors.Blue};
    padding-top: 77px;
    padding-right: 10%;
    padding-bottom: 115px;
    padding-left: 10%;
    margin-left: 10%;
    margin-right: 10%;
    margin-top: 20px;
`
const HereToHelpContainer = styled.div`
    margin-top: 103px;
`;
const HowItWorksContainer = styled.div`
    margin-top: 90px;
`

export const Covid19Page = (props) => {
    return <Page>
        <Container>
            <Covid19Info>
                <Text $margin="0 0 27px 0" $color={Colors.White} $uppercase $montserrat $fontWeight={800} $center $typography={Typographies.SubHeaderBig} $lineHeight="90px">
                    Covid-19 Safety
                </Text>
                <Text $color={Colors.White} $montserrat $fontWeight={600} $center $typography={Typographies.TextXLarge}>
                    Florida Home Cash Buyers is committed to keeping our customers safe. We wear N-95 masks and face shields at all times and practice strict social distancing. We will work with you to keep as much of the process virtual as possible.
                </Text>
            </Covid19Info>
        </Container>
        <HereToHelpContainer>
            <HereToHelpHero />
        </HereToHelpContainer>
        <CallFormHero />
        <HowItWorksContainer>
            <HowItWorksHero hideWeAreHereToHelp />
        </HowItWorksContainer>
        <BlueDivider />
        <WeCanBeatHero />
    </Page>
}


export default Covid19Page;