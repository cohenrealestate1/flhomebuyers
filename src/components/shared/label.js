// @flow
import React from "react";
import styled from "styled-components";
import { Colors, FontFamilies, Typographies, Uppercase } from "../../constants";

const LabelContainer = styled.div`
    ${FontFamilies.M}
    ${Typographies.TextMedium}
    font-weight: 800;
    line-height: 30px;
    color: ${Colors.Gray2};
    ${Uppercase}
    display: flex;
`
const RequiredAsterisk = styled(LabelContainer)`
    color: ${Colors.Red2};
    margin-left: 8px;
`

type LabelProps = {
    label: string,
    required: boolean
}
const Label = (props: LabelProps) => {
    const {label, required} = props;
    return <LabelContainer>
        <div>{label}</div>
        {required && <RequiredAsterisk>*</RequiredAsterisk>}
        </LabelContainer>
}

export default Label;

export const LabelOverrides = {
    Label: {
        style: {
            marginTop: 0,
            marginBottom: '20px',
            marginLeft: '19px'
        }
    }
}
