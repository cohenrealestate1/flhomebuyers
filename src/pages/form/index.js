// @flow
import React from "react";
import { withFormik, useFormikContext } from "formik";
import getInitialValues from "../../components/form/initial-values";
import Step1 from "./step-1";
import Step2 from "./step-2";
import Step3 from "./step-3";
import Step4 from "./step-4";
import Step5 from "./step-5";
import { FormContainer } from "./styled-components";
import styled from "styled-components";
import BottomButton from "./bottom-button";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Form = () => {
  const { values } = useFormikContext();
  const { step } = values;

  const getContent = () => {
    switch (step) {
      case 1:
        return <Step1 />;
      case 2:
        return <Step2 />;
      case 3:
        return <Step3 />;
      case 4:
        return <Step4 />;
      case 5:
        return <Step5 />;
    }
  };
  return (
    <FormContainer>
      <MainContainer>
        {getContent()}
        <BottomButton />
      </MainContainer>
    </FormContainer>
  );
};

export default withFormik({
  validateOnBlur: false,
  validateOnChange: false,
  mapPropsToValues: getInitialValues,
  handleSubmit: () => {},
  validate: () => {},
})(Form);
