// @flow
import React, { ReactNode } from "react";
import styled from "styled-components";

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
};

export const FormStep = (props: Props) => {
  const { children } = props;
  return <Container>{children}</Container>;
};

export default FormStep;
