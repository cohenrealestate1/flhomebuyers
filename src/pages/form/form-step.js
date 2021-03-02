// @flow
import React, { ReactNode } from "react";
import BottomButton from "./bottom-button";
import { FormStepContainer } from "../../components/shared/styled-components";

type Props = {
  children: ReactNode,
  nextRoute: string,
  validate: (values: any) => any,
  isLastStep?: Boolean,
};

export const FormStep = (props: Props) => {
  const { children, nextRoute, validate, isLastStep } = props;
  return (
    <FormStepContainer>
      {children}
      <BottomButton
        nextRoute={nextRoute}
        validate={validate}
        isLastStep={isLastStep}
      />
    </FormStepContainer>
  );
};

export default FormStep;
