// @flow

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export const validateStep1 = (values: FormValuesType) => {
  const {
    formWide: { email, phoneNumber, address },
  } = values;
  const errors = {};
  if (!email) {
    errors.email = "Please enter an email";
  } else if (!validateEmail(email)) {
    errors.email = "Please enter a valid email";
  }
  if (!phoneNumber) {
    errors.phoneNumber = "Please enter a phone number";
  } else if (phoneNumber.length !== 14) {
    errors.phoneNumber = "Please enter a valid phone number";
  }
  if (!address) {
    errors.address = "Please enter an address";
  }
  return errors;
};
