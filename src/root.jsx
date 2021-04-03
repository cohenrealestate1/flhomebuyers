// @flow
import React from "react";
import { Route, Switch } from "fusion-plugin-react-router";
import {Routes} from "./constants";
import Page from "./components/page";

const unimplemented = () => "Hello world";

const root = (
    <Switch>
    <Route path={[Routes.ContactUs, Routes.Form, Routes.Covid19, Routes.AboutUs, Routes.Testimonials, Routes.Blog, Routes.HowItWorks]} component={unimplemented} />
    <Route exact path={Routes.Home} component={Page} />
    </Switch>
);

export default root;
