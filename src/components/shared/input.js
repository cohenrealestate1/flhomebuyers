// @flow
import { Input as BaseUIInput } from "baseui/input";
import { useFormikContext } from "formik";
import React, { ReactNode, useState } from "react";
import { Colors } from "../../constants";

const Overrides = (active: boolean) => ({
    Root: {
        style: {
            height: "80px",
            borderTopLeftRadius: "10px",
            borderBottomLeftRadius: "10px",
            borderTopRightRadius: "10px",
            borderBottomRightRadius: "10px",
            backgroundColor: Colors.Gray1,
            ...(active ? {
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
            } : {
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
                backgroundColor: Colors.Gray1
            }
            )
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
            fontWeight: "normal",
        }
    },
    StartEnhancer: {
        style: {
            backgroundColor: Colors.Gray1
        }
    }
})

type Props = {
    renderStartEnhancer?: (active: boolean) => ReactNode,
    fieldName: string,
    value: any,
    placeholder: string,
    onChangeMapper?: Function
}

export const Input = (props: Props) => {
    const {renderStartEnhancer, fieldName, value, placeholder, onChangeMapper = value => value} = props;
    const {setFieldValue} = useFormikContext();
    const [active, setActive ] = useState(false);
    return <BaseUIInput 
        value={value} 
        placeholder={placeholder}
        overrides={Overrides(active)}
        startEnhancer={renderStartEnhancer ? renderStartEnhancer(active) : null}
        onChange={newValue => setFieldValue(fieldName, onChangeMapper(newValue.target.value), false)}
        onFocus={() => setActive(true)}
        onBlur={() => setActive(false)} 
    />
}

export default Input;