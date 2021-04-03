// @flow
import { useRPCRedux } from "fusion-plugin-rpc-redux-react";
import React from "react";
import styled from "styled-components";
import LeadIntakeForm from "../lead-intake-form";
import Page from "../page";
import PageTitle from "../shared/page-title";

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

export const HomePage = () => {
    const sendEmailLead = useRPCRedux("sendEmailLead");
    return <Page>
        <PageTitle title="WE BUY HOUSES FOR" title2="CASH" hasForm={true} subtitle={
            <>
            <div>ARE YOU...</div> 
            <div>Unable to keep up with your mortgage payments?</div>
            <div>Tired of maintaining your property?</div>
            <div>Out of time or money to renovate before selling?</div>
            <Divider>Do you need to sell quickly to relocat?</Divider>
            <Bold>WE ARE HERE TO HELP IN ANY SITUATION!</Bold>
            <Inline>Complete the form below and our team will give you a call within 30 minutes <Underline>GUARANTEED</Underline> to make a cash offer.</Inline>
            </>
        }/>
        <LeadIntakeForm sendEmailLead={sendEmailLead}/>
    </Page>
}

export default HomePage;