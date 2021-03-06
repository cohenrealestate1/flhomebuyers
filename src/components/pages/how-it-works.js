// @flow
import React from "react";
import styled from "styled-components";
import AreasWeServeHero from "../areas-we-serve-hero";
import CallFormHero from "../call-form-hero";
import CashVsRealtorHero from "../cash-vs-realtor-hero";
import HereToHelpHero from "../here-to-help-hero";
import HowItWorksSection from "../how-it-works-section";
import Page from "../page";
import PageTitle from "../shared/page-title";
import { BlueDivider } from "../shared/styled-components";
import WeCanBeatHero from "../we-can-beat-hero";

const HowItWorksSectionContainer = styled.div`
    padding-top: 124px;
    padding-bottom: 77px;
`
const HereToHelpContainer = styled.div`
    padding-top: 81px;
`

export const HowItWorksPage = (props) => {
    return <Page title="How It Works" description="We can help you sell your home quickly and easily. Learn more about our process!">
        <PageTitle title="HOW IT WORKS" titleFontWeight={700}/>
        <HowItWorksSectionContainer>
            <HowItWorksSection />
        </HowItWorksSectionContainer>
        <CashVsRealtorHero />
        <HereToHelpContainer>
            <HereToHelpHero />
        </HereToHelpContainer>
        <CallFormHero />
        <WeCanBeatHero />
        <BlueDivider />
        <AreasWeServeHero />
    </Page>
}


export default HowItWorksPage;