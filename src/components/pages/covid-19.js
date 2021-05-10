// @flow
import React from "react";
import styled from "styled-components";
import { Colors, Covid19Href, makeMediaQueryMax } from "../../constants";
import CallFormHero from "../call-form-hero";
import HereToHelpHero from "../here-to-help-hero";
import HowItWorksHero from "../how-it-works-hero";
import Page from "../page";
import PageTitleImage from "../shared/page-title-image";
import PageTitleImageBox from "../shared/page-title-image-box";
import { BlueDivider } from "../shared/styled-components";
import WeCanBeatHero from "../we-can-beat-hero";

const HereToHelpContainer = styled.div`
    margin-top: 103px;
    ${makeMediaQueryMax(1000, 'margin-top: 20px;')}
`;
const HowItWorksContainer = styled.div`
    margin-top: 20px;
`

export const Covid19Page = (props) => {
    return <Page title="Covid 19">
        <PageTitleImage imgHref={Covid19Href} backgroundColor={Colors.Blue}>
            <PageTitleImageBox title="Covid-19 Safety" text="Florida Home Cash Buyers is committed to keeping our customers safe. We wear N-95 masks and face shields at all times and practice strict social distancing. We will work with you to keep as much of the process virtual as possible." />
        </PageTitleImage>
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