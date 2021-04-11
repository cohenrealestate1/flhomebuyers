// @flow
import React from "react";
import { Colors, getBlogFromUrl, Routes } from "../../constants";
import AreasWeServeHero from "../areas-we-serve-hero";
import CallFormHero from "../call-form-hero";
import Page from "../page";
import DetailPageInfo from "../shared/detail-page-info";
import PageTitleImage from "../shared/page-title-image";

export const BlogDetailPage = (props) => {
    const blog = getBlogFromUrl(props.history.location.pathname);
    const {
        imgHref,
        title,
        date,
        author,
        paragraphs
    } = blog;
    const subtitle = `${date} | ${author}`;
    return <Page>
        <PageTitleImage imgHref={imgHref} backgroundColor={Colors.White}>
            <DetailPageInfo title={title} subtitle={subtitle} paragraphs={paragraphs} buttonHref={Routes.Blog} buttonText="VIEW MORE POSTS" />
        </PageTitleImage>
        <CallFormHero />
        <AreasWeServeHero />
    </Page>
}


export default BlogDetailPage;