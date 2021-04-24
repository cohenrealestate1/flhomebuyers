// @flow
import React from "react";
import styled from "styled-components";
import { Colors, getTestimonialFromUrl, Routes } from "../../constants";
import AreasWeServeHero from "../areas-we-serve-hero";
import CallFormHero from "../call-form-hero";
import Page from "../page";
import DetailPageInfo from "../shared/detail-page-info";
import { Info } from "../shared/page-title-image";

export const Image = styled.img`
    object-fit: contain;
    height: 600px;
`

export const TestimonialDetailPage = (props) => {
    const testimonial = getTestimonialFromUrl(props.history.location.pathname);
    const {
        name,
        city,
        county,
        paragraphs,
        imgHref
    } = testimonial;
    const storyStr = `${name}'s Story`;
    const cityCountyStr = `${city}, ${county} County`;
    return <Page>
        <Image src={imgHref} />
        <Info $backgroundColor={Colors.White}>
            <DetailPageInfo renderQuote title={storyStr} subtitle={cityCountyStr} paragraphs={paragraphs} buttonHref={Routes.Testimonials} buttonText="VIEW MORE TESTIMONIALS" />
        </Info>
        <CallFormHero />
        <AreasWeServeHero />
    </Page>
}


export default TestimonialDetailPage;