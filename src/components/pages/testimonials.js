// @flow
import React from "react";
import styled from "styled-components";
import { Colors, TestimonialImageHref } from "../../constants";
import CallFormHero from "../call-form-hero";
import HereToHelpHero from "../here-to-help-hero";
import Page from "../page";
import PageTitle from "../shared/page-title";
import TestimonialCard from "../shared/testimonial-card";

const testimonialProps = {
    imgHref: TestimonialImageHref,
    quote: "\"They helped me sell my house fast and I couldn't be happier!\"",
    name: "Ben",
    city: "Deerfield Beach",
}
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
const HereToHelpCotnainer = styled.div`
    padding-top: 103px;
`

export const TestimonialsPage = (props) => {
    return <Page>
        <PageTitle title="TESTIMONIALS"/>
        <HereToHelpCotnainer>
            <HereToHelpHero />
        </HereToHelpCotnainer>
        <CallFormHero />
        <TestimonialSection>
            <TestimonialCard {...testimonialProps} color={Colors.Blue} />
            <TestimonialCard {...testimonialProps} color={Colors.Orange} />
            <TestimonialCard {...testimonialProps} color={Colors.Green} />
            <TestimonialCard {...testimonialProps} color={Colors.Blue} />
            <TestimonialCard {...testimonialProps} color={Colors.Orange} />
            <TestimonialCard {...testimonialProps} color={Colors.Green} />
        </TestimonialSection>
    </Page>
}


export default TestimonialsPage;