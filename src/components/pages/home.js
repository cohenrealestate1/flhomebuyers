// @flow
import { Route, Switch, useRouteMatch, withRouter } from "fusion-plugin-react-router";
import { useRPCRedux } from "fusion-plugin-rpc-redux-react";
import React from "react";
import styled from "styled-components";
import { getCityNameFromUrl, makeMediaQueryMax, Routes } from "../../constants";
import AreasWeServeHero from "../areas-we-serve-hero";
import CallFormHero from "../call-form-hero";
import { makeCityRoutes } from "../city-route";
import { AboutUsHero, BlogHero, Covid19Hero } from "../generic-hero/heros";
import HereToHelpHero from "../here-to-help-hero";
import HowItWorksHero from "../how-it-works-hero";
import LeadIntakeForm from "../lead-intake-form";
import LeadIntakeFormThankYou from "../lead-intake-form/thank-you";
import Page from "../page";
import PageTitle from "../shared/page-title";
import { BlueDivider } from "../shared/styled-components";
import Text from "../text";
import WeCanBeatHero from "../we-can-beat-hero";


const HerosContainer = styled.div`
    display: flex;
    width: 100%;
    box-sizing: border-box;
    ${makeMediaQueryMax(1000, 'flex-direction: column;')}
`

export const HomePage = (props) => {
    const isThankYou = useRouteMatch(Routes.ThankYouLeadIntakeForm);
    const cityName = getCityNameFromUrl(props.history.location.pathname);
    const title = isThankYou ? "Cash Offer On The Way!" : cityName ? `${cityName} | Get Your Cash Offer Now!` : "Get Your Cash Offer Now!";
    const description = cityName ? `Sell your home for cash in ${cityName}` : "Sell your home for cash in South Florida or the Treasure Coast";
    return <Page title={title} description={description}>
        <TitleAndForm {...props} />
        <Switch>
            {makeCityRoutes(() => <>
                <HereToHelpHero />
            </>)}
        </Switch>
        <Switch>
            {makeCityRoutes(() => <HowItWorksHero hideWeAreHereToHelp />)}
            <Route component={() => <HowItWorksHero />} />
        </Switch>
        <BlueDivider />
        <WeCanBeatHero />
        <Switch>
            <Route exact path={[Routes.ThankYouLeadIntakeForm, Routes.Home]} component={() => 
            <>
                <HerosContainer>
                    <AboutUsHero/>
                    <Covid19Hero/>
                </HerosContainer>
                <BlogHero />
                <CallFormHero />
            </>} />
        </Switch>
        <Switch>
            <Route exact path ={[Routes.ThankYouLeadIntakeForm, Routes.Home]} component={AreasWeServeHero} />
            {makeCityRoutes(() => <AreasWeServeHero />)}
        </Switch>
    </Page>
}

const FormContainer = styled.div`
    margin-bottom: 101px;
`
const SubtitleContainer = styled.div`
    padding-bottom: 30px;
    max-width: 67%;
    margin: ${props => props.$topMargin || '0'} auto 0;
    ${makeMediaQueryMax(1000, `margin: 0 auto auto; max-width: 90%; text-align: left;`)}
`
const ThankYouContainer = styled.div`
    margin-top: 38px;
`

const subtitleProps = {
    $lineHeight: "34px",
    $fontWeight: 600,
    $style: makeMediaQueryMax(1000, `
        ::before { content: "•" }
    `)
}

const SubtitleLong =  <SubtitleContainer>
    <Text $lineHeight="34px" $center $margin="38px 0 10px 0">ARE YOU . . .</Text> 
    <Text $margin="0 0 10px 0" {...subtitleProps} >Unable to keep up with your mortgage payments?</Text>
    <Text $margin="0 0 10px 0" {...subtitleProps} >Tired of maintaining your property?</Text>
    <Text $margin="0 0 10px 0" {...subtitleProps} >Out of time or money to renovate before selling?</Text>
    <Text $margin="0 0 10px 0" {...subtitleProps} >Do you need to sell quickly to relocate?</Text>
    <Text $lineHeight="34px" $margin="0 0 30px 0" $style={makeMediaQueryMax(1000, 'margin: 20px 0 0 0;')}  $fontWeight={800} >WE ARE HERE TO HELP IN ANY SITUATION!</Text>
    <Text $lineHeight="34px" $center $margin="0 0 50px 0" $fontWeight={600} $inline>Complete the form below and our team will give you a call within 30 minutes <Text $uppercase $inline $underline>Guaranteed</Text> to make a cash offer.</Text>
</SubtitleContainer>

const SubtitleShort = <SubtitleContainer $topMargin="18px">
    <Text $lineHeight="34px" $center $margin="0 0 50px 0" $fontWeight={600} $inline>Complete the form below and our team will give you a call within 30 minutes <Text $uppercase $inline $underline>Guaranteed</Text> to make a cash offer.</Text>
</SubtitleContainer>

const TitleAndForm = (props) => {
    const sendEmailLead = useRPCRedux("sendEmailLead");
    const cityName = getCityNameFromUrl(props.history.location.pathname);
    return <>
        <Switch>
            <Route path={Routes.ThankYouLeadIntakeForm} component={() => <PageTitle title="Sent!" />} />
            {makeCityRoutes(() => <PageTitle title="WE BUY HOUSES FOR" title2="CASH" title3={` IN ${cityName.toUpperCase()}`} subtitle={SubtitleShort} hasForm={true} />)}
            <Route exact path={[Routes.GetCashOffer, Routes.Home]} component={() => <PageTitle title="WE BUY HOUSES FOR" title2="CASH" subtitle={SubtitleLong} hasForm={true} />} />
        </Switch>
        <FormContainer>
            <Switch>
                <Route path={Routes.ThankYouLeadIntakeForm} component={() => <ThankYouContainer><LeadIntakeFormThankYou /></ThankYouContainer>} />
                <Route path={[Routes.GetCashOffer, Routes.Home]} component={() => <LeadIntakeForm sendEmailLead={sendEmailLead} {...props} />} />
            </Switch>
        </FormContainer>
    </>
}

export default withRouter(HomePage);