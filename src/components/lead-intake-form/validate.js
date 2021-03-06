// @flow
import { validateEmail, validatePhoneNumber } from "../shared/validate";
import { LeadIntakeFormValues } from "./initial-values";

  export const validate = (values: LeadIntakeFormValues) => {
      const errors = {};
      validateEmail(values.email, errors);
      validatePhoneNumber(values.phoneNumber, errors);
      if (!values.address) {
        errors.address = "Please enter an address";
      }
      return errors;
  }

  export default validate;