// @flow
import { useRPCRedux } from "fusion-plugin-rpc-redux-react";
import React from "react";
import styled from "styled-components";
import AreasWeServeHero from "../areas-we-serve-hero";
import CallFormHero from "../call-form-hero";
import ContactUsForm from "../contact-us-form";
import Page from "../page";
import PageTitle from "../shared/page-title";
import TestimonialsHero from "../testimonials-hero";

export const ContactUsPage = () => {
    const sendEmailContactUs = useRPCRedux("sendEmailContactUs");
    return <Page>
        <PageTitle title="CONTACT US" hasForm={true}/>
        <FormContainer>
            <ContactUsForm sendEmailContactUs={sendEmailContactUs}/>
        </FormContainer>
        <TestimonialsHero />
        <CallFormHero />
        <AreasWeServeHero />
    </Page>
}

const FormContainer = styled.div`
    margin-bottom: 101px;
`

export default ContactUsPage;