// @flow

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

export const validateFirstName = (firstName: string, errors: any) => {
  if (!firstName) {
    errors.firstName = "Please enter a first name";
  }
};

export const validateLastName = (lastName: string, errors: any) => {
  if (!lastName) {
    errors.lastName = "Please enter a last name";
  }
};

export const validateStep1 = (values: FormValuesType) => {
  const {
    formWide: { email, phoneNumber, address },
  } = values;
  const errors = {};
  validateEmail(email, errors);
  validatePhoneNumber(phoneNumber, errors);
  if (!address) {
    errors.address = "Please enter an address";
  }
  return errors;
};

export const validateStep3 = (values: FormValuesType) => {
  const {
    formWide: { email, phoneNumber },
    step3: { firstName, lastName },
  } = values;
  const errors = {};
  validateEmail(email, errors);
  validatePhoneNumber(phoneNumber, errors);
  validateFirstName(firstName, errors);
  validateLastName(lastName, errors);
  return errors;
};
