// @flow
import React from "react";
import { withFormik, useFormikContext } from "formik";
import getInitialValues from "../../components/form/initial-values";
import Step1 from "./step-1";
import Step2 from "./step-2";
import Step3 from "./step-3";
import Step4 from "./step-4";
import { FormContainer } from "./styled-components";
import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const ChildContainer = styled.div`
  margin-bottom: 36px;
  background-color: grey;
`;

export const Form = () => {
  const {
    values: { step },
  } = useFormikContext();
  // const getContent = () => {
  //   switch (step) {
  //     case 1:
  //       return <Step1 />;
  //     case 2:
  //     default:
  //       return <Step2 />;
  //   }
  // };
  return (
    <FormContainer>
      <MainContainer>
        <ChildContainer>
          <Step1 />
        </ChildContainer>
        <ChildContainer>
          <Step2 />
        </ChildContainer>
        <ChildContainer>
          <Step3 />
        </ChildContainer>
        <ChildContainer>
          <Step4 />
        </ChildContainer>
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
