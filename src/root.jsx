// @flow
import React from "react";
import { Route, Switch } from "fusion-plugin-react-router";
import {Routes} from "./constants";
import Pages from "./components/pages";
import {LightTheme, BaseProvider} from 'baseui';

const unimplemented = () => "Hello world";

const numbers = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];
const FontFamilySuffix = [numbers.join(","), numbers.join("italic,")].join(",");

const root = (
    <BaseProvider theme={LightTheme}>
        <link href={`https://fonts.googleapis.com/css?family=Montserrat:${FontFamilySuffix}`} rel="stylesheet"/>
        <link href={`https://fonts.googleapis.com/css?family=Open+Sans:${FontFamilySuffix}`} rel="stylesheet"/>
    <Switch>
    <Route path={[Routes.Form, Routes.Covid19, Routes.AboutUs, Routes.Testimonials, Routes.Blog, Routes.HowItWorks, Routes.Locations]} component={unimplemented} />
    <Route path={Routes.ThankYouContactUs} component={Pages.ContactUs} />
    <Route path={Routes.ContactUs} component={Pages.ContactUs} />
    <Route path={Routes.ThankYouLeadIntakeForm} component={Pages.Home} />
    <Route exact path={Routes.Home} component={Pages.Home} />
    </Switch>
    </BaseProvider>
);

export default root;
