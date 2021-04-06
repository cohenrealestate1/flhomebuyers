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
            padding: '34px 60px',
            width: 'fit-content',
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
    margin-top: 60px;
    margin-bottom: 36px;
`

export const PaddingSizes = {
    Small: "Small",
    Big: "Big"
}

type Props = {
    children: ReactNode,
    buttonProps: {
        onClick: () => void,
        text: ReactNode
    },
    additionalContent: ReactNode,
    paddingSize?: $Values<typeof PaddingSizes>,
}

export const Form = (props: Props) => {
    const {children, additionalContent, buttonProps, paddingSize} = props;
    const formikContext = useFormikContext();
    const handleSubmit = formikContext ? formikContext.handleSubmit : () => {};
    return <Container onSubmit={handleSubmit}>
        <FormContainer>
            <FormContentContainer $paddingSize={paddingSize || PaddingSizes.Big}>
                {children}
                {buttonProps && <ButtonContainer>
                    <Button onClick={buttonProps.onClick} overrides={Overrides}>{buttonProps.text}</Button>
                </ButtonContainer>}
                <Line />
                {additionalContent}
            </FormContentContainer>
            <OrangeContainer />
            <GreenContainer />
        </FormContainer>
    </Container>
}

export default Form;