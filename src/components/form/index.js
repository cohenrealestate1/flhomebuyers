// @flow
import { Button } from "baseui/button";
import { useFormikContext } from "formik";
import React, { ReactNode } from "react";
import styled from "styled-components";
import { Colors, makeMediaQueryMaxStr } from "../../constants";
import { Container, FormContainer, FormContentContainer, GreenContainer, OrangeContainer } from "./styled-components";

const Overrides = {
    BaseButton: {
        style: {
            backgroundColor: Colors.Blue,
            paddingTop: '34px',
            paddingRight: '60px',
            paddingBottom: '34px',
            paddingLeft: '60px',
            width: 'fit-content',
            borderTopLeftRadius: "5px",
            borderTopRightRadius: "5px",
            borderBottomRightRadius: "5px",
            borderBottomLeftRadius: "5px",
            height: '100px',
            ':hover': {
                backgroundColor: Colors.Orange,
            },
            [makeMediaQueryMaxStr(1000)]: {
                height: "200px"
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