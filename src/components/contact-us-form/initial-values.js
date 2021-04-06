// @flow

export type ContactUsFormValues = {
    email: string,
    phoneNumber: string,
    freeFormText: string,
    firstName: string,
    lastName: string,
  };
  
  export const getInitialValues = (): ContactUsFormValues => {
    return {
        email: "",
        phoneNumber: "",
        freeFormText: "",
        firstName: "",
        lastName: ""
    }
  };
  
  export default getInitialValues;
  