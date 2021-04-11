// @flow
import React from "react";
import styled from "styled-components";
import AreasWeServeHero from "../areas-we-serve-hero";
import CallFormHero from "../call-form-hero";
import HereToHelpHero from "../here-to-help-hero";
import HowItWorksHero from "../how-it-works-hero";
import Page from "../page";
import PageTitle from "../shared/page-title";
import { BlueDivider } from "../shared/styled-components";
import WeCanBeatHero from "../we-can-beat-hero";

const HereToHelpContainer = styled.div`
    margin-top: 109px;
`;

export const LocationsPage = (props) => {
    return <Page>
        <PageTitle title="AREAS WE SERVE" titleFontWeight={700} />
        <AreasWeServeHero hideTitle />
        <CallFormHero />
        <HereToHelpContainer>
            <HereToHelpHero />
        </HereToHelpContainer>
        <HowItWorksHero hideWeAreHereToHelp />
        <BlueDivider />
        <WeCanBeatHero />
    </Page>
}


export default LocationsPage;