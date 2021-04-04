// @flow
import { withRouter } from "fusion-plugin-react-router";
import { useRPCRedux } from "fusion-plugin-rpc-redux-react";
import React from "react";
import styled from "styled-components";
import { Routes } from "../../constants";
import HowItWorksHero from "../how-it-works-hero";
import LeadIntakeForm from "../lead-intake-form";
import LeadIntakeFormThankYou from "../lead-intake-form/thank-you";
import Page from "../page";
import PageTitle from "../shared/page-title";
import Text from "../text";

export const HomePage = (props) => {
    return <Page>
        <TitleAndForm {...props} />
        <HowItWorksHero />
    </Page>
}

const Divider = styled.div`
    margin-bottom: 100px;
`
const FormContainer = styled.div`
    margin-bottom: 101px;
`

const Subtitle =  <>
    <Text>ARE YOU...</Text> 
    <Text>Unable to keep up with your mortgage payments?</Text>
    <Text>Tired of maintaining your property?</Text>
    <Text>Out of time or money to renovate before selling?</Text>
    <Divider>Do you need to sell quickly to relocate?</Divider>
    <Text $fontWeight={800} $margin="0 0 45px 0">WE ARE HERE TO HELP IN ANY SITUATION!</Text>
    <Text $inline>Complete the form below and our team will give you a call within 30 minutes <Text $uppercase $inline $underline>Guaranteed</Text> to make a cash offer.</Text>
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