// @flow
import React from "react";
import styled from "styled-components";
import { makeMediaQueryMax } from "../../constants";
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
    ${makeMediaQueryMax(1000, 'margin-top: 20px;')}
`;
const AreasWeServeContainer = styled.div`
    ${makeMediaQueryMax(1000, `padding-top: 40px;`)}
`

export const LocationsPage = (props) => {
    return <Page title="Locations" description="We serve the entirety of the South Florida, Gulf Coast and Treasure Coast areas. Learn more about selling your home now.">
        <PageTitle title="AREAS WE SERVE" titleFontWeight={700} />
        <AreasWeServeContainer>
            <AreasWeServeHero hideTitle />
        </AreasWeServeContainer>
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