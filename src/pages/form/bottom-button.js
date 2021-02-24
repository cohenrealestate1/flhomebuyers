// @flow
import React from "react";
import { useFormikContext } from "formik";
import { useRPCRedux } from "fusion-plugin-rpc-redux-react";
import { Button } from "@material-ui/core";
import { withRouter } from "fusion-plugin-react-router";

type Props = {
  nextRoute?: string,
};

export const BottomButton = (props: Props) => {
  const { nextRoute, history } = props;
  const { values } = useFormikContext();
  const sendEmail = useRPCRedux("sendEmail");

  if (nextRoute) {
    return <Button onClick={() => history.push(nextRoute)}>Next!</Button>;
  }

  return (
    <Button onClick={async () => console.log(await sendEmail(values))}>
      Get your cash offer now!
    </Button>
  );
};

export default withRouter(BottomButton);
