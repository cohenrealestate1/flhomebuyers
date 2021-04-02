// @flow
export type ContactUsFormValues = {
  firstName: string,
  lastName: string,
  phoneNumber: string,
  email: string,
  freeFormText: string,
};

export const getInitialValues = (): ContactUsFormValues => ({
  firstName: "",
  lastName: "",
  phoneNumber: "",
  email: "",
  freeFormText: "",
});

export default getInitialValues;
