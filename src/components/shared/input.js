// @flow
import { FormControl } from "baseui/form-control";
import { Input as BaseUIInput } from "baseui/input";
import { useFormikContext } from "formik";
import React, { ReactNode, useState } from "react";
import styled from "styled-components";
import { BlueBorder, Colors, makeMediaQueryMax, makeMediaQueryMaxStr, NoBorder, RedBorder } from "../../constants";
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
            ...(error ? RedBorder : active ? BlueBorder : NoBorder),
            [makeMediaQueryMaxStr(1000)]: {
                height: "160px"
            }
        },
    },
    InputContainer: {
        style: {
            backgroundColor: error ? Colors.Red1 : Colors.Gray1,
        }
    },
    Input: {
        style: {
            color: Colors.Gray2,
            fontSize: "25px",
            lineHeight: "34px",
            fontWeight: "400",
            fontFamily: "Open Sans",
            [makeMediaQueryMaxStr(1000)]: {
                fontSize: "55px",
                lineHeight: "45px",
                fontWeight: "400",
            }
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
            marginLeft: '19px',
            [makeMediaQueryMaxStr(1000)]: {
                display: "flex",
                fontSize: "85px",
                lineHeight: "45px",
                fontWeight: "400",
            }
        }
    },
    Caption: {
        style: {
            fontSize: "25px",
            fontFamily: "Montserrat",
            [makeMediaQueryMaxStr(1000)]: {
                fontSize: "35px",
                lineHeight: "45px",
                fontWeight: "400",
            }
        }
    }
}

const Container = styled.div`
    flex: ${props => props.$flex ? 1 : 'unset'};
`
const StartEnhancerContainer = styled.div`
    ${makeMediaQueryMax(1000, `
        height: 70px;
        width: 70px;
    `)}
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
    error?: string,
    type?: string
}

export const Input = (props: Props) => {
    const {renderStartEnhancer, fieldName, value, placeholder, onChangeMapper = value => value, label, required, flex, error, type} = props;
    const {setFieldValue} = useFormikContext();
    const [active, setActive ] = useState(false);
    return <Container $flex={flex}><FormControl label={<Label label={label} required={required} />} overrides={LabelOverrides} error={error}>
            <BaseUIInput 
                value={value} 
                placeholder={placeholder}
                overrides={InputOverrides(active, error)}
                startEnhancer={renderStartEnhancer ? <StartEnhancerContainer>{renderStartEnhancer(active)}</StartEnhancerContainer> : null}
                onChange={newValue => setFieldValue(fieldName, onChangeMapper(newValue.target.value), false)}
                onFocus={() => setActive(true)}
                onBlur={() => setActive(false)} 
                error={Boolean(error)}
                type={type}
            />

        </FormControl>
        </Container>
}

export default Input;