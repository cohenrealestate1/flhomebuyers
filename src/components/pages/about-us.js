// @flow
import React from "react";
import styled from "styled-components";
import { Colors, Routes, Typographies } from "../../constants";
import AreasWeServeHero from "../areas-we-serve-hero";
import CallFormHero from "../call-form-hero";
import MeetTheTeamHero from "../meet-the-team-hero";
import Page from "../page";
import { Info } from "../shared/page-title-image";
import PageTitleImageBox from "../shared/page-title-image-box";
import { BlueDivider, ButtonContainer } from "../shared/styled-components";
import Text from "../text";
import WeCanBeatHero from "../we-can-beat-hero";

const CashOfferButtonContainer = styled.div`
    margin-top: 20px;
    margin-bottom: 67px;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
    box-sizing: border-box;
`;
const StyledButton = styled(ButtonContainer)`
    background-color: ${Colors.Blue};
    padding: 34px 50px;
`;

export const AboutUsPage = (props) => {
    return <Page title="About us" description={`We buy houses, multi-family, apartments, and condos in South Florida. Learn more about how we can help you sell your house quickly for cash.`}>
        <Info $backgroundColor={Colors.Blue}>
            <PageTitleImageBox title="About Us" text="Ben here! Thanks for checking us out. We buy houses, multi-family, apartments, and condos in the South Florida, Treasure Coast, and Gulf Coast areas. We are family-run, and we make our family values the center of our business - trustworthiness, fairness, and respect. Get in touch with us, and we’ll get you a cash offer on your property ASAP!" />
        </Info>
        <MeetTheTeamHero />
        <CashOfferButtonContainer>
            <StyledButton href={Routes.GetCashOffer}><Text $center $inline $color={Colors.White}>Get Your Cash Offer{" "}<Text $inline $underline>Now!</Text></Text></StyledButton>
        </CashOfferButtonContainer>
        <Text $center $padding="0 15%" $margin="0 0 100px 0" $inline $color={Colors.Gray3} $typography={Typographies.TextXLarge}>
            Contact us today and our team will give you a call within 30 minutes{" "}
            <Text $inline $uppercase $underline>GUARANTEED</Text>{" "}
            to make our highest and best offer.</Text>
        <BlueDivider />
        <WeCanBeatHero />
        <CallFormHero />
        <AreasWeServeHero />
    </Page>
}


export default AboutUsPage;