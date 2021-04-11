// @flow
import React from "react";
import styled from "styled-components";
import { BlogPosts, getCardColor } from "../../constants";
import CallFormHero from "../call-form-hero";
import HereToHelpHero from "../here-to-help-hero";
import HowItWorksHero from "../how-it-works-hero";
import Page from "../page";
import BlogCard from "../shared/blog-card";
import PageTitle from "../shared/page-title";
import { BlueDivider, GrayDivider } from "../shared/styled-components";
import WeCanBeatHero from "../we-can-beat-hero";

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
            {BlogPosts.map((blog, index) => <BlogCard key={`testimonial_card_${index}`} blog={blog} color={getCardColor(index)} />)}
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