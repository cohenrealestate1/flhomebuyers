// @flow
import React from "react";
import { Route, Switch } from "fusion-plugin-react-router";
import styled from "styled-components";
import {Routes} from "./constants";

const Container = styled.div`
  margin: -8px;
`;

const unimplemented = () => "Hello world";

const root = (
  <Container>
    <Switch>
    <Route path={[Routes.ContactUs, Routes.Form, Routes.Covid19, Routes.AboutUs, Routes.Testimonials, Routes.Blog, Routes.HowItWorks]} component={unimplemented} />
    <Route exact path={Routes.Home} component={() => "A"} />
    </Switch>
  </Container>
);

export default root;
