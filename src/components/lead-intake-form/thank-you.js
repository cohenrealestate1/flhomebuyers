// @flow
import React from "react";
import { Colors } from "../../constants";
import ThankYouForm from "../shared/thank-you-form";
import Text from "../text";

export const LeadIntakeFormThankYou = () => {
    return <ThankYouForm
        topText={<>YOUR INQUIRY HAS BEEN RECEIVED AND A <Text $inline $color={Colors.Green}>Cash</Text> OFFER IS ON THE WAY.</>}
        bottomText="Our team will be in touch in the next 30 minutes to make you a CASH OFFER on your home."
    />
};

export default LeadIntakeFormThankYou;