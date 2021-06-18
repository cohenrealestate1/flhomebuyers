// @flow
import React from "react";
import { Colors, getBlogFromUrl, Routes } from "../../constants";
import AreasWeServeHero from "../areas-we-serve-hero";
import CallFormHero from "../call-form-hero";
import Page from "../page";
import DetailPageInfo from "../shared/detail-page-info";
import { Info } from "../shared/page-title-image";
import { Image } from "./testimonial-detail";

export const BlogDetailPage = (props) => {
    const blog = getBlogFromUrl(props.history.location.pathname);
    const {
        imgHref,
        title,
        date,
        author,
        paragraphs,
        description
    } = blog;
    const subtitle = `${date} | ${author}`;
    return <Page title={title} description={description}>
        <Image src={imgHref} />
        <Info $backgroundColor={Colors.White}>
            <DetailPageInfo title={title} subtitle={subtitle} paragraphs={paragraphs} buttonHref={Routes.Blog} buttonText="VIEW MORE POSTS" />
        </Info>
        <CallFormHero />
        <AreasWeServeHero />
    </Page>
}


export default BlogDetailPage;