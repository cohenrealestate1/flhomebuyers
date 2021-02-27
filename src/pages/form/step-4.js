// @flow

import React from "react";
import { useFormikContext } from "formik";
import TextField from "../../components/shared/text-field";
import Select from "../../components/shared/select";
import {
  NumBedsOptions,
  NumBathsOptions,
  ConditionOptions,
  IsOccupiedOptions,
  IsListedOptions,
  Routes,
} from "../../constants";
import FormStep from "./form-step";
import { FormSideBySideContainer } from "../../components/shared/styled-components";

export const FormStep4 = () => {
  const {
    values: {
      step4: {
        numBeds,
        numBaths,
        howLongOwned,
        condition,
        repairsNeeded,
        isOccupied,
        isListed,
      },
    },
  } = useFormikContext();
  return (
    <FormStep nextRoute={Routes.FormStep5}>
      <FormSideBySideContainer>
        <Select
          fieldName="step4.numBeds"
          label="How many beds?"
          value={numBeds}
          options={NumBedsOptions}
        />
        <Select
          fieldName="step4.numBaths"
          label="How many baths?"
          value={numBaths}
          options={NumBathsOptions}
        />
      </FormSideBySideContainer>
      <FormSideBySideContainer>
        <TextField
          fieldName="step4.howLongOwned"
          label="How long have you owned the property?"
          value={howLongOwned}
        />
        <Select
          fieldName="step4.condition"
          label="What is the current condition?"
          value={condition}
          options={ConditionOptions}
        />
      </FormSideBySideContainer>
      <TextField
        fieldName="step4.repairsNeeded"
        label="What kind of repairs and maintenance does the house need?"
        multiline={true}
        value={repairsNeeded}
      />
      <FormSideBySideContainer>
        <Select
          fieldName="step4.isOccupied"
          label="Is there anyone living in the house?"
          value={isOccupied}
          options={IsOccupiedOptions}
        />
        <Select
          fieldName="step4.isListed"
          label="Is the house currently listed with a realtor?"
          value={isListed}
          options={IsListedOptions}
        />
      </FormSideBySideContainer>
    </FormStep>
  );
};

export default FormStep4;
