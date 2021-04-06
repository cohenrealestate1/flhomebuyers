// @flow
import { validateEmail, validatePhoneNumber } from "../shared/validate";
import { ContactUsFormValues } from "./initial-values";

  export const validate = (values: ContactUsFormValues) => {
      const errors = {};
      validateEmail(values.email, errors);
      validatePhoneNumber(values.phoneNumber, errors);
      if (!values.address) {
        errors.address = "Please enter an address";
      }
      if (!values.firstName) {
          errors.firstName = "Please enter a first name";
      }
      if (!values.lastName) {
          errors.lastName = "Please enter a last name";
      }
      return errors;
  }

  export default validate;