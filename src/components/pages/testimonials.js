// @flow
import React from "react";
import styled from "styled-components";
import { getCardColor, makeMediaQueryMax, Testimonials } from "../../constants";
import CallFormHero from "../call-form-hero";
import HereToHelpHero from "../here-to-help-hero";
import Page from "../page";
import PageTitle from "../shared/page-title";
import TestimonialCard from "../shared/testimonial-card";

const TestimonialSection = styled.div`
    padding-top: 100px;
    padding-bottom: 20px;
    padding-left: 10%;
    padding-right: 10%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 43px;
    ${makeMediaQueryMax(1000, `
        padding-top: 60px;
        padding-right: 10%;
        padding-left: 10%;
    `)}
`;
export const TestimonialsPage = (props) => {
    return <Page title="Testimonials" description="Read first-hand accounts from people who have sold their homes to us in the past.">
        <PageTitle title="TESTIMONIALS" titleFontWeight={700} />
        <TestimonialSection>
            {Testimonials.map((testimonial, index) => <TestimonialCard key={`testimonial_card_${index}`} testimonial={testimonial} color={getCardColor(index)} />)}
        </TestimonialSection>
        <HereToHelpHero />
        <CallFormHero />
    </Page>
}


export default TestimonialsPage;