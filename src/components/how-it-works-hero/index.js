// @flow
import { Button } from "baseui/button";
import React from "react";
import styled from "styled-components";
import { Colors, Routes, Typographies } from "../../constants";
import Text from "../text";
import Item from "./item";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
`;

const ItemsContainer = styled.div`
    display: flex;
    gap: 58px;
    margin-bottom: 44px;
`

export const HowItWorksHero = () => {
    return <Container>
        <Text $inline $uppercase $color={Colors.Blue} $typography={Typographies.TextLarge} $center $margin="0 0 107px 0">
            We ARE HERE TO HELP IN
            &nbsp;
            <Text $inline $uppercase $underline $color={Colors.Green}>Any</Text>
            &nbsp;
            Situation!
        </Text>
        <Text $color={Colors.Blue} $fontWeight={700} $margin="0 0 4px 0" $center $uppercase $typography={Typographies.SubHeaderBig}>How It Works</Text>
        <Text $color={Colors.Gray3} $fontWeight={600} $margin="0 0 90px 0" $typography={Typographies.TextMedium} $center $inline>We provide a simple, 3-step process to get your house sold for <Text $inline $color={Colors.Green}>CASH</Text>.</Text>
        <ItemsContainer>
            <Item number={1} text={<Text $uppercase $inline>Contact us by phone or on our&nbsp;<Text $underline $hoverColor={Colors.Orange} $a href={Routes.Form} $color={Colors.Blue}>Online Form</Text></Text>} />
            <Item number={2} text="GET A free CASH OFfeR on your home" />
            <Item number={3} text="CLOSE WHENEVER YOU’d LIKE" />
        </ItemsContainer>
        <Button endEnhancer={<Text $color={Colors.Blue}>{'>'}</Text>} overrides={Overrides}>
            <Text $color={Colors.Blue} $uppercase $typography={Typographies.TextMedium} $fontWeight={700}>More about selling with us</Text>
        </Button>
    </Container>
}

export default HowItWorksHero;

const Overrides = {
    BaseButton: {
        style: {
            backgroundColor: Colors.White,
            maxWidth: '571px',
            height: '100px',
            marginBottom: "116px",
            ":hover": {
                backgroundColor: Colors.Orange
            }
        }
    }
}