// @flow
import { withRouter } from "fusion-plugin-react-router";
import { useRPCRedux } from "fusion-plugin-rpc-redux-react";
import React from "react";
import styled from "styled-components";
import { makeMediaQueryMax, Routes } from "../../constants";
import AreasWeServeHero from "../areas-we-serve-hero";
import CallFormHero from "../call-form-hero";
import ContactUsForm from "../contact-us-form";
import ContactUsFormThankYou from "../contact-us-form/thank-you";
import Page from "../page";
import PageTitle from "../shared/page-title";
import TestimonialsHero from "../testimonials-hero";

export const ContactUsPage = (props) => {
    const sendEmailContactUs = useRPCRedux("sendEmailContactUs");
    const {location: {pathname}} = props;
    const isThankYouPage = pathname === Routes.ThankYouContactUs;
    return <Page>
        <PageTitle title="CONTACT US" hasForm={true} titleFontWeight={700} />
        <FormContainer>
            {isThankYouPage ? <ContactUsFormThankYou /> : <ContactUsForm sendEmailContactUs={sendEmailContactUs} {...props} />}
        </FormContainer>
        <TestimonialsHero />
        <CallFormHero />
        <AreasWeServeHero />
    </Page>
}

const FormContainer = styled.div`
    margin-bottom: 101px;
    ${makeMediaQueryMax(1000, `
        margin-bottom: 0px;
    `)}
`

export default withRouter(ContactUsPage);