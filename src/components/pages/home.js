// @flow
import { withRouter } from "fusion-plugin-react-router";
import { useRPCRedux } from "fusion-plugin-rpc-redux-react";
import React from "react";
import styled from "styled-components";
import { Routes } from "../../constants";
import AreasWeServeHero from "../areas-we-serve-hero";
import CallFormHero from "../call-form-hero";
import { AboutUsHero, BlogHero, Covid19Hero } from "../generic-hero/heros";
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
`

export const HomePage = (props) => {
    return <Page>
        <TitleAndForm {...props} />
        <HowItWorksHero />
        <BlueDivider />
        <WeCanBeatHero />
        <HerosContainer>
            <AboutUsHero/>
            <Covid19Hero/>
        </HerosContainer>
        <BlogHero />
        <CallFormHero />
        <AreasWeServeHero />
    </Page>
}

const Divider = styled.div`
    margin-bottom: 100px;
`
const FormContainer = styled.div`
    margin-bottom: 101px;
`

const Subtitle =  <>
    <Text $lineHeight="34px" $margin="38px 0 10px 0">ARE YOU...</Text> 
    <Text $lineHeight="34px" $margin="0 0 10px 0">Unable to keep up with your mortgage payments?</Text>
    <Text $lineHeight="34px" $margin="0 0 10px 0">Tired of maintaining your property?</Text>
    <Text $lineHeight="34px" $margin="0 0 10px 0">Out of time or money to renovate before selling?</Text>
    <Text $lineHeight="34px" $margin="0 0 10px 0">Do you need to sell quickly to relocate?</Text>
    <Text $lineHeight="34px" $margin="0 0 10px 0" $fontWeight={800} $margin="0 0 45px 0">WE ARE HERE TO HELP IN ANY SITUATION!</Text>
    <Text $lineHeight="34px" $margin="0 0 10px 0" $inline>Complete the form below and our team will give you a call within 30 minutes <Text $uppercase $inline $underline>Guaranteed</Text> to make a cash offer.</Text>
</>

const TitleAndForm = (props) => {
    const sendEmailLead = useRPCRedux("sendEmailLead");
    const {location: {pathname}} = props;
    const isThankYouPage = pathname === Routes.ThankYou;
    const title = isThankYouPage ? "Sent!" : "WE BUY HOUSES FOR";
    const title2 = isThankYouPage ? undefined : "CASH";
    const subtitle = isThankYouPage ? undefined : Subtitle;
    return <>
        <PageTitle title={title} title2={title2} subtitle={subtitle} hasForm={true}/>
        <FormContainer>{isThankYouPage ? <LeadIntakeFormThankYou /> : <LeadIntakeForm sendEmailLead={sendEmailLead} {...props}/>}</FormContainer>
    </>
}

export default withRouter(HomePage);