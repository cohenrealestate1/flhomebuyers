// @flow
import { Button } from "baseui/button";
import { useFormikContext } from "formik";
import React, { ReactNode } from "react";
import styled from "styled-components";
import { Colors } from "../../constants";
import { Container, FormContainer, FormContentContainer, GreenContainer, OrangeContainer } from "./styled-components";

const Overrides = {
    BaseButton: {
        style: {
            backgroundColor: Colors.Blue,
            width: '66%',
            borderRadius: '5px',
            height: '100px',
            ':hover': {
                backgroundColor: Colors.Orange,
            }
        }
    }
}

const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 28px;
`
const Line = styled.div`
    width: 100%;
    height: 1px;
    background-color: ${Colors.Gray4};
    margin-top: 80px;
    margin-bottom: 36px;
`

type Props = {
    children: ReactNode,
    buttonProps: {
        onClick: () => void,
        text: ReactNode
    },
    additionalContent: ReactNode
}

export const Form = (props: Props) => {
    const {children, buttonProps: {onClick, text}, additionalContent} = props;
    const {handleSubmit} = useFormikContext();
    return <Container onSubmit={handleSubmit}>
        <FormContainer>
            <FormContentContainer>
                {children}
                <ButtonContainer>
                    <Button onClick={onClick} overrides={Overrides}>{text}</Button>
                </ButtonContainer>
                <Line />
                {additionalContent}
            </FormContentContainer>
            <OrangeContainer />
            <GreenContainer />
        </FormContainer>
    </Container>
}

export default Form;