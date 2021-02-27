// @flow
import React from "react";
import { useFormikContext } from "formik";
import { useRPCRedux } from "fusion-plugin-rpc-redux-react";
import { withRouter } from "fusion-plugin-react-router";
import { StyledButton } from "../../components/shared/styled-components";

type Props = {
  nextRoute?: string,
  validate?: (values: any) => any,
};

export const BottomButton = (props: Props) => {
  const { nextRoute, history, validate } = props;
  const { values, setErrors } = useFormikContext();
  const sendEmailLead = useRPCRedux("sendEmailLead");

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
    return <StyledButton onClick={onClick}>Next!</StyledButton>;
  }

  return (
    <StyledButton onClick={async () => await sendEmailLead(values)}>
      Get your cash offer now!
    </StyledButton>
  );
};

export default withRouter(BottomButton);
