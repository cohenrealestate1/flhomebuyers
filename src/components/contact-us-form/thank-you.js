// @flow
import React from "react";
import ThankYouForm from "../shared/thank-you-form";

export const ContactUsFormThankYou = () => {
    return <ThankYouForm
        topText={<>YOUR INQUIRY HAS BEEN RECEIVED AND A PHone Call Is on the way.</>}
        bottomText="Our team will be in touch in the next 30 minutes."
    />
};

export default ContactUsFormThankYou;