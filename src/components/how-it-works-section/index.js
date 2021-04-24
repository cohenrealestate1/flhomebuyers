// @flow
import React from "react";
import styled from "styled-components";
import { Colors, PhoneNumber, PhoneNumberHref, Routes } from "../../constants";
import Calendar from "../icons/calendar";
import CashStack from "../icons/cash-stack";
import PhoneOutbound from "../icons/phone-outbound";
import { GrayDivider } from "../shared/styled-components";
import Text from "../text";
import Item from "./item";

const Container = styled.div`
    display: flex;
    flex-direction: column;
`
const GrayDividerContainer = styled.div`
    margin: 54px 0;
`

export const HowItWorksSection = () => {
    return <Container>
        <Item 
            number={1} 
            title="Contact Us"
            icon={<PhoneOutbound />}
            text={<>
                Call Florida Home Cash Buyers at{" "}
                <Text $color={Colors.Green} $underline $inline $hoverColor={Colors.Orange} $a $href={PhoneNumberHref}>{PhoneNumber}</Text> {" "}
                or fill out our {" "}
                <Text $color={Colors.Green} $underline $inline $hoverColor={Colors.Orange} $a $href={Routes.GetCashOffer}>Get Cash Offer NOW</Text> {" "}
                form. Our team will give you a call within 30 minutes GUARANTEED to make our highest and best offer.
            </>}
            bottom={-12}
            right={-48}
        />
        <GrayDividerContainer>
            <GrayDivider />
        </GrayDividerContainer>
        <Item 
            number={2} 
            title="Get a Cash Offer"
            icon={<CashStack />}
            text="We will make you a cash offer on your house. It is entirely free and you are not obligated to accept the offer. We take into account local comps to calculate our offer. No annoying appraisals, mortgage applications and banks needed - we always use our OWN cash for making offers."
            bottom={-26}
            right={-63}
        />
        <GrayDividerContainer>
            <GrayDivider />
        </GrayDividerContainer>
        <Item 
            number={3} 
            title="Close When You'd Like"
            icon={<Calendar />}
            text="We will close with whatever timeframe works best for you. You keep so much more of the sale price as you do not need to worry about realtor commissions or home repairs. Maximize your profit as quickly as possible by working with Florida Home Cash Buyers!"
            bottom={-12}
            right={-48}
        />
    </Container>
}

export default HowItWorksSection;