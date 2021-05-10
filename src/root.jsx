// @flow
import React from "react";
import { Route, Switch } from "fusion-plugin-react-router";
import {BlogPosts, Routes, Testimonials} from "./constants";
import Pages from "./components/pages";
import {LightTheme, BaseProvider} from 'baseui';
import {makeCityRoutes} from "./components/city-route";

const numbers = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];
const FontFamilySuffix = [numbers.join(","), numbers.join("italic,")].join(",");

const root = (
    <BaseProvider theme={LightTheme}>
        <link href={`https://fonts.googleapis.com/css?family=Montserrat:${FontFamilySuffix}`} rel="stylesheet"/>
        <link href={`https://fonts.googleapis.com/css?family=Open+Sans:${FontFamilySuffix}`} rel="stylesheet"/>
        <script type="text/javascript">
            var tlJsHost = ((window.location.protocol == "https:") ? "https://secure.trust-provider.com/" : "http://www.trustlogo.com/");
            document.write(unescape("%3Cscript src='" + tlJsHost + "trustlogo/javascript/trustlogo.js' type='text/javascript'%3E%3C/script%3E"));
        </script>
        <script language="JavaScript" type="text/javascript">
        TrustLogo("https://www.positivessl.com/images/seals/positivessl_trust_seal_lg_222x54.png", "POSDV", "none");
        </script>
    <Switch>
    {BlogPosts.map(blog => <Route key={blog.url} exact path={blog.url} component={Pages.BlogDetail} />)}
    {Testimonials.map(testimonial => <Route key={testimonial.url} exact path={testimonial.url} component={Pages.TestimonialDetail} />)}
    {makeCityRoutes(Pages.Home)}
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
