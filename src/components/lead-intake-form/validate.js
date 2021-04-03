// @flow
import { LeadIntakeFormValues } from "./initial-values";

function validateEmailRegex(email: string) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  
  export const validateEmail = (email: string, errors: any) => {
    if (!email) {
      errors.email = "Please enter an email";
    } else if (!validateEmailRegex(email)) {
      errors.email = "Please enter a valid email";
    }
  };
  
  export const validatePhoneNumber = (phoneNumber: string, errors: any) => {
    if (!phoneNumber) {
      errors.phoneNumber = "Please enter a phone number";
    } else if (phoneNumber.length !== 14) {
      errors.phoneNumber = "Please enter a valid phone number";
    }
  };
  
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