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

const RedBorder = {
    borderTopColor: Colors.Red2,
    borderTopWidth: "2px",
    borderTopStyle: "solid",
    borderRightColor: Colors.Red2,
    borderRightWidth: "2px",
    borderRightStyle: "solid",
    borderBottomColor: Colors.Red2,
    borderBottomWidth: "2px",
    borderBottomStyle: "solid",
    borderLeftColor: Colors.Red2,
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

const InputOverrides = (active: boolean, error: boolean) => ({
    Root: {
        style: {
            height: "80px",
            borderTopLeftRadius: "10px",
            borderBottomLeftRadius: "10px",
            borderTopRightRadius: "10px",
            borderBottomRightRadius: "10px",
            backgroundColor: error ? Colors.Red1 : Colors.Gray1,
            ...(error ? RedBorder : active ? BlueBorder : NoBorder)
        },
    },
    InputContainer: {
        style: {
            backgroundColor: error ? Colors.Red1 : Colors.Gray1
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
            backgroundColor: error ? Colors.Red1 : Colors.Gray1
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
    flex?: boolean,
    error?: string
}

export const Input = (props: Props) => {
    const {renderStartEnhancer, fieldName, value, placeholder, onChangeMapper = value => value, label, required, flex, error} = props;
    const {setFieldValue} = useFormikContext();
    const [active, setActive ] = useState(false);
    return <Container $flex={flex}><FormControl label={<Label label={label} required={required} />} overrides={LabelOverrides} error={Boolean(error)}>
        <BaseUIInput 
            value={value} 
            placeholder={placeholder}
            overrides={InputOverrides(active, error)}
            startEnhancer={renderStartEnhancer ? renderStartEnhancer(active) : null}
            onChange={newValue => setFieldValue(fieldName, onChangeMapper(newValue.target.value), false)}
            onFocus={() => setActive(true)}
            onBlur={() => setActive(false)} 
            error={Boolean(error)}
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

export default Input;