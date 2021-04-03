// @flow
import { withRouter } from "fusion-plugin-react-router";
import { useRPCRedux } from "fusion-plugin-rpc-redux-react";
import React from "react";
import styled from "styled-components";
import { Routes } from "../../constants";
import LeadIntakeForm from "../lead-intake-form";
import LeadIntakeFormThankYou from "../lead-intake-form/thank-you";
import Page from "../page";
import PageTitle from "../shared/page-title";

export const HomePage = (props) => {
    return <Page>
        <TitleAndForm {...props} />
    </Page>
}

const Divider = styled.div`
    margin-bottom: 100px;
`
const Inline = styled.div`
    display: inline;
`
const Bold = styled.div`
    font-weight: 800;
    margin-bottom: 45px;
`
const Underline = styled.div`
    display: inline;
    text-decoration: underline;
`

const Subtitle =  <>
    <div>ARE YOU...</div> 
    <div>Unable to keep up with your mortgage payments?</div>
    <div>Tired of maintaining your property?</div>
    <div>Out of time or money to renovate before selling?</div>
    <Divider>Do you need to sell quickly to relocat?</Divider>
    <Bold>WE ARE HERE TO HELP IN ANY SITUATION!</Bold>
    <Inline>Complete the form below and our team will give you a call within 30 minutes <Underline>GUARANTEED</Underline> to make a cash offer.</Inline>
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
        {isThankYouPage ? <LeadIntakeFormThankYou /> : <LeadIntakeForm sendEmailLead={sendEmailLead} {...props}/>}
    </>
}

export default withRouter(HomePage);