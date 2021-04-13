// @flow
import React from "react";
import styled from "styled-components";
import { Colors, Routes, Testimonials, Typographies } from "../../constants";
import { ButtonWithCaret } from "../shared/button-with-caret";
import { ButtonContainer, GrayDivider } from "../shared/styled-components";
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
`
const StyledButton = styled(ButtonContainer)`
    ${Typographies.TextMedium}
    line-height: 30px;
    font-weight: 30px;
    :hover {
        background-color: ${Colors.Orange};
    }
`
const StyledGrayDivider = styled(GrayDivider)`
    margin-bottom: 61px;
`

export const TestimonailsHero = () => {
    return <Container>
        <StyledGrayDivider />
        <Text $center $margin="0 0 46px 0" $typography={Typographies.SubHeaderMedium} $color={Colors.Green} $openSans>Read what our past sellers have to say</Text>
        <TestimonialCard 
            testimonial={Testimonials[0]}
            color={Colors.Blue}
        />
        <ButtonWithCaret buttonBackgroundColor={Colors.White} buttonTextColor={Colors.Blue} href={Routes.Testimonials} buttonText="View More Testimonials" />
    </Container>
}

export default TestimonailsHero;