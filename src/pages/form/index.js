// @flow
import React from "react";
import { withFormik } from "formik";
import getInitialValues from "../../components/form/initial-values";
import Step1 from "./step-1";
import Step2 from "./step-2";
import Step3 from "./step-3";
import Step4 from "./step-4";
import Step5 from "./step-5";
import { FormContainer } from "../../components/shared/styled-components";
import { Route, Switch } from "fusion-plugin-react-router";
import { Routes } from "../../constants/routes";

export const Form = () => {
  return (
    <FormContainer>
      <Switch>
        <Route path={Routes.FormStep1} component={Step1} />
        <Route path={Routes.FormStep2} component={Step2} />
        <Route path={Routes.FormStep3} component={Step3} />
        <Route path={Routes.FormStep4} component={Step4} />
        <Route path={Routes.FormStep5} component={Step5} />
      </Switch>
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
