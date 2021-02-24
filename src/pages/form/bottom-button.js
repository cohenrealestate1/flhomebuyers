// @flow
import React from "react";
import { useFormikContext } from "formik";
import { useRPCRedux } from "fusion-plugin-rpc-redux-react";
import { Button } from "@material-ui/core";
import { withRouter } from "fusion-plugin-react-router";

type Props = {
  nextRoute?: string,
  validate?: (values: any) => any,
};

export const BottomButton = (props: Props) => {
  const { nextRoute, history, validate } = props;
  const { values, setErrors } = useFormikContext();
  const sendEmail = useRPCRedux("sendEmail");

  if (nextRoute) {
    const onClick = () => {
      const errors = validate ? validate(values) : {};
      if (Object.keys(errors).length > 0) {
        setErrors(errors);
      } else {
        setErrors({});
        history.push(nextRoute);
      }
    };
    return <Button onClick={onClick}>Next!</Button>;
  }

  return (
    <Button onClick={async () => console.log(await sendEmail(values))}>
      Get your cash offer now!
    </Button>
  );
};

export default withRouter(BottomButton);
