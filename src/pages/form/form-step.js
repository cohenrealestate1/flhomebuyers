// @flow
import React, { ReactNode } from "react";
import BottomButton from "./bottom-button";
import { FormStepContainer } from "../../components/shared/styled-components";

type Props = {
  children: ReactNode,
  nextRoute: string,
  validate: (values: any) => any,
};

export const FormStep = (props: Props) => {
  const { children, nextRoute, validate } = props;
  return (
    <FormStepContainer>
      {children}
      <BottomButton nextRoute={nextRoute} validate={validate} />
    </FormStepContainer>
  );
};

export default FormStep;
