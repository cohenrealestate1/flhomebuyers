// @flow
import React from "react";
import styled from "styled-components";
import { Colors, Routes, TestimonialImageHref, Typographies } from "../../constants";
import Caret from "../icons/caret";
import { ButtonContainer, ButtonEndEnhancer, GrayDivider } from "../shared/styled-components";
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
        <Text $margin="0 0 46px 0" $typography={Typographies.SubHeaderMedium} $color={Colors.Green} $openSans>Read what our past sellers have to say</Text>
        <TestimonialCard 
            imgHref={TestimonialImageHref} 
            quote={"\"They helped me sell my house fast and I couldn't be happier!\""} 
            name="Ben"
            city="Deerfield Beach"
            color={Colors.Blue}
        />
        <StyledButton href={Routes.Testimonials}>
            <Text $uppercase $typography={Typographies.TextMedium} $lineHeight="30px" $fontWeight="bold">View More Testimonials</Text>
            <ButtonEndEnhancer><Caret color={Colors.Blue} /></ButtonEndEnhancer>
        </StyledButton>
    </Container>
}

export default TestimonailsHero;