// @flow

export type LeadIntakeFormValues = {
    email: string,
    phoneNumber: string,
    address: string,
  };
  
  export const getInitialValues = (): LeadIntakeFormValues => {
    return {
        email: "",
        phoneNumber: "",
        address: ""
    }
  };
  
  export default getInitialValues;
  