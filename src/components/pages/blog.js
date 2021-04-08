// @flow
import React from "react";
import styled from "styled-components";
import { Colors, TestimonialImageHref } from "../../constants";
import CallFormHero from "../call-form-hero";
import HereToHelpHero from "../here-to-help-hero";
import HowItWorksHero from "../how-it-works-hero";
import Page from "../page";
import BlogCard from "../shared/blog-card";
import PageTitle from "../shared/page-title";
import { BlueDivider, GrayDivider } from "../shared/styled-components";
import WeCanBeatHero from "../we-can-beat-hero";

const blogProps = {
    imgHref: TestimonialImageHref,
    title: "Biden's Eviction Moratorium and its Effect on the Housing Market",
    quote: "If you thought being a landlord was hard, get ready for even bigger challenges."
}
const BlogSection = styled.div`
    padding-top: 93px;
    padding-bottom: 113px;
    padding-left: 10%;
    padding-right: 10%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 53px;
`;
const CallFormContainer = styled.div`
    padding-top: 30px;
`
const HereToHelpContainer = styled.div`
    padding-top: 83px;
`

export const BlogPage = (props) => {
    return <Page>
        <PageTitle title="THE BLOG" titleFontWeight={700}/>
        <CallFormContainer>
            <CallFormHero />
        </CallFormContainer>
        <BlogSection>
            <BlogCard {...blogProps} color={Colors.Blue} />
            <BlogCard {...blogProps} color={Colors.Orange} />
            <BlogCard {...blogProps} color={Colors.Green} />
            <BlogCard {...blogProps} color={Colors.Blue} />
            <BlogCard {...blogProps} color={Colors.Orange} />
            <BlogCard {...blogProps} color={Colors.Green} />
        </BlogSection>
        <GrayDivider />
        <HereToHelpContainer>
            <HereToHelpHero />
        </HereToHelpContainer>
        <HowItWorksHero hideWeAreHereToHelp={true} />
        <BlueDivider />
        <WeCanBeatHero />
    </Page>
}


export default BlogPage;