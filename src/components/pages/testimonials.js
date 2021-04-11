// @flow
import React from "react";
import styled from "styled-components";
import { CardColors, Testimonials } from "../../constants";
import CallFormHero from "../call-form-hero";
import HereToHelpHero from "../here-to-help-hero";
import Page from "../page";
import PageTitle from "../shared/page-title";
import TestimonialCard from "../shared/testimonial-card";

const TestimonialSection = styled.div`
    padding-top: 100px;
    padding-bottom: 166px;
    padding-left: 10%;
    padding-right: 10%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 43px;
`;
const HereToHelpContainer = styled.div`
    padding-top: 103px;
`

const getColor = index => CardColors[index % 3];

export const TestimonialsPage = (props) => {
    return <Page>
        <PageTitle title="TESTIMONIALS" titleFontWeight={700} />
        <HereToHelpContainer>
            <HereToHelpHero />
        </HereToHelpContainer>
        <CallFormHero />
        <TestimonialSection>
            {Testimonials.map((testimonial, index) => <TestimonialCard key={`testimonial_card_${index}`} testimonial={testimonial} color={getColor(index)} />)}
        </TestimonialSection>
    </Page>
}


export default TestimonialsPage;