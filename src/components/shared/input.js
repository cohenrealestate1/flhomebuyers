// @flow
import { FormControl } from "baseui/form-control";
import { Input as BaseUIInput } from "baseui/input";
import { useFormikContext } from "formik";
import React, { ReactNode, useState } from "react";
import styled from "styled-components";
import { Colors, FontFamilies, Typographies, Uppercase } from "../../constants";

const BlueBorder = {
    borderTopColor: Colors.Blue,
    borderTopWidth: "2px",
    borderTopStyle: "solid",
    borderRightColor: Colors.Blue,
    borderRightWidth: "2px",
    borderRightStyle: "solid",
    borderBottomColor: Colors.Blue,
    borderBottomWidth: "2px",
    borderBottomStyle: "solid",
    borderLeftColor: Colors.Blue,
    borderLeftWidth: "2px",
    borderLeftStyle: "solid",
};

const NoBorder = {
    borderTopColor: 'none',
    borderTopWidth: "0px",
    borderTopStyle: "solid",
    borderRightColor: 'none',
    borderRightWidth: "0px",
    borderRightStyle: "solid",
    borderBottomColor: 'none',
    borderBottomWidth: "0px",
    borderBottomStyle: "solid",
    borderLeftColor: 'none',
    borderLeftWidth: "0px",
    borderLeftStyle: "solid",
}

const InputOverrides = (active: boolean) => ({
    Root: {
        style: {
            height: "80px",
            borderTopLeftRadius: "10px",
            borderBottomLeftRadius: "10px",
            borderTopRightRadius: "10px",
            borderBottomRightRadius: "10px",
            backgroundColor: Colors.Gray1,
            ...(active ? BlueBorder : NoBorder)
        },
        props: {
            tabindex: 1
        }
    },
    InputContainer: {
        style: {
            backgroundColor: Colors.Gray1
        }
    },
    Input: {
        style: {
            color: Colors.Gray2,
            fontSize: "25px",
            lineHeight: "34px",
            fontWeight: "400",
            fontFamily: "Open Sans"
        }
    },
    StartEnhancer: {
        style: {
            backgroundColor: Colors.Gray1
        }
    }
})

const LabelOverrides = {
    Label: {
        style: {
            marginTop: 0,
            marginBottom: '20px',
            marginLeft: '19px'
        }
    },
}

const Container = styled.div`
    flex: ${props => props.$flex ? 1 : 'unset'};
`

type Props = {
    renderStartEnhancer?: (active: boolean) => ReactNode,
    fieldName: string,
    value: any,
    placeholder: string,
    label: string,
    onChangeMapper?: Function,
    required?: boolean,
    flex?: boolean
}

export const Input = (props: Props) => {
    const {renderStartEnhancer, fieldName, value, placeholder, onChangeMapper = value => value, label, required, flex} = props;
    const {setFieldValue} = useFormikContext();
    const [active, setActive ] = useState(false);
    return <Container $flex={flex}><FormControl label={<Label label={label} required={required} />} overrides={LabelOverrides}>
        <BaseUIInput 
            value={value} 
            placeholder={placeholder}
            overrides={InputOverrides(active)}
            startEnhancer={renderStartEnhancer ? renderStartEnhancer(active) : null}
            onChange={newValue => setFieldValue(fieldName, onChangeMapper(newValue.target.value), false)}
            onFocus={() => setActive(true)}
            onBlur={() => setActive(false)} 
        />
        </FormControl>
        </Container>
}

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
    color: ${Colors.Red};
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

export default Input;