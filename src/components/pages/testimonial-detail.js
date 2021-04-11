// @flow
import React from "react";
import styled from "styled-components";
import { Colors, Covid19Href, getTestimonialFromUrl, Routes, Typographies } from "../../constants";
import AreasWeServeHero from "../areas-we-serve-hero";
import CallFormHero from "../call-form-hero";
import Page from "../page";
import ButtonWithCaret from "../shared/button-with-caret";
import PageTitleImage from "../shared/page-title-image";
import Text from "../text";

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 25px;
    margin-bottom: 30px;
`

export const TestimonialDetailPage = (props) => {
    const testimonial = getTestimonialFromUrl(props.history.location.pathname);
    const {
        name,
        city,
        county,
        paragraphs
    } = testimonial;
    const storyStr = `${name}'s Story`;
    const cityCountyStr = `${city}, ${county} County`;
    return <Page>
        <PageTitleImage imgHref={Covid19Href} backgroundColor={Colors.White}>
            <Text $margin="0 0 31px 0" $color={Colors.Blue} $uppercase $typography={Typographies.PageHeader} $fontWeight={700} $hasSpacing>{storyStr}</Text>
            <Text $margin="0 0 100px 0" $color={Colors.Blue} $uppercase $typography={Typographies.TextLarge} $fontWeight={800} $hasSpacing>{cityCountyStr}</Text>
            <TextContainer>
                {paragraphs.map((paragraph, index) => <Text $typography={Typographies.TextMedium} $fontWeight={600} $lineHeight="40px" $color={Colors.Gray3} key={`paragraph_${index}`}>{paragraph}</Text>)}
            </TextContainer>
            <ButtonWithCaret noLeftPadding buttonBackgroundColor={Colors.White} buttonTextColor={Colors.Blue} caretColor={Colors.Blue} href={Routes.Testimonials} buttonText="VIEW MORE TESTIMONIALS" />
        </PageTitleImage>
        <CallFormHero />
        <AreasWeServeHero />
    </Page>
}


export default TestimonialDetailPage;