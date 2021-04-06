// @flow
import { FormControl } from "baseui/form-control";
import { Input as BaseUIInput } from "baseui/input";
import { useFormikContext } from "formik";
import React, { ReactNode, useState } from "react";
import styled from "styled-components";
import { BlueBorder, Colors, NoBorder, RedBorder } from "../../constants";
import Label from "./label";

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
    Caption: {
        style: {
            fontSize: "25px",
            fontFamily: "Montserrat"
        }
    }
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
    return <Container $flex={flex}><FormControl label={<Label label={label} required={required} />} overrides={LabelOverrides} error={error}>
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

export default Input;