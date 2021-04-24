// @flow
import React from "react";
import styled from "styled-components";
import { Colors, makeMediaQueryMax, Routes, Testimonials, Typographies } from "../../constants";
import { ButtonWithCaret } from "../shared/button-with-caret";
import { GrayDivider } from "../shared/styled-components";
import TestimonialCard from "../shared/testimonial-card";
import Text from "../text";

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 42px;
    align-items: center;
    justify-content: center;
    padding-left: 10%;
    padding-right: 10%;
    padding-top: 91px;
    padding-bottom: 80px;
    box-sizing: border-box;
    ${makeMediaQueryMax(1000, `
        padding-top: 10px;
        padding-bottom: 30px;
    `)}
`
const StyledGrayDivider = styled(GrayDivider)`
    margin-bottom: 61px;
    ${makeMediaQueryMax(1000, `
        display: none;
        margin-bottom: 0;
    `)}
`

export const TestimonialsHero = () => {
    return <Container>
        <StyledGrayDivider />
        <Text $center $margin="0 0 46px 0" $style={makeMediaQueryMax(1000, `margin: 0 0 0px 0; ${Typographies.SubHeaderBig}`)} $typography={Typographies.SubHeaderMedium} $color={Colors.Green} $openSans>Read what our past sellers have to say</Text>
        <TestimonialCard 
            testimonial={Testimonials[0]}
            color={Colors.Blue}
        />
        <ButtonWithCaret buttonBackgroundColor={Colors.White} buttonTextColor={Colors.Blue} href={Routes.Testimonials} buttonText="View More Testimonials" textStyle={makeMediaQueryMax(1000, Typographies.ButtonBig)} />
    </Container>
}

export default TestimonialsHero;