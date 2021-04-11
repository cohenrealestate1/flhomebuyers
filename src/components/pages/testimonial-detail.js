// @flow
import React from "react";
import { Colors, getTestimonialFromUrl, Routes } from "../../constants";
import AreasWeServeHero from "../areas-we-serve-hero";
import CallFormHero from "../call-form-hero";
import Page from "../page";
import DetailPageInfo from "../shared/detail-page-info";
import PageTitleImage from "../shared/page-title-image";

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
        <PageTitleImage imgHref={imgHref} backgroundColor={Colors.White}>
            <DetailPageInfo title={storyStr} subtitle={cityCountyStr} paragraphs={paragraphs} buttonHref={Routes.Testimonials} buttonText="VIEW MORE TESTIMONIALS" />
        </PageTitleImage>
        <CallFormHero />
        <AreasWeServeHero />
    </Page>
}


export default TestimonialDetailPage;