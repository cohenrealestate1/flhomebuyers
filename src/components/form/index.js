// @flow
import React, { ReactNode } from "react";
import { Container, FormContainer, FormContentContainer, GreenContainer, OrangeContainer } from "./styled-components";

type Props = {
    children: ReactNode
}

export const Form = (props: Props) => {
    return <Container>
        <FormContainer>
            <FormContentContainer>{props.children}</FormContentContainer>
            <OrangeContainer />
            <GreenContainer />
        </FormContainer>
    </Container>
}

export default Form;