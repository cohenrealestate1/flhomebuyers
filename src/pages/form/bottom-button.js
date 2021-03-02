// @flow
import React, { useState } from "react";
import { useFormikContext } from "formik";
import { useRPCRedux } from "fusion-plugin-rpc-redux-react";
import { withRouter } from "fusion-plugin-react-router";
import { StyledButton as StyledButtonGeneric } from "../../components/shared/styled-components";
import { StyleConstants } from "../../constants";
import { CircularProgress } from "@material-ui/core";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledButton = styled(StyledButtonGeneric)`
  width: 100%;
`;

type Props = {
  nextRoute: string,
  validate?: (values: any) => any,
  isLastStep?: boolean,
};

export const BottomButton = (props: Props) => {
  const { nextRoute, history, validate, isLastStep } = props;
  const { values, setErrors } = useFormikContext();
  const sendEmailLead = useRPCRedux("sendEmailLead");

  const [isSubmitting, setIsSubmitting] = useState(false);

  const onClick = async (callback?: Function) => {
    const errors = validate ? validate(values) : {};
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
    } else {
      setErrors({});
      setIsSubmitting(true);
      if (callback) {
        await callback();
      }
      history.push(nextRoute);
      setIsSubmitting(false);
    }
  };

  if (!isLastStep) {
    return (
      <StyledButton
        disabled={isSubmitting}
        variant="contained"
        $color={StyleConstants.LightBlue}
        onClick={() => onClick()}
      >
        Next!
      </StyledButton>
    );
  }

  return (
    <Container>
      <StyledButton
        disabled={isSubmitting}
        variant="contained"
        $color={StyleConstants.LightBlue}
        onClick={async () =>
          await onClick(async () => await sendEmailLead(values))
        }
      >
        Get your cash offer now!
      </StyledButton>
      {isSubmitting && <CircularProgress />}
    </Container>
  );
};

export default withRouter(BottomButton);
