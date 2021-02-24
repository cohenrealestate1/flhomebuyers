// @flow
import React from "react";
import { useFormikContext } from "formik";
import { TotalSteps } from "../../components/form/initial-values";
import { useRPCRedux } from "fusion-plugin-rpc-redux-react";
import { Button } from "@material-ui/core";

export const BottomButton = () => {
  const { values, setFieldValue } = useFormikContext();
  const { step } = values;
  const sendEmail = useRPCRedux("sendEmail");

  if (step < TotalSteps) {
    return (
      <Button onClick={() => setFieldValue("step", step + 1, false)}>
        Next!
      </Button>
    );
  }

  return (
    <Button onClick={async () => console.log(await sendEmail(values))}>
      Get your cash offer now!
    </Button>
  );
};

export default BottomButton;
