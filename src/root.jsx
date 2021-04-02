// @flow
import React from "react";
import { Route, Switch } from "fusion-plugin-react-router";
import styled from "styled-components";

const Container = styled.div`
  margin: -8px;
`;

const root = (
  <Container>
    <Switch>
      <Route exact path="/" component={() => <div>A</div>} />
    </Switch>
  </Container>
);

export default root;
