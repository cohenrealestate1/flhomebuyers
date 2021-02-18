// @flow
import React from "react";
import styled from "styled-components";
import { Grid } from "@material-ui/core";

const Container = styled.div`
  margin-top: auto;
  background-color: black;
  color: white;
`;

const StyledParentGrid = styled(Grid)`
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledText = styled(Grid)`
  text-align: right;
`;

export const Footer = () => {
  return (
    <Container>
      <StyledParentGrid container={true} spacing={0}>
        <Grid item={true} xs={4}>
          Images
        </Grid>
        <StyledText item={true} xs={4}>
          Text
        </StyledText>
      </StyledParentGrid>
    </Container>
  );
};

export default Footer;
