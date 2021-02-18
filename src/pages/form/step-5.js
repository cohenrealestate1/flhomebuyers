// @flow

import React from "react";
import { useFormikContext } from "formik";
import TextField from "../../components/shared/text-field";
import Select from "../../components/shared/select";
import { NeedToSellFastOptions } from "../../constants/form-options";

export const FormStep5 = () => {
  const {
    values: {
      step5: { needToSellFast, whySelling, ultimateGoal },
    },
  } = useFormikContext();
  return (
    <>
      <Select
        fieldName="step5.numBeds"
        label="Do you need to sell your home fast?"
        value={needToSellFast}
        options={NeedToSellFastOptions}
      />
      <TextField
        fieldName="step5.whySelling"
        label="Why are you selling?"
        value={whySelling}
        multiline={true}
      />
      <TextField
        fieldName="step5.ultimateGoal"
        label="What is your ultimate goal with your house?"
        value={ultimateGoal}
        multiline={true}
      />
    </>
  );
};

export default FormStep5;
