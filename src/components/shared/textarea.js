// @flow
import { FormControl } from "baseui/form-control";
import { SIZE } from "baseui/input";
import { Textarea as BaseUITextarea } from "baseui/textarea";
import { useFormikContext } from "formik";
import React, { useState } from "react";
import { BlueBorder, Colors, makeMediaQueryMaxStr, NoBorder } from "../../constants";
import Label, { LabelOverrides } from "./label";

const InputOverrides = (active: boolean) => ({
    Root: {
        style: {
            borderTopLeftRadius: "10px",
            borderBottomLeftRadius: "10px",
            borderTopRightRadius: "10px",
            borderBottomRightRadius: "10px",
            backgroundColor: Colors.Gray1,
            ...(active ? BlueBorder : NoBorder),
            [makeMediaQueryMaxStr(1000)]: {
                height: "260px"
            }
        },
    },
    InputContainer: {
        style: {
            backgroundColor: Colors.Gray1,
            height: '158px'
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
    }
})

type Props = {
    fieldName: string,
    value: any,
    placeholder: string,
    label: string,
}

export const Textarea = (props: Props) => {
    const {fieldName, value, placeholder, label} = props;
    const {setFieldValue} = useFormikContext();
    const [active, setActive ] = useState(false);
    return <div>
            <FormControl label={<Label label={label}/>} overrides={LabelOverrides}>
            <BaseUITextarea 
                value={value} 
                placeholder={placeholder}
                overrides={InputOverrides(active)}
                onChange={newValue => setFieldValue(fieldName, newValue.target.value, false)}
                onFocus={() => setActive(true)}
                onBlur={() => setActive(false)} 
                size={SIZE.large}
            />
            </FormControl>
    </div>
}

export default Textarea;