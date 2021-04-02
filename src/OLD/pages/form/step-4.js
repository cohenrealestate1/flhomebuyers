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
import { SideBySideContainer } from "../../components/shared/styled-components";
import { assetUrl } from "fusion-core";

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
      <SideBySideContainer>
        <Select
          fieldName="step4.numBeds"
          label="How many beds?"
          value={numBeds}
          options={NumBedsOptions}
          adornmentSrc={assetUrl("../../static/bed.svg")}
        />
        <Select
          fieldName="step4.numBaths"
          label="How many baths?"
          value={numBaths}
          options={NumBathsOptions}
          adornmentSrc={assetUrl("../../static/bath.svg")}
        />
      </SideBySideContainer>
      <SideBySideContainer>
        <TextField
          fieldName="step4.howLongOwned"
          label="How long have you owned the property?"
          value={howLongOwned}
          adornmentSrc={assetUrl("../../static/watch.svg")}
        />
        <Select
          fieldName="step4.condition"
          label="What is the current condition?"
          value={condition}
          options={ConditionOptions}
          adornmentSrc={assetUrl("../../static/tools.svg")}
        />
      </SideBySideContainer>
      <TextField
        fieldName="step4.repairsNeeded"
        label="What kind of repairs and maintenance does the house need?"
        multiline={true}
        value={repairsNeeded}
      />
      <SideBySideContainer>
        <Select
          fieldName="step4.isOccupied"
          label="Is there anyone living in the house?"
          value={isOccupied}
          options={IsOccupiedOptions}
          adornmentSrc={assetUrl("../../static/person.svg")}
        />
        <Select
          fieldName="step4.isListed"
          label="Is the house currently listed with a realtor?"
          value={isListed}
          adornmentSrc={assetUrl("../../static/house.svg")}
          options={IsListedOptions}
        />
      </SideBySideContainer>
    </FormStep>
  );
};

export default FormStep4;
