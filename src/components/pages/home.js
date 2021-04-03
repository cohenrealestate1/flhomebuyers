// @flow
import { useRPCRedux } from "fusion-plugin-rpc-redux-react";
import React from "react";
import LeadIntakeForm from "../lead-intake-form";
import Page from "../page";

export const HomePage = () => {
    const sendEmailLead = useRPCRedux("sendEmailLead");
    return <Page><LeadIntakeForm sendEmailLead={sendEmailLead}/></Page>
}

export default HomePage;