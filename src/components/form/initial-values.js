// @flow

type FormValuesType = {
  step: number,
  step1: {
    address: string,
    phoneNumber: string,
    email: string,
  },
  step2: {
    address: string,
    city: string,
    state: string,
    zip: string,
  },
  step3: {
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
  },
  step4: {
    numBeds: number,
    numBaths: number,
    howLongOwned: string,
    condition: string,
    repairsNeeded: string,
    isOccupied: string,
    isListed: boolean,
  },
};

export const getInitialValues = (): FormValuesType => {
  return {
    step: 1,
    step1: {
      address: "",
      phoneNumber: "",
      email: "",
    },
    step2: {
      address: "",
      city: "",
      state: "",
      zip: "",
    },
    step3: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
    },
    step4: {
      numBeds: 1,
      numBaths: 1,
      howLongOwned: "",
      condition: "",
      repairsNeeded: "",
      isOccupied: "",
      isListed: true,
    },
  };
};

export default getInitialValues;
