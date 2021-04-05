// @flow
import React from "react";
import styled from "styled-components";
import { Colors, PhoneNumber, PhoneNumberHref, Routes, Typographies } from "../../constants";
import PhoneOldFashioned from "../icons/phone-old-fashioned";
import Text from "../text";

const Container = styled.div`
    background-color: ${Colors.Green};
    padding: 85px 141px 61px 139px;
    display: flex;
    gap: 42px;
`

const StyledEndEnhancer = styled.div`
    margin-left: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const CallFormHero = () => {
    return <Container>
        <Button 
            text={<Text $color={Colors.Blue} $inline $fontWeight={700} $typography={Typographies.ButtonBig}>Get Your Cash Offer&nbsp;<Text $inline $underline>Now!</Text></Text>}
            href={Routes.Form}
            subtext={<Text $italic>Click to receive a cash offer in 30 Minutes.</Text>} />
        <Button 
            text={<Text $color={Colors.Blue} $inline $fontWeight={700} $typography={Typographies.ButtonBig}>or Call {PhoneNumber}</Text>}
            href={PhoneNumberHref}
            endEnhancer={<PhoneOldFashioned size="Big" color={Colors.Blue}/>}
            subtext={<><Text $inline $italic>We Speak Spanish</Text><Text $inline>&nbsp;&nbsp;|&nbsp;&nbsp;</Text><Text $inline $italic>Hablamos Español</Text></>}/>
    </Container>
}

const ButtonContainer = styled.a`
    text-decoration: none;
    background-color: ${Colors.White};
    color: ${Colors.Blue};
    ${Typographies.ButtonBig}
    height: 95px;
    padding: 18px 21px 13px 23px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    margin-bottom: 14px;
    cursor: pointer;
    font-weight: 700;
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
        <ButtonContainer href={href}>
            {text}
            {endEnhancer && <StyledEndEnhancer>{endEnhancer}</StyledEndEnhancer>}
        </ButtonContainer>
        <Text $color={Colors.White} $center $typography={Typographies.TextXSmall}>{subtext}</Text>
    </ButtonAndSubtextContainer>
}

export default CallFormHero;