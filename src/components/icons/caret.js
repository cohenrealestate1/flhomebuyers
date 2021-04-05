// @flow
import React from "react";

type Props = {
    color: boolean;
}

export const Caret = (props: Props) => {
    const {color} = props;
    return <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 5L20 15L10 25" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
}

export default Caret;