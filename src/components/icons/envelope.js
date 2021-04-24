// @flow
import React from "react";
import { Colors } from "../../constants";
import { Svg, SvgFooter } from "./styled-components";

type Props = {
    active: boolean;
    color: string;
    footer?: boolean;
}

export const Envelope = (props: Props) => {
    const {active, color, footer} = props;
    const fillColor = color || (active ? Colors.Blue : Colors.Gray3);
    const Component = footer ? SvgFooter : Svg;
    return <Component viewBox="0 0 35 37" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M27.7082 6.16675H7.2915C6.13118 6.16675 5.01838 6.65402 4.19791 7.52138C3.37744 8.38873 2.9165 9.56512 2.9165 10.7917V26.2084C2.9165 27.435 3.37744 28.6114 4.19791 29.4788C5.01838 30.3461 6.13118 30.8334 7.2915 30.8334H27.7082C28.8685 30.8334 29.9813 30.3461 30.8018 29.4788C31.6222 28.6114 32.0832 27.435 32.0832 26.2084V10.7917C32.0832 9.56512 31.6222 8.38873 30.8018 7.52138C29.9813 6.65402 28.8685 6.16675 27.7082 6.16675ZM26.7311 9.25008L17.4998 16.573L8.26859 9.25008H26.7311ZM27.7082 27.7501H7.2915C6.90473 27.7501 6.5338 27.5877 6.26031 27.2985C5.98682 27.0094 5.83317 26.6173 5.83317 26.2084V11.1772L16.6248 19.7334C16.8773 19.9336 17.1843 20.0417 17.4998 20.0417C17.8154 20.0417 18.1224 19.9336 18.3748 19.7334L29.1665 11.1772V26.2084C29.1665 26.6173 29.0129 27.0094 28.7394 27.2985C28.4659 27.5877 28.095 27.7501 27.7082 27.7501Z" fill={fillColor}/>
    </Component>
}

export default Envelope;