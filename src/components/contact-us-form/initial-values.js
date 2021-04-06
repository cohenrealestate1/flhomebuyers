// @flow

export type ContactUsFormValues = {
    email: string,
    phoneNumber: string,
    address: string,
    firstName: string,
    lastName: string,
  };
  
  export const getInitialValues = (): ContactUsFormValues => {
    return {
        email: "",
        phoneNumber: "",
        address: "",
        firstName: "",
        lastName: ""
    }
  };
  
  export default getInitialValues;
  