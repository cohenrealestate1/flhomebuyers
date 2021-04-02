// @flow
import { type ContactUsFormValues } from "./initial-values";
import {
  validateEmail,
  validatePhoneNumber,
  validateFirstName,
  validateLastName,
} from "../../components/form/validate";

export const validate = (values: ContactUsFormValues) => {
  const { firstName, lastName, phoneNumber, email, freeFormText } = values;
  const errors = {};
  validateEmail(email, errors);
  validatePhoneNumber(phoneNumber, errors);
  validateFirstName(firstName, errors);
  validateLastName(lastName, errors);
  if (!freeFormText) {
    errors.freeFormText = "Please enter questions or comments!";
  }
  return errors;
};

export default validate;
