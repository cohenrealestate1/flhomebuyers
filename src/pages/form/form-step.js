// @flow
import React, { ReactNode } from "react";
import styled from "styled-components";
import BottomButton from "./bottom-button";

const Container = styled.div`
  padding: 32px;
  border: 1px solid #e2e2e2;
  background-color: rgb(233, 236, 239);
  display: flex;
  flex-direction: column;
  max-width: 400px;
`;

type Props = {
  children: ReactNode,
  nextRoute: string,
  validate: (values: any) => any,
};

export const FormStep = (props: Props) => {
  const { children, nextRoute, validate } = props;
  return (
    <Container>
      {children}
      <BottomButton nextRoute={nextRoute} validate={validate} />
    </Container>
  );
};

export default FormStep;
