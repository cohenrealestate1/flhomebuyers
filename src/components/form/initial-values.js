// @flow
import { States } from "../../constants/states";

type FormValuesType = {
  step: number,
  formWide: {
    email: string,
    phoneNumber: string,
    address: string,
  },
  step2: {
    city: string,
    state: string,
    zip: string,
  },
  step3: {
    firstName: string,
    lastName: string,
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
    formWide: {
      email: "",
      phoneNumber: "",
      address: "",
    },
    step2: {
      city: "",
      state: States.Florida,
      zip: "",
    },
    step3: {
      firstName: "",
      lastName: "",
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
