// @flow
import React from "react";
import styled from "styled-components";
import { Colors, makeMediaQueryMax, Routes, Typographies } from "../../constants";
import ButtonWithCaret from "../shared/button-with-caret";
import Text from "../text";
import Item from "./item";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    padding-bottom: 80px;
    ${makeMediaQueryMax(1000, 'padding-bottom: 20px;')}
`;

const ItemsContainer = styled.div`
    display: flex;
    gap: 58px;
    margin-bottom: 44px;
    ${makeMediaQueryMax(1000, 'flex-direction: column; gap: 20px; margin-bottom: 20px;')}
`

type Props = {
    hideWeAreHereToHelp: boolean
}
export const HowItWorksHero = (props: Props) => {
    const {hideWeAreHereToHelp} = props;
    return <Container>
        {!hideWeAreHereToHelp && 
            <Text $inline $uppercase $color={Colors.Blue} $typography={Typographies.TextLarge} $center $margin="0 0 75px 0">
            We ARE HERE TO HELP IN
            &nbsp;
            <Text $inline $uppercase $underline $color={Colors.Green}>Any</Text>
            &nbsp;
            Situation!
            </Text>
        }
        <Text $color={Colors.Blue} $fontWeight={700} $margin="0 0 4px 0" $center $uppercase $typography={Typographies.SubHeaderBig}>How It Works</Text>
        <Text $color={Colors.Gray3} $fontWeight={600} $margin="0 0 44px 0" $typography={Typographies.TextMedium} $center $inline>We provide a simple, 3-step process to get your house sold for <Text $inline $color={Colors.Green}>CASH</Text>.</Text>
        <ItemsContainer>
            <Item number={1} text={<Text $uppercase $inline>Contact us by phone or on our&nbsp;<Text $inline $underline $hoverColor={Colors.Orange} $a href={Routes.GetCashOffer} $color={Colors.Blue}>Online Form</Text></Text>} />
            <Item number={2} text="GET A free CASH OFfeR on your home" />
            <Item number={3} text="CLOSE WHENEVER YOU’d LIKE" />
        </ItemsContainer>
        <ButtonWithCaret buttonBackgroundColor={Colors.White} buttonTextColor={Colors.Blue} href={Routes.HowItWorks} buttonText="More about selling with us" />
    </Container>
}

export default HowItWorksHero;
