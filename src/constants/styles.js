// @flow
export const Colors = {
    Yellow: "#FFFF00",
    Blue: "#1562AB",
    Green: "#2BB673",
    Orange: "#FAAD78",
    White: "#FFFFFF",
    Gray1: "#F7F7F7",
    Gray2: "#343434",
    Gray3: "#5C5C5C",
    Gray4: "#E5E5E5",
    Red1: "#FFEFED",
    Red2: "#EA121D"
}

export const CardColors = [
    Colors.Blue,
    Colors.Orange,
    Colors.Green
]

export const FontFamilies = {
    M: 'font-family: Montserrat;',
    OS: 'font-family: Open Sans;'
}
export const LetterSpacing = `letter-spacing: 2px;`;
export const Uppercase = `text-transform: uppercase;`
export const Inline = `display: inline;`;
export const Underline = `text-decoration: underline;`;
export const Centered = `margin-left: auto; margin-right: auto;`

export const Typographies = {
    LargeNumber: `
        ${FontFamilies.M}
        font-size: 100px;
        line-height: 122px;
        font-weight: 800;
    `,
    PageHeader: `
        ${FontFamilies.M}
        ${LetterSpacing}
        font-size: 90px;
        line-height: 90px;
        font-weight: 600;
    `,
    SubHeaderBig: `
        ${FontFamilies.M}
        ${LetterSpacing}
        font-size: 60px;
        font-weight: 700;
    `,
    SubHeaderMedium: `
        ${FontFamilies.OS}
        font-size: 50px;
        font-weight: 400;
        line-height: 68px;
    `,
    ButtonBig: `
        ${FontFamilies.OS}
        font-size: 40px;
        font-weight: 700;
        line-height: 55px;
    `,
    SubHeaderSmall: `
        ${FontFamilies.OS}
        font-size: 30px;
        font-weight: 700;
        line-height: 50px;
    `,
    TextXLarge: `
        ${FontFamilies.M}
        font-size: 30px;
        font-weight: 600;
        line-height: 45px;
    `,
    ButtonMedium: `
        ${FontFamilies.OS}
        font-size: 30px;
        font-weight: 700;
        line-height: 41px;
    `,
    TextLarge: `
        ${FontFamilies.M}
        font-size: 30px;
        font-weight: 800;
        line-height: 37px;
    `,
    FormSubmitButton: `
        ${FontFamilies.M}
        font-size: 26px;
        font-weight: 700;
        line-height: 32px;
    `,
    TextMedium: `
        font-size: 25px;
    `,
    EmailButton: `
        font-size: 22px;
    `,
    TextSmall: `
        font-size: 20px;
    `,
    TextXSmall: `
        font-size: 18px;
    `
};

export const BlueBorder = {
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

export const RedBorder = {
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

export const NoBorder = {
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