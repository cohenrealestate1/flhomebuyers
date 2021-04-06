// @flow
import React from "react";
import { Envelope } from "../icons/envelope";
import Input from "./input";

type EmailProps = {
    value: string,
    error: string
}

export const EmailInput = (props: EmailProps) => {
    const {value, error} = props;
    return <Input 
        renderStartEnhancer={active => <Envelope active={active} />}
        fieldName="email"
        value={value}
        placeholder="Your email address"
        label="Email address"
        required={true}
        flex={true}
        error={error}
    />
}