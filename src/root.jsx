// @flow
import React from "react";
import { Route, Switch } from "fusion-plugin-react-router";
import {Routes} from "./constants";
import Pages from "./components/pages";
import {LightTheme, BaseProvider} from 'baseui';

const numbers = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];
const FontFamilySuffix = [numbers.join(","), numbers.join("italic,")].join(",");

const root = (
    <BaseProvider theme={LightTheme}>
        <link href={`https://fonts.googleapis.com/css?family=Montserrat:${FontFamilySuffix}`} rel="stylesheet"/>
        <link href={`https://fonts.googleapis.com/css?family=Open+Sans:${FontFamilySuffix}`} rel="stylesheet"/>
    <Switch>
    <Route path={Routes.AboutUs} component={Pages.AboutUs} />
    <Route path={Routes.HowItWorks} component={Pages.HowItWorks} />
    <Route path={Routes.Locations} component={Pages.Locations} />
    <Route path={Routes.Covid19} component={Pages.Covid19} />
    <Route path={Routes.Blog} component={Pages.Blog} />
    <Route path={Routes.Testimonials} component={Pages.Testimonials} />
    <Route path={Routes.ThankYouContactUs} component={Pages.ContactUs} />
    <Route path={Routes.ContactUs} component={Pages.ContactUs} />
    <Route path={Routes.GetCashOffer} component={Pages.Home} />
    <Route path={Routes.ThankYouLeadIntakeForm} component={Pages.Home} />
    <Route exact path={Routes.Home} component={Pages.Home} />
    </Switch>
    </BaseProvider>
);

export default root;
