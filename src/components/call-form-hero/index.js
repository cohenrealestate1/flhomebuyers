// @flow
import React from "react";
import styled from "styled-components";
import { Colors, PhoneNumber, PhoneNumberHref, Routes, Typographies } from "../../constants";
import PhoneOldFashioned from "../icons/phone-old-fashioned";
import { ButtonContainer, ButtonEndEnhancer } from "../shared/styled-components";
import Text from "../text";

const Container = styled.div`
    background-color: ${Colors.Green};
    padding: 85px 0 61px 0;
    display: flex;
    gap: 42px;
    align-items: center;
    justify-content: center;
    width: 100%;
`
export const CallFormHero = () => {
    return <Container>
        <Button 
            text={<Text $color={Colors.Blue} $inline $fontWeight={700} $typography={Typographies.ButtonBig}>Get Your Cash Offer&nbsp;<Text $inline $underline>Now!</Text></Text>}
            href={Routes.GetCashOffer}
            subtext={<Text $italic>Click to receive a cash offer in 30 Minutes.</Text>} />
        <Button 
            text={<Text $color={Colors.Blue} $inline $fontWeight={700} $typography={Typographies.ButtonBig}>or Call {PhoneNumber}</Text>}
            href={PhoneNumberHref}
            endEnhancer={<PhoneOldFashioned size="Big" color={Colors.Blue}/>}
            subtext={<><Text $inline $italic>We Speak Spanish</Text><Text $inline>&nbsp;&nbsp;|&nbsp;&nbsp;</Text><Text $inline $italic>Hablamos Español</Text></>}/>
    </Container>
}

const StyledButtonContainer = styled(ButtonContainer)`
    height: 95px;
    margin-bottom: 14px;
`
const ButtonAndSubtextContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 14px;
`

type ButtonProps = {
    text: ReactNode,
    endEnhancer: ReactNode,
    subtext: string,
    href: string
}
const Button = (props: ButtonProps) => {
    const {text, endEnhancer, subtext, href} = props;
    return <ButtonAndSubtextContainer>
        <StyledButtonContainer href={href}>
            {text}
            {endEnhancer && <ButtonEndEnhancer>{endEnhancer}</ButtonEndEnhancer>}
        </StyledButtonContainer>
        <Text $color={Colors.White} $center $typography={Typographies.TextXSmall}>{subtext}</Text>
    </ButtonAndSubtextContainer>
}

export default CallFormHero;